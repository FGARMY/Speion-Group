import { useEffect, useRef, useCallback } from 'react';

/**
 * FlowDiagram — Animated step connections that draw on scroll
 * Lines draw progressively, nodes activate one by one
 */
const FlowDiagram = ({ steps = [] }) => {
  const containerRef = useRef(null);
  const progressRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const rect = container.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.8;
      const end = -rect.height * 0.3;
      const progress = Math.max(0, Math.min(1, (start - rect.top) / (start - end)));
      progressRef.current = progress;

      // Activate lines and nodes based on progress
      const lines = container.querySelectorAll('.flow-line-path');
      const nodes = container.querySelectorAll('.flow-node');
      const stepCount = nodes.length;

      nodes.forEach((node, i) => {
        const threshold = i / stepCount;
        if (progress > threshold) {
          node.classList.add('active');
        }
      });

      lines.forEach((line, i) => {
        const threshold = (i + 0.5) / stepCount;
        const lineProgress = Math.max(0, Math.min(1, (progress - threshold) * stepCount));
        line.style.setProperty('--line-progress', lineProgress);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [steps.length]);

  if (steps.length === 0) return null;

  return (
    <div ref={containerRef} className="flow-diagram">
      {steps.map((step, i) => (
        <div key={i} className="flow-step">
          <div className="flow-node">
            <span className="flow-node-num">{String(i + 1).padStart(2, '0')}</span>
          </div>
          <div className="flow-step-content">
            <h4>{step.title}</h4>
            <p>{step.desc}</p>
          </div>
          {i < steps.length - 1 && (
            <div className="flow-line">
              <div className="flow-line-path" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FlowDiagram;
