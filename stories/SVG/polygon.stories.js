import React from "react";
import {
  boolean,
  select,
  number,
  text,
  withKnobs,
} from "@storybook/addon-knobs";
import { getColor, colorTypes } from "../colors";
import Polygon from "../../src/components/svgs/polygon/Polygon";
import SVG from "../../src/components/svgs/SVG";
import { svgStyle, options, getPath } from "./utils";

export default {
  title: "SVG/Polygon",
  decorators: [withKnobs],
};

const polygonTemplates = [
  "Triangle Right (10,10 10,90 90,50)",
  "Triangle Left (10,50 90,90 90,10)",
  "Triangle Top (50,10 10,90 90,90)",
  "Triangle Bottom (10,10 90,10 50,90)",
  "Square (10,10 10,90 90,90 90,10)",
  "Diamond (50,10 90,50 50,90 10,50)",
  "Pentagon (10,40 25,90 75,90 90,40 50,10)",
  "Hexagon (50,10 85,30 85,70 50,90 15,70 15,30)",
  "Heptagon (50,10 85,30 90,65 68,90 30,90 10,65 15,30)",
  "Octagon (50,10 80,23 90,50 80,77 50,90 20,77 10,50 20,23)",
  "House (50,10 10,40 10,90 90,90 90,40)",
  "Plus (40,10 60,10 60,40 90,40 90,60 60,60 60,90 40,90 40,60 10,60 10,40 40,40)",
  "Star (50,10 60,40 90,40 65,60 75,90 50,70 25,90 35,60 10,40 40,40)",
];

export const aPolygon = () => {
  const showContainer = boolean("Show container", true, "Container");
  const useBorder = boolean("Use border", false, "Border");

  return (
    <SVG style={showContainer ? svgStyle : {}}>
      <Polygon
        color={getColor(select("Color type", colorTypes, "Named", "Color"))}
        strokeColor={
          useBorder
            ? getColor(
                select("Border color type", colorTypes, "Named", "Border"),
                "Border"
              )
            : null
        }
        strokeWidth={number("Width", 5, options, "Border")}
        points={
          boolean("Use templates", true, "Size/Position")
            ? getPath(
                select(
                  "Templates",
                  polygonTemplates,
                  "Triangle Top (50,10 10,90 90,90)",
                  "Size/Position"
                )
              )
            : text("Points (x,y)", "50,10 10,90 90,90", "Size/Position")
        }
      />
    </SVG>
  );
};
