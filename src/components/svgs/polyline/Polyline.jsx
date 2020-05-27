import React from "react";

export default ({ strokeWidth, color, points, fill }) => {
  return (
    <polyline
      stroke={color}
      fill={fill}
      strokeWidth={strokeWidth}
      points={points}
    />
  );
};
