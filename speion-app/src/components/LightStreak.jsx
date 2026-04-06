/**
 * LightStreak — Soft moving light highlight across elements
 * Creates a premium sheen effect with very low opacity
 */
const LightStreak = ({ direction = 'diagonal', duration = 8 }) => {
  return (
    <div
      className="light-streak-container"
      style={{
        '--streak-duration': `${duration}s`,
        '--streak-angle': direction === 'horizontal' ? '90deg' : '135deg',
      }}
    >
      <div className="light-streak" />
    </div>
  );
};

export default LightStreak;
