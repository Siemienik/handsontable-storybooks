import { Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { HotTableModule} from "@handsontable/angular";
import  {MyHotTable} from './MyHotTable';
import Handsontable from "handsontable";
import {HyperFormula} from "hyperformula";
import {CustomEditor} from "../editors/CustomEditor";


export default {
  title: 'HOT',
  component: MyHotTable,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [HotTableModule],
    }),
  ],
} as Meta;

export const JustATable = () => ( {props:{
  settings: {
    data: Handsontable.helper.createSpreadsheetData(6, 10),
    colHeaders: true,
    rowHeaders: true,
    licenseKey: "non-commercial-and-evaluation",
  },
}});

export const HotColumn = () => ( {
  template:`
  <div>
    <hot-table
      [data]="dataset"
      [colHeaders]="true"
      [rowHeaders]="true"
      licenseKey="non-commercial-and-evaluation">
        <hot-column data="id" [readOnly]="true" title="ID"></hot-column>
        <hot-column data="name" title="Full name"></hot-column>
        <hot-column data="address" title="Street name"></hot-column>
    </hot-table>
  </div>
  `,
  props:{
    dataset: [
      {id: 1, name: 'Ted Right', address: 'Wall Street'},
      {id: 2, name: 'Frank Honest', address: 'Pennsylvania Avenue'},
      {id: 3, name: 'Joan Well', address: 'Broadway'},
      {id: 4, name: 'Gail Polite', address: 'Bourbon Street'},
      {id: 5, name: 'Michael Fair', address: 'Lombard Street'},
      {id: 6, name: 'Mia Fair', address: 'Rodeo Drive'},
      {id: 7, name: 'Cora Fair', address: 'Sunset Boulevard'},
      {id: 8, name: 'Jack Right', address: 'Michigan Avenue'},
    ],
  }
});

export const CustomId = () => ( {
  template:`
  <div>
    <hot-table
      [settings]="hotSettings"
      [hotId]="id">
    </hot-table>
  </div>
  `,
  props:{
    hotSettings: {
      startRows: 5,
      startCols: 5,
      colHeaders: true,
      stretchH: 'all',
      licenseKey: 'non-commercial-and-evaluation'
    },
    id: 'my-custom-id',
  }
});

export const SettingUpALocale = () => ( {
  template:`
    <div>
      <hot-table [data]="dataset" [colHeaders]="true" [licenseKey]="non-commercial-and-evaluation">
        <hot-column
          data="productName"
          [readOnly]="true"
          title="Product Name"
        ></hot-column>
        <hot-column
          data="JP_price"
          title="Price in Japan"
          type="numeric"
          [numericFormat]="formatJP"
        ></hot-column>
        <hot-column
          data="TR_price"
          title="Price in Turkey"
          type="numeric"
          [numericFormat]="formatTR"
        ></hot-column>
      </hot-table>
    </div>
  `,
  props:{
    formatTR: {
      pattern: '0,0.00 $',
      culture: 'tr-TR'
    },
    formatJP: {
      pattern: '0,0.00 $',
      culture: 'ja-JP'
    },
    dataset: [
      { productName: 'Product A', JP_price: 1.32, TR_price: 100.56 },
      { productName: 'Product B', JP_price: 2.22, TR_price: 453.5 },
      { productName: 'Product C', JP_price: 3.1, TR_price: 678.1 }
    ],
  }
});

export const CustomContextMenu = () => ( {
  props:{
    settings: {
      data: Handsontable.helper.createSpreadsheetData(5, 5),
      colHeaders: true,
      contextMenu: {
        items: {
          'row_above': {
            name: 'Insert row above this one (custom name)'
          },
          'row_below': {},
          'separator': Handsontable.plugins.ContextMenu.SEPARATOR,
          'clear_custom': {
            name: 'Clear all cells (custom)',
            callback: function() {
              this.clear();
            }
          }
        }
      },
      licenseKey: 'non-commercial-and-evaluation'
    },
  }
} );

export const CustomEditorExample = () => ( {
  props:{
    settings: {
      startRows: 5,
      columns: [
        {
          editor: CustomEditor
        }
      ],
      colHeaders: true,
      colWidths: 200,
      licenseKey: 'non-commercial-and-evaluation'
    },
  }
} );

export const CustomRendererExample = () => ( {
  props:{
    settings: {
      data:
          [
            ['A1', 'https://handsontable.com/docs/images/examples/professional-javascript-developers-nicholas-zakas.jpg'],
            ['A2', 'https://handsontable.com/docs/images/examples/javascript-the-good-parts.jpg']
          ],
      columns: [
        {},
        {
          renderer(instance, td, row, col, prop, value, cellProperties) {
            const escaped = Handsontable.helper.stringify(value);
            let img = null;

            if (escaped.indexOf('http') === 0) {
              img = document.createElement('IMG');
              img.src = value;

              Handsontable.dom.addEvent(img, 'mousedown', event => {
                event.preventDefault();
              });

              Handsontable.dom.empty(td);
              td.appendChild(img);

            } else {
              Handsontable.renderers.TextRenderer.apply(this, arguments);
            }

            return td;
          }
        }
      ],
      colHeaders: true,
      rowHeights: 55,
      licenseKey: 'non-commercial-and-evaluation'
    }
  }
} );

// todo https://dev.handsontable.com/docs/next/angular-language-change-example/
// todo https://dev.handsontable.com/docs/next/angular-hot-reference/
