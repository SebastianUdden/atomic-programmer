import React from "react";
import { boolean, select, number, withKnobs } from "@storybook/addon-knobs";
import { getColor, colorTypes } from "../colors";
import { use, options, midOption, svgStyle } from "./utils";
import SVG from "../../src/components/svgs/SVG";
import Circle from "../../src/components/svgs/circle/Circle";

export default {
  title: "SVG/Circle",
  decorators: [withKnobs],
};

export const aCircle = () => {
  const showContainer = boolean("Show container", true, "Container");
  const useSize = boolean("Use size", true, "Size/Position");
  const useBorder = boolean("Use border", false, "Border");

  return (
    <SVG style={showContainer ? svgStyle : {}}>
      <Circle
        color={getColor(select("Color type", colorTypes, "Named", "Color"))}
        size={
          useSize ? number("Size", midOption, options, "Size/Position") : null
        }
        cx={use(useSize, "Position X", midOption, "Size/Position")}
        cy={use(useSize, "Position Y", midOption, "Size/Position")}
        r={use(useSize, "Radius", midOption, "Size/Position")}
        strokeWidth={
          useBorder ? number("Border width", 5, options, "Border") : null
        }
        strokeColor={
          useBorder
            ? getColor(
                select("Border color type", colorTypes, "Named", "Border"),
                "Border"
              )
            : null
        }
      />
    </SVG>
  );
};
