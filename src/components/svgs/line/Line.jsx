import React from "react";

export default ({
  strokeWidth = 2,
  color = "black",
  x1 = 1,
  x2 = 40,
  y1 = 1,
  y2 = 40,
}) => {
  return (
    <line
      stroke={color}
      strokeWidth={strokeWidth}
      x1={x1}
      x2={x2}
      y1={y1}
      y2={y2}
    />
  );
};
