import { Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { HotTableModule} from "@handsontable/angular";
import  {MyHotTable} from './MyHotTable';
import {HyperFormula} from 'hyperformula';

export default {
  title: 'AngularSpecific',
  component: MyHotTable,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [HotTableModule],
    }),
  ],
} as Meta;

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
      <hot-table [data]="dataset" [colHeaders]="true" licenseKey="non-commercial-and-evaluation">
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

// with HyperFormulaPlugin:

export const HfHotColumn = () => ( {
  template:`
  <div>
    <hot-table
      [data]="dataset"
      [formulas]="formulas"
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
    formulas: {
      engine: HyperFormula
    }
  }
});

export const HfSettingUpALocale = () => ( {
  template:`
    <div>
      <hot-table [data]="dataset" [colHeaders]="true" licenseKey="non-commercial-and-evaluation" [formulas]="formulas">
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
    formulas: {
      engine: HyperFormula
    }
  }
});

// todo https://dev.handsontable.com/docs/next/angular-language-change-example/
// todo https://dev.handsontable.com/docs/next/angular-hot-reference/

