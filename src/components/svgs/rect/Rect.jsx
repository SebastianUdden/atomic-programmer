import React from "react";

export default ({ color, size, width, height, x, y, rx, ry }) => {
  return (
    <rect
      fill={color}
      width={width || size}
      height={height || size}
      x={x}
      y={y}
      rx={rx}
      ry={ry}
    />
  );
};
