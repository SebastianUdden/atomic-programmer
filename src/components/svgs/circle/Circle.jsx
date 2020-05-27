import React from "react";

export default ({
  size,
  color,
  strokeWidth,
  strokeColor,
  x = 50,
  y = 50,
  r = 100,
}) => {
  return (
    <circle
      fill={color}
      strokeWidth={strokeWidth}
      stroke={strokeColor}
      cx={x || size}
      cy={y || size}
      r={r || size}
    />
  );
};
