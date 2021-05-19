import {HotColumn, HotTable} from '@handsontable/vue';
import Handsontable from "handsontable";
import {HyperFormula} from "hyperformula";

export default {
  title: 'HOT/HotTable',
  component: HotTable,

};

const Template = (template) => (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { HotTable, HotColumn },
  template: template || `
    <div>
      <a v-if="$props.source?.startsWith('http')" :href="$props.source" target="_blank">Source</a>
      <hot-table v-bind="$props.hotTable"></hot-table>
    </div>
  `,
});


export const JustATable = Template().bind({});
JustATable.args = {
  hotTable: {
    settings: {
      data: Handsontable.helper.createSpreadsheetData(10, 10),
      licenseKey: 'non-commercial-and-evaluation'
    }
  }
};

export const CollHeaders = Template().bind({});
CollHeaders.args = {
  hotTable: {
    settings: {
      data: Handsontable.helper.createSpreadsheetData(6, 10),
      colHeaders: true,
      licenseKey: 'non-commercial-and-evaluation'
    },
  },
  source: 'https://dev.handsontable.com/docs/next/vue-simple-example/'
};

export const ColumnDeclaringSettings = Template(`
<div>
  <a href="https://dev.handsontable.com/docs/next/vue-hot-column/#declaring-column-settings" target="_blank"> Source</a>
  <hot-table v-bind="$props.hotTable">
    <hot-column title="First column header">
    </hot-column>
    <hot-column v-bind="$props.secondColumn" read-only="true">
    </hot-column>
  </hot-table>
</div>
`).bind({});
ColumnDeclaringSettings.args = {
  hotTable: {
    settings: {
      data: Handsontable.helper.createSpreadsheetData(10, 10),
      licenseKey: 'non-commercial-and-evaluation'
    },
  },
  secondColumn: {
    settings: {
      title: 'Second column header',
    }
  },
};

export const ColumnArrayOfObjects = Template(`
<div>
  <a href="https://dev.handsontable.com/docs/next/vue-hot-column/#array-of-objects" target="_blank"> Source</a>
  <hot-table v-bind="$props.hotTable">
    <hot-column title="ID" data="id">
    </hot-column>
    <hot-column v-bind="$props.secondColumn" read-only="true" data="name">
    </hot-column>
    <hot-column title="Price" data="payment.price">
    </hot-column>
    <hot-column title="Currency" data="payment.currency">
    </hot-column>
  </hot-table>
</div>
`).bind({});
ColumnArrayOfObjects.args = {
  hotTable: {
    data: [
      {id: 1, name: 'Table tennis racket', payment: {price: 13, currency: 'PLN'}},
      {id: 2, name: 'Outdoor game ball', payment: {price: 14, currency: 'USD'}},
      {id: 3, name: 'Mountain bike', payment: {price: 300, currency: 'USD'}}
    ],
    settings: {
      licenseKey: 'non-commercial-and-evaluation'
    },
  },
  secondColumn: {
    settings: {
      title: 'Second column header'
    },
  }
};

