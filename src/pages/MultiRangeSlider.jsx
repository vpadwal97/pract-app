import React, { useState } from 'react';
import ReactSlider from 'react-slider';

const MultiRangeSlider = () => {
  const [values, setValues] = useState([20, 80]);

  return (
    <div className="multi-range-slider">
      <ReactSlider
        className="horizontal-slider"
        thumbClassName="thumb"
        trackClassName="track"
        defaultValue={values}
        ariaLabel={['Lower thumb', 'Upper thumb']}
        pearling
        minDistance={10}
        onChange={(newValues) => setValues(newValues)}
      />
      <div className="slider-values d-flex justify-content-between mt-3">
        <span>Min: {values[0]}</span>
        <span>Max: {values[1]}</span>
      </div>
    </div>
  );
};

export default MultiRangeSlider;
