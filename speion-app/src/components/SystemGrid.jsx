import { useEffect, useRef, useCallback } from 'react';

/**
 * SystemGrid — Canvas-based background animation
 * Renders: grid lines, flowing data lines, pulsing nodes, network connections
 * 60fps, GPU-accelerated, uses only transform + opacity
 */
const SystemGrid = ({ variant = 'hero', opacity = 0.4 }) => {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const timeRef = useRef(0);
  const nodesRef = useRef([]);
  const flowLinesRef = useRef([]);
  const dataParticlesRef = useRef([]);

  const initNodes = useCallback((w, h) => {
    const count = variant === 'hero' ? 35 : 20;
    const nodes = [];
    for (let i = 0; i < count; i++) {
      nodes.push({
        x: Math.random() * w,
        y: Math.random() * h,
        baseX: Math.random() * w,
        baseY: Math.random() * h,
        radius: Math.random() * 2 + 1,
        pulseSpeed: Math.random() * 0.02 + 0.005,
        pulsePhase: Math.random() * Math.PI * 2,
        driftX: (Math.random() - 0.5) * 0.15,
        driftY: (Math.random() - 0.5) * 0.15,
      });
    }
    nodesRef.current = nodes;
  }, [variant]);

  const initFlowLines = useCallback((w, h) => {
    const count = variant === 'hero' ? 8 : 4;
    const lines = [];
    for (let i = 0; i < count; i++) {
      lines.push({
        startX: -20,
        startY: Math.random() * h,
        progress: Math.random(),
        speed: Math.random() * 0.001 + 0.0005,
        length: Math.random() * 200 + 100,
        angle: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.3 + 0.1,
      });
    }
    flowLinesRef.current = lines;
  }, [variant]);

  const initDataParticles = useCallback((w, h) => {
    const count = variant === 'hero' ? 12 : 6;
    const particles = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        speedX: (Math.random() - 0.3) * 0.6,
        speedY: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 1.5 + 0.5,
        opacity: 0,
        maxOpacity: Math.random() * 0.4 + 0.15,
        fadeState: 'in',
        life: 0,
        maxLife: Math.random() * 600 + 300,
      });
    }
    dataParticlesRef.current = particles;
  }, [variant]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w, h;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.parentElement.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.scale(dpr, dpr);
      initNodes(w, h);
      initFlowLines(w, h);
      initDataParticles(w, h);
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    /* ── Draw grid ── */
    const drawGrid = (t) => {
      const gridSize = 60;
      const cols = Math.ceil(w / gridSize) + 1;
      const rows = Math.ceil(h / gridSize) + 1;

      ctx.strokeStyle = `rgba(14, 165, 233, 0.04)`;
      ctx.lineWidth = 0.5;

      // Vertical lines
      for (let i = 0; i < cols; i++) {
        const x = i * gridSize;
        const waveOffset = Math.sin(t * 0.0008 + i * 0.3) * 2;
        ctx.beginPath();
        ctx.moveTo(x + waveOffset, 0);
        ctx.lineTo(x + waveOffset, h);
        ctx.stroke();
      }

      // Horizontal lines
      for (let i = 0; i < rows; i++) {
        const y = i * gridSize;
        const waveOffset = Math.sin(t * 0.0006 + i * 0.4) * 2;
        ctx.beginPath();
        ctx.moveTo(0, y + waveOffset);
        ctx.lineTo(w, y + waveOffset);
        ctx.stroke();
      }
    };

    /* ── Draw nodes ── */
    const drawNodes = (t) => {
      const nodes = nodesRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      nodes.forEach((node) => {
        // Drift motion
        node.x = node.baseX + Math.sin(t * 0.001 + node.pulsePhase) * 20;
        node.y = node.baseY + Math.cos(t * 0.0008 + node.pulsePhase) * 15;

        // Mouse repulsion (subtle)
        const dx = node.x - mx;
        const dy = node.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          const force = (150 - dist) / 150 * 3;
          node.x += (dx / dist) * force;
          node.y += (dy / dist) * force;
        }

        // Pulse
        const pulse = Math.sin(t * node.pulseSpeed + node.pulsePhase);
        const r = node.radius + pulse * 0.8;
        const alpha = 0.2 + pulse * 0.15;

        // Glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, r + 4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(14, 165, 233, ${alpha * 0.15})`;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(14, 165, 233, ${alpha})`;
        ctx.fill();
      });

      // Draw connections between close nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            const alpha = (1 - dist / 180) * 0.08;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(14, 165, 233, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    /* ── Draw flowing data lines ── */
    const drawFlowLines = (t) => {
      flowLinesRef.current.forEach((line) => {
        line.progress += line.speed;
        if (line.progress > 1.3) {
          line.progress = -0.3;
          line.startY = Math.random() * h;
          line.angle = (Math.random() - 0.5) * 0.3;
        }

        const x1 = line.progress * (w + line.length * 2) - line.length;
        const y1 = line.startY + Math.sin(line.progress * Math.PI) * 30;
        const x2 = x1 + line.length * Math.cos(line.angle);
        const y2 = y1 + line.length * Math.sin(line.angle);

        // Fade edges
        const edgeFade = Math.sin(line.progress * Math.PI);
        const alpha = line.opacity * edgeFade;

        const grad = ctx.createLinearGradient(x1, y1, x2, y2);
        grad.addColorStop(0, `rgba(14, 165, 233, 0)`);
        grad.addColorStop(0.3, `rgba(14, 165, 233, ${alpha})`);
        grad.addColorStop(0.7, `rgba(6, 214, 160, ${alpha * 0.8})`);
        grad.addColorStop(1, `rgba(6, 214, 160, 0)`);

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1;
        ctx.stroke();
      });
    };

    /* ── Draw data particles ── */
    const drawDataParticles = (t) => {
      dataParticlesRef.current.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.life++;

        // Fade in/out lifecycle
        if (p.fadeState === 'in') {
          p.opacity = Math.min(p.opacity + 0.005, p.maxOpacity);
          if (p.opacity >= p.maxOpacity) p.fadeState = 'hold';
        } else if (p.fadeState === 'hold') {
          if (p.life > p.maxLife * 0.7) p.fadeState = 'out';
        } else {
          p.opacity = Math.max(p.opacity - 0.005, 0);
        }

        // Reset
        if (p.life > p.maxLife || p.x > w + 20 || p.x < -20 || p.y > h + 20 || p.y < -20) {
          p.x = Math.random() * w * 0.3;
          p.y = Math.random() * h;
          p.life = 0;
          p.opacity = 0;
          p.fadeState = 'in';
          p.maxLife = Math.random() * 600 + 300;
        }

        if (p.opacity > 0.01) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(14, 165, 233, ${p.opacity})`;
          ctx.fill();
        }
      });
    };

    /* ── Animation loop ── */
    const animate = (timestamp) => {
      timeRef.current = timestamp;
      ctx.clearRect(0, 0, w, h);

      drawGrid(timestamp);
      drawFlowLines(timestamp);
      drawNodes(timestamp);
      drawDataParticles(timestamp);

      animRef.current = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);
    canvas.addEventListener('mousemove', handleMouseMove);
    animRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [initNodes, initFlowLines, initDataParticles, variant]);

  return (
    <canvas
      ref={canvasRef}
      className="system-grid-canvas"
      style={{ opacity }}
    />
  );
};

export default SystemGrid;
