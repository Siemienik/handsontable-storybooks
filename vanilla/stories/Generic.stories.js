import { createHot } from './Hot';
import Handsontable from "handsontable";
import {HyperFormula} from "hyperformula";
import configurations from "../configurations";

export default {
  title: 'Generic',
};

const Template = (args ) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createHot({ ...args });
};

const mapConfigToStory = (configuration) => {
  const story = Template.bind({});
  story.args = {settings: configuration};
  return story;
}

export const JustATable = () => mapConfigToStory(configurations.JustATable);
export const CustomContextMenu = () => mapConfigToStory(configurations.CustomContextMenu);
export const CustomEditorExample = () => mapConfigToStory(configurations.CustomEditorExample);
export const CustomRendererExample = () => mapConfigToStory(configurations.CustomRendererExample);
export const CustomEditorAsAClass = () => mapConfigToStory(configurations.CustomEditorAsAClass);

const formulas = {formulas:{engine:HyperFormula}};
export const HfJustATable = () => mapConfigToStory({...configurations.JustATable, ...formulas});
export const HfCustomContextMenu = () => mapConfigToStory({...configurations.CustomContextMenu, ...formulas});
export const HfCustomEditorExample = () => mapConfigToStory({...configurations.CustomEditorExample, ...formulas});
export const HfCustomRendererExample = () => mapConfigToStory({...configurations.CustomRendererExample, ...formulas});
export const HfCustomEditorAsAClass = () => mapConfigToStory({...configurations.CustomEditorAsAClass, ...formulas});
