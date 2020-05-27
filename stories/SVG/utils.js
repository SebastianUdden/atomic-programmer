import { number } from "@storybook/addon-knobs";

export const primaryColor = "Black";
export const svgStyle = { border: `1px dashed ${primaryColor}` };
export const midOption = 50;
export const options = {
  range: true,
  min: 1,
  max: 100,
  step: 1,
};

export const use = (useSize, name, val, groupId) => {
  return useSize ? null : number(name, val, {}, groupId);
};
export const getPath = (template) => template.match(/\((.*?)\)/)[1];
