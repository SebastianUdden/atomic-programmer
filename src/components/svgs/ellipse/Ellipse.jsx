import React from "react";

export default ({
  size,
  color,
  strokeWidth,
  strokeColor,
  cx = 50,
  cy = 50,
  rx = 40,
  ry = 50,
}) => {
  return (
    <ellipse
      fill={color}
      strokeWidth={strokeWidth}
      stroke={strokeColor}
      cx={cx || size}
      cy={cy || size}
      rx={rx || size}
      ry={ry || size}
    />
  );
};
