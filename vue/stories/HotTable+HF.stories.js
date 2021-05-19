import { HotTable, HotColumn } from '@handsontable/vue';
import Handsontable from "handsontable";
import {HyperFormula} from "hyperformula";
import CustomEditor from "../src/CustomEditor";

export default {
  title: 'HOT+HF/HotTable',
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
      formulas: {
        engine: HyperFormula
      },
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
      formulas: {
        engine: HyperFormula
      },
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
      formulas: {
        engine: HyperFormula
      },
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
      formulas: {
        engine: HyperFormula
      },
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
`).bind({});
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
      JP_price: '=1+2+3',
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
    formulas: {
      engine: HyperFormula
    },
    licenseKey: 'non-commercial-and-evaluation'
  }
};

export const CustomIdClassStyleWithoutData = Template().bind({});
CustomIdClassStyleWithoutData.args = {
  source: 'https://dev.handsontable.com/docs/next/vue-custom-id-class-style/',
  hotTable: {
    settings: {
      startRows: 5,
      startCols: 5,
      colHeaders: true,
      stretchH: 'all',
      licenseKey: 'non-commercial-and-evaluation',
      formulas: {
        engine: HyperFormula
      },
    },
    id: 'my-custom-id',
    className: 'my-custom-classname',
    style: 'width: 300px; height: 142px; overflow: hidden; border: 1px solid red;'
  }
};

export const CustomIdClassStyleWithData = Template().bind({});
CustomIdClassStyleWithData.args = {
  source: 'https://dev.handsontable.com/docs/next/vue-custom-id-class-style/',
  hotTable: {
    settings: {
      startRows: 5,
      startCols: 5,
      colHeaders: true,
      stretchH: 'all',
      licenseKey: 'non-commercial-and-evaluation',
      formulas: {
        engine: HyperFormula
      },
      data: Handsontable.helper.createSpreadsheetData(10, 10),
    },
    id: 'my-custom-id',
    className: 'my-custom-classname',
    style: 'width: 300px; height: 142px; overflow: hidden; border: 1px solid red;'
  }
};

export const CustomContextMenu = Template().bind({});
CustomContextMenu.args = {
  source: 'https://dev.handsontable.com/docs/next/vue-custom-context-menu-example/',
  hotTable: {
    data: Handsontable.helper.createSpreadsheetData(5, 5),
    colHeaders: true,
    formulas: {
      engine: HyperFormula
    },
    contextMenu: {
      items: {
        'row_above': {
          name: 'Insert row above this one (custom name)'
        },
        'row_below': {},
        'separator': Handsontable.plugins.ContextMenu.SEPARATOR,
        'clear_custom': {
          name: 'Clear all cells (custom)',
          callback() {
            this.clear();
          }
        }
      }
    },
    licenseKey: 'non-commercial-and-evaluation'
  }
};

export const CustomEditorAsAClass = Template().bind({});
CustomEditorAsAClass.args = {
  source: 'https://dev.handsontable.com/docs/next/vue-custom-editor-example/#declaring-an-editor-as-a-class',
  hotTable: {
    settings: {
      formulas: {
        engine: HyperFormula
      },
      data: Handsontable.helper.createSpreadsheetData(5, 1), // todo remove this line after: https://github.com/handsontable/handsontable/issues/8069
      startRows: 5,
      columns: [{
        editor: CustomEditor
      }],
      colHeaders: true,
      colWidths: 200,
      licenseKey: 'non-commercial-and-evaluation'
    }
  }
};
