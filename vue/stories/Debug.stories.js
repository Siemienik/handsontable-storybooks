import DebugInfo  from '../src/DebugInfo';
import Handsontable from "handsontable";

export default {
  title: 'DebugInfo',
  component: DebugInfo,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  //   size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  // },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { DebugInfo },
  template: '<DebugInfo />',
});

export const BuildData = Template.bind({});
BuildData.args = {
  settings:{
    data: Handsontable.helper.createSpreadsheetData(10, 10),
    licenseKey: 'non-commercial-and-evaluation'
  }
};
