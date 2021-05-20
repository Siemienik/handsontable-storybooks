import { createHot } from './Hot';
import Handsontable from "handsontable";

export default {
  title: 'HOT',
};

const Template = (args ) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createHot({ ...args });
};

export const Primary = Template.bind({});
Primary.args = {
  settings: {
    data: Handsontable.helper.createSpreadsheetData(3, 11),
    colHeaders: true,
    rowHeaders: true,
    licenseKey: 'non-commercial-and-evaluation'
  },
  callback:(hot)=>{
    console.log(hot);
  }
};
