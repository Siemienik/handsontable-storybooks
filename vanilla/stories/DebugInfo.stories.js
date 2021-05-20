import { createDebugInfo } from './DebugInfo';
import Handsontable from "handsontable";

export default {
  title: 'DebugInfo',
};

const Template = (args ) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createDebugInfo({ ...args });
};

export const BuildData = Template.bind({});
BuildData.args = {}