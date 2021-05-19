import HotTable  from '../src/DebugInfo';
import Handsontable from "handsontable";

export default {
  title: 'DebugInfo',
  component: HotTable,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  //   size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  // },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HotTable },
  template: '<hot-table v-bind="$props"></hot-table>',
});

export const BuildData = Template.bind({});
BuildData.args = {
  settings:{
    data: Handsontable.helper.createSpreadsheetData(10, 10),
    licenseKey: 'non-commercial-and-evaluation'
  }
};
