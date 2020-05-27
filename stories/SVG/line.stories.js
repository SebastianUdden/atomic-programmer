import React from "react";
import { boolean, select, number, withKnobs } from "@storybook/addon-knobs";
import { getColor, colorTypes } from "../colors";
import { options, midOption, svgStyle } from "./utils";
import SVG from "../../src/components/svgs/SVG";
import Line from "../../src/components/svgs/line/Line";

export default {
  title: "SVG/Line",
  decorators: [withKnobs],
};

export const aLine = () => {
  const showContainer = boolean("Show container", true, "Container");

  return (
    <SVG style={showContainer ? svgStyle : {}}>
      <Line
        color={getColor(select("Color type", colorTypes, "Named", "Color"))}
        x1={number("X1", 0, options, "Size/Position")}
        x2={number("X2", 100, options, "Size/Position")}
        y1={number("Y1", midOption, options, "Size/Position")}
        y2={number("Y2", midOption, options, "Size/Position")}
        strokeWidth={number("Width", 5, options, "Size/Position")}
      />
    </SVG>
  );
};
