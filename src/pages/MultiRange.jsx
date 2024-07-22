import React, { useState } from "react";

const MultiRange = () => {
  const [minValue, setMinValue] = useState(20);
  const [maxValue, setMaxValue] = useState(80);
  const min = 0;
  const max = 100;

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue - 1);
    setMinValue(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue + 1);
    setMaxValue(value);
  };

  return (
    <div style={{ width: "300px" }} className="position-relative mx-auto">
      <div className="position-absolutew-100">
        <input
          type="range"
          min={min}
          max={max}
          value={minValue}
          onChange={handleMinChange}
          className="w-100 position-absolutetranslate-middle-y"
        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxValue}
          onChange={handleMaxChange}
          className="w-100 position-absolutetranslate-middle-y"
        />
      </div>
      <div
        className="position-relative w-100"
        style={{
          height: "10px",
          background: "#ddd",
        }}
      >
        <div
          className="position-absolute h-100"
          style={{
            position: "absolute",
            left: `${(minValue / max) * 100}%`,
            right: `${100 - (maxValue / max) * 100}%`,
            background: "#2196f3",
          }}
        />
      </div>
      <div>
        Selected range: {minValue} - {maxValue}
      </div>
    </div>
  );
};

export default MultiRange;
