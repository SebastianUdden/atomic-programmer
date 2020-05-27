import React from "react";
import { boolean, select, number, withKnobs } from "@storybook/addon-knobs";
import { getColor, colorTypes } from "../colors";
import { use, options, midOption, svgStyle } from "./utils";
import SVG from "../../src/components/svgs/SVG";
import Ellipse from "../../src/components/svgs/ellipse/Ellipse";

export default {
  title: "SVG/Ellipse",
  decorators: [withKnobs],
};

export const anEllipse = () => {
  const showContainer = boolean("Show container", true, "Container");
  const useSize = boolean("Use size", false, "Size/Position");
  const useBorder = boolean("Use border", false, "Border");

  return (
    <SVG style={showContainer ? svgStyle : {}}>
      <Ellipse
        size={
          useSize ? number("Size", midOption, options, "Size/Position") : null
        }
        rx={use(useSize, "Radius X", midOption, "Size/Position")}
        ry={use(useSize, "Radius Y", midOption / 2, "Size/Position")}
        cx={use(useSize, "Position X", midOption, "Size/Position")}
        cy={use(useSize, "Position Y", midOption, "Size/Position")}
        color={getColor(select("Color type", colorTypes, "Named", "Color"))}
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
