import React from "react";
import {
  boolean,
  select,
  number,
  text,
  withKnobs,
} from "@storybook/addon-knobs";
import { getColor, colorTypes } from "../colors";
import SVG from "../../src/components/svgs/SVG";
import { svgStyle, options } from "./utils";
import Polyline from "../../src/components/svgs/polyline/Polyline";

export default {
  title: "SVG/Polyline",
  decorators: [withKnobs],
};

const polylineTemplates = [
  "Bars (10,90 10,10 20,10 20,90 30,90 30,20 40,20 40,90 50,90 50,30 60,30 60,90 70,90 70,40 80,40 80,90 90,90)",
  "Triangle Right (10,10 10,90 90,50 10,10)",
  "Triangle Left (90,10 10,50 90,90 90,10)",
  "Triangle Top (90,90 50,10 10,90 90,90)",
  "Triangle Bottom (50,90 10,10 90,10 50,90)",
  "Square (90,10 10,10 10,90 90,90 90,10)",
  "Diamond (10,50 50,10 90,50 50,90 10,50)",
  "Pentagon (50,10 10,40 25,90 75,90 90,40 50,10)",
  "Hexagon (15,30 50,10 85,30 85,70 50,90 15,70 15,30)",
  "Heptagon (15,30 50,10 85,30 90,65 68,90 30,90 10,65 15,30)",
  "Octagon (20,23 50,10 80,23 90,50 80,77 50,90 20,77 10,50 20,23)",
  "House (90,40 50,10 10,40 10,90 90,90 90,40)",
  "Plus (40,40 40,10 60,10 60,40 90,40 90,60 60,60 60,90 40,90 40,60 10,60 10,40 40,40)",
  "Star (40,40 50,10 60,40 90,40 65,60 75,90 50,70 25,90 35,60 10,40 40,40)",
];
const getPoints = (template) => template.match(/\((.*?)\)/)[1];

export const aPolyline = () => {
  const showContainer = boolean("Show container", true, "Container");

  return (
    <SVG style={showContainer ? svgStyle : {}}>
      <Polyline
        color={getColor(select("Color type", colorTypes, "Named", "Color"))}
        strokeWidth={number("Width", 1, options, "Size/Position")}
        fill={"none"}
        points={
          boolean("Use templates", true, "Size/Position")
            ? getPoints(
                select(
                  "Templates",
                  polylineTemplates,
                  "Bars (10,90 10,10 20,10 20,90 30,90 30,20 40,20 40,90 50,90 50,30 60,30 60,90 70,90 70,40 80,40 80,90 90,90)",
                  "Size/Position"
                )
              )
            : text("Points (x,y)", "50,10 10,90 90,90", "Size/Position")
        }
      />
    </SVG>
  );
};
