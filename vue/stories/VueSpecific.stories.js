import {HotColumn, HotTable} from '@handsontable/vue';
import Handsontable from "handsontable";

export default {
    title: 'VueSpecific',
    component: HotTable
};

const Template = (template) => (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: {HotTable, HotColumn},
    template: template || `<hot-table v-bind="$props.hotTable"></hot-table>
  `,
});

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
`);
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
`);
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

export const SettingUpALocale = Template(`
<div>
  <a href="https://dev.handsontable.com/docs/next/vue-setting-up-a-locale/#setting-up-a-locale" target="_blank"> Source</a>
   <hot-table :data="$props.data" :settings="$props.settings">
    <hot-column
      title="Product name"
      data="productName"
      width="120"
      read-only="true"
    ></hot-column>
    <hot-column
      title="Price in Japan"
      type="numeric"
      :numeric-format="$props.formatJP"
      data="JP_price"
      width="120"
    ></hot-column>
    <hot-column
      title="Price in Turkey"
      data="TR_price"
      type="numeric"
      :numeric-format="$props.formatTR"
      width="120"
    ></hot-column>
  </hot-table>
</div>
`);
SettingUpALocale.args = {
    formatJP: {
        pattern: '0,0.00 $',
        culture: 'ja-JP',
    },
    formatTR: {
        pattern: '0,0.00 $',
        culture: 'tr-TR',
    },
    data: [
        {
            productName: 'Product A',
            JP_price: "=1+2+3",
            TR_price: 100.56,
        },
        {
            productName: 'Product B',
            JP_price: 2.22,
            TR_price: 453.5,
        },
        {
            productName: 'Product C',
            JP_price: 3.1,
            TR_price: 678.1,
        },
    ],
    settings: {
        licenseKey: 'non-commercial-and-evaluation'
    }
};

export const CustomIdClassStyle = Template();
CustomIdClassStyle.args = {
    source: 'https://dev.handsontable.com/docs/next/vue-custom-id-class-style/',
    hotTable: {
    settings: {
      startRows: 5,
      startCols: 5,
      colHeaders: true,
      stretchH: 'all',
      licenseKey: 'non-commercial-and-evaluation'
    },
    id: 'my-custom-id',
    className: 'my-custom-classname',
    style: 'width: 300px; height: 142px; overflow: hidden; border: 1px solid red;'
  }
};

/* todo:
* * https://dev.handsontable.com/docs/next/vue-hot-column/#declaring-a-custom-renderer-as-a-component
* * https://dev.handsontable.com/docs/next/vue-hot-column/#declaring-a-custom-editor-as-a-component
* * https://dev.handsontable.com/docs/next/vue-hot-column/#using-the-renderer-editor-components-with-v-model
* * maybe: https://dev.handsontable.com/docs/next/vue-hot-column/#a-more-advanced-example
*/