export const rgbToHex = (rgb) => {
  let hex = Number(rgb).toString(16);
  if (hex.length < 2) {
    hex = "0" + hex;
  }
  return hex;
};

export const fullColorHex = (r = 0, g = 0, b = 0, a = 255) => {
  const red = rgbToHex(r);
  const green = rgbToHex(g);
  const blue = rgbToHex(b);
  const alpha = rgbToHex(a);
  return `#${red}${green}${blue}${alpha}`;
};
