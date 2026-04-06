import { useEffect, useRef, useCallback } from 'react';

/**
 * SystemGrid — Canvas-based background animation (Dark Corporate Theme)
 * Renders: subtle grid, slow flowing data lines, minimal nodes, network connections
 * Corporate blue accent on near-black background
 */
const SystemGrid = ({ variant = 'hero', opacity = 0.4 }) => {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const nodesRef = useRef([]);
  const flowLinesRef = useRef([]);

  const initNodes = useCallback((w, h) => {
    const count = variant === 'hero' ? 25 : 14;
    const nodes = [];
    for (let i = 0; i < count; i++) {
      nodes.push({
        x: Math.random() * w,
        y: Math.random() * h,
        baseX: Math.random() * w,
        baseY: Math.random() * h,
        radius: Math.random() * 1.5 + 0.8,
        pulseSpeed: Math.random() * 0.008 + 0.003,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }
    nodesRef.current = nodes;
  }, [variant]);

  const initFlowLines = useCallback((w, h) => {
    const count = variant === 'hero' ? 6 : 3;
    const lines = [];
    for (let i = 0; i < count; i++) {
      lines.push({
        startY: Math.random() * h,
        progress: Math.random(),
        speed: Math.random() * 0.0006 + 0.0003,
        length: Math.random() * 250 + 120,
        angle: (Math.random() - 0.5) * 0.15,
        opacity: Math.random() * 0.2 + 0.05,
      });
    }
    flowLinesRef.current = lines;
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
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    /* Draw subtle grid */
    const drawGrid = (t) => {
      const gridSize = 80;
      const cols = Math.ceil(w / gridSize) + 1;
      const rows = Math.ceil(h / gridSize) + 1;

      ctx.strokeStyle = 'rgba(37, 99, 235, 0.03)';
      ctx.lineWidth = 0.5;

      for (let i = 0; i < cols; i++) {
        const x = i * gridSize;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }

      for (let i = 0; i < rows; i++) {
        const y = i * gridSize;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }
    };

    /* Draw nodes + connections */
    const drawNodes = (t) => {
      const nodes = nodesRef.current;
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      nodes.forEach((node) => {
        node.x = node.baseX + Math.sin(t * 0.0004 + node.pulsePhase) * 12;
        node.y = node.baseY + Math.cos(t * 0.0003 + node.pulsePhase) * 10;

        const dx = node.x - mx;
        const dy = node.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const force = (120 - dist) / 120 * 2;
          node.x += (dx / dist) * force;
          node.y += (dy / dist) * force;
        }

        const pulse = Math.sin(t * node.pulseSpeed + node.pulsePhase);
        const r = node.radius + pulse * 0.5;
        const alpha = 0.15 + pulse * 0.1;

        // Glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, r + 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(37, 99, 235, ${alpha * 0.1})`;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(37, 99, 235, ${alpha})`;
        ctx.fill();
      });

      // Connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200) {
            const alpha = (1 - dist / 200) * 0.05;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(37, 99, 235, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    /* Draw flowing data lines */
    const drawFlowLines = (t) => {
      flowLinesRef.current.forEach((line) => {
        line.progress += line.speed;
        if (line.progress > 1.3) {
          line.progress = -0.3;
          line.startY = Math.random() * h;
          line.angle = (Math.random() - 0.5) * 0.15;
        }

        const x1 = line.progress * (w + line.length * 2) - line.length;
        const y1 = line.startY + Math.sin(line.progress * Math.PI) * 20;
        const x2 = x1 + line.length * Math.cos(line.angle);
        const y2 = y1 + line.length * Math.sin(line.angle);

        const edgeFade = Math.sin(line.progress * Math.PI);
        const alpha = line.opacity * edgeFade;

        const grad = ctx.createLinearGradient(x1, y1, x2, y2);
        grad.addColorStop(0, 'rgba(37, 99, 235, 0)');
        grad.addColorStop(0.3, `rgba(37, 99, 235, ${alpha})`);
        grad.addColorStop(0.7, `rgba(37, 99, 235, ${alpha * 0.6})`);
        grad.addColorStop(1, 'rgba(37, 99, 235, 0)');

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1;
        ctx.stroke();
      });
    };

    const animate = (timestamp) => {
      ctx.clearRect(0, 0, w, h);
      drawGrid(timestamp);
      drawFlowLines(timestamp);
      drawNodes(timestamp);
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
  }, [initNodes, initFlowLines, variant]);

  return (
    <canvas
      ref={canvasRef}
      className="system-grid-canvas"
      style={{ opacity }}
    />
  );
};

export default SystemGrid;
