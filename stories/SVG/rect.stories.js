import React from "react";
import { boolean, select, number, withKnobs } from "@storybook/addon-knobs";
import { getColor, colorTypes } from "../colors";
import { options, svgStyle, use } from "./utils";
import SVG from "../../src/components/svgs/SVG";
import Rect from "../../src/components/svgs/rect/Rect";

export default {
  title: "SVG/Rectangle",
  decorators: [withKnobs],
};

export const aRectangle = () => {
  const showContainer = boolean("Show container", true, "Container");
  const useSize = boolean("Use size", true, "Size/Position");

  return (
    <SVG style={showContainer ? svgStyle : {}}>
      <Rect
        color={getColor(select("Color type", colorTypes, "Named", "Color"))}
        size={useSize ? number("Size", 100, options, "Size/Position") : null}
        width={use(useSize, "Width", 50, "Size/Position")}
        height={use(useSize, "Height", 50, "Size/Position")}
        x={use(useSize, "Position X", 25, "Size/Position")}
        y={use(useSize, "Position Y", 25, "Size/Position")}
        rx={number("RX", 0, options, "Size/Position")}
        ry={
          boolean("Use RY", false, "Size/Position")
            ? number("RY", 0, options, "Size/Position")
            : null
        }
      />
    </SVG>
  );
};
