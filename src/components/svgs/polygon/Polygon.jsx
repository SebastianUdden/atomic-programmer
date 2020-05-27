import React from "react";

export default ({ color, strokeWidth, strokeColor, points }) => {
  return (
    <polygon
      fill={color}
      stroke={strokeColor}
      strokeWidth={strokeWidth}
      points={points}
    />
  );
};
