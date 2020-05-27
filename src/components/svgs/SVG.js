import React from "react";

export default ({ size = 100, width, height, style, children }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      width={width || size}
      height={height || size}
      style={style}
    >
      {children}
    </svg>
  );
};
