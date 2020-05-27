import React from "react";
import {
  boolean,
  select,
  withKnobs,
  text,
  number,
} from "@storybook/addon-knobs";
import { getColor, colorTypes } from "../colors";
import { svgStyle, getPath } from "./utils";
import SVG from "../../src/components/svgs/SVG";
import Path from "../../src/components/svgs/path/Path";

export default {
  title: "SVG/Path",
  decorators: [withKnobs],
};

const pathTemplates = [
  "Horizontal Line (M 10 10 H 90)",
  "Vertical Line (M 10 10 V 90)",
  "Diagonal Line (M 10 10 L 90 90)",
  "Triangle (M 10 10 V 90 H 90 Z)",
  "Square (M 10 10 V 90 H 90 V 10 Z)",
  "Downward Cubic Bezier (M 10 10 C 20 120, 80 120, 90 10)",
  "Upward Cubic Bezier (M 10 90 C 20 -20, 80 -20, 90 90)",
  "Rightward Cubic Bezier (M 10 10 C 120 20, 120 80, 10 90)",
  "Leftward Cubic Bezier (M 90 10 C -20 20, -20 80, 90 90)",
  "S-curve Cubic Bezier (M 10 50 C 10 0, 50 0, 50 50 S 90 100, 90 50)",
];

export const aPath = () => {
  const showContainer = boolean("Show container", true, "Container");
  const useFill = boolean("Use fill", false, "Fill");

  return (
    <SVG style={showContainer ? svgStyle : {}}>
      <Path
        color={
          useFill
            ? getColor(
                select("Fill Color type", colorTypes, "Named", "Fill"),
                "Fill"
              )
            : "none"
        }
        strokeColor={getColor(
          select("Stroke color type", colorTypes, "Named", "Color")
        )}
        strokeWidth={number("Stroke width", 1, {}, "Size/Position")}
        path={
          boolean("Use templates", false, "Size/Position")
            ? getPath(
                select(
                  "Templates",
                  pathTemplates,
                  "Horizontal Line (M 10 10 H 90)",
                  "Size/Position"
                )
              )
            : text("Path", "M 10 10 H 90 V 90 H 10 Z", "Size/Position")
        }
      />
    </SVG>
  );
};
