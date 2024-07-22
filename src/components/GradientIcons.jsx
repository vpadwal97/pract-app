import React from "react";
import { FaStar } from "react-icons/fa";

const GradientIcon = ({ colors }) => {
  return (
    <svg width="0" height="0">
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          {colors.map((color, index) => (
            <stop
              key={index}
              offset={`${(index / (colors.length - 1)) * 100}%`}
              style={{ stopColor: color, stopOpacity: 1 }}
            />
          ))}
        </linearGradient>
      </defs>
    </svg>
  );
};

const GradientIcons = () => {
  return (
    <div>
      <GradientIcon colors={["red", "green"]} />
      <FaStar className="gradient-icon" />
      <FaStar className="gradient-icon" />
    </div>
  );
};

export default GradientIcons;
