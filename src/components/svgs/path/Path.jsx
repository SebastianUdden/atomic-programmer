import React from "react";

export default ({
  strokeWidth = 2,
  color = "black",
  strokeColor = "black",
  path,
}) => {
  return (
    <path
      stroke={strokeColor}
      fill={color}
      strokeWidth={strokeWidth}
      d={path}
    />
  );
};
