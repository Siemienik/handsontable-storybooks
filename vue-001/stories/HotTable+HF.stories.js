import { HotTable } from '@handsontable/vue';
import Handsontable from "handsontable";

export default {
  title: 'HOT+HF/HotTable',
  component: HotTable,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HotTable },
  template: '<hot-table v-bind="$props"></hot-table>',
});

export const JustATable = Template.bind({});
JustATable.args = {
  settings:{
    data: Handsontable.helper.createSpreadsheetData(10, 10),
    licenseKey: 'non-commercial-and-evaluation'
  }
};
