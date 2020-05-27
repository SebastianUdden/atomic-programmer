import { text, number, select } from "@storybook/addon-knobs";
import { fullColorHex } from "../src/components/svgs/utils";
import { primaryColor } from "./SVG/utils";

export const getColor = (type, label = "") => {
  if (type === "Named")
    return select(
      `${label && `${label} `}Color`,
      colors,
      label ? "Red" : primaryColor,
      label || "Color"
    );
  if (type === "Hex") return text(`${label}Color`, "#FF9900", label || "Color");
  if (type === "RGBA")
    return fullColorHex(
      number(`${label}R`, 255, rgbaRange, label || "Color"),
      number(`${label}G`, 150, rgbaRange, label || "Color"),
      number(`${label}B`, 0, rgbaRange, label || "Color"),
      number(`${label}A`, 255, rgbaRange, label || "Color")
    );
};
export const colorTypes = ["Named", "Hex", "RGBA"];
export const rgbaRange = {
  range: true,
  min: 0,
  max: 255,
  step: 1,
};
export const colors = [
  "none",
  "Black",
  "Grey",
  "Red",
  "Green",
  "Blue",
  "Yellow",
  "Purple",
  "Pink",
  "Brown",
  "Teal",
  "Magenta",
];
