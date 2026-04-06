const StepIndicator = ({ currentStep, totalSteps, labels }) => {
  return (
    <div>
      <div className="step-indicator">
        {Array.from({ length: totalSteps }, (_, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div
              className={`step-dot ${
                i < currentStep ? 'completed' : i === currentStep ? 'active' : ''
              }`}
            />
            {i < totalSteps - 1 && (
              <div
                className={`step-connector ${i < currentStep ? 'completed' : ''}`}
              />
            )}
          </div>
        ))}
      </div>
      {labels && (
        <div className="step-labels">
          {labels.map((label, i) => (
            <span
              key={i}
              className={`step-label ${
                i < currentStep ? 'completed' : i === currentStep ? 'active' : ''
              }`}
            >
              {label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default StepIndicator;
