import React, { useState } from 'react';

const PercentageBar = () => {
  const [percentage, setPercentage] = useState(50);

  const handleSliderChange = (e) => {
    setPercentage(parseInt(e.target.value, 10));
  };

  return (
    <div>
      <label>Using the slider, indicate your balance between manual and automation testing, where 0% is fully manual and 100% is fully automated.</label>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <span>Manual: {percentage}%</span>
        <input
          type="range"
          min="0"
          max="100"
          step="10"
          value={percentage}
          onChange={handleSliderChange}
          style={{ margin: '0 10px' }}
        />
        <span>Automation: {100 - percentage}%</span>
      </div>
    </div>
  );
};

export default PercentageBar;
