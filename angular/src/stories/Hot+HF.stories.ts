import { Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { HotTableModule} from "@handsontable/angular";
import  {MyHotTable} from './MyHotTable';
import Handsontable from "handsontable";
import {HyperFormula} from 'hyperformula';

export default {
  title: 'HOT+HF',
  component: MyHotTable,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [HotTableModule],
    }),
  ],
} as Meta;

export const JustATable = () => ( {
  props:{
    settings: {
      data: Handsontable.helper.createSpreadsheetData(6, 10),
      colHeaders: true,
      rowHeaders: true,
      formulas: {
        engine: HyperFormula
      },
      licenseKey: "non-commercial-and-evaluation",
    },
  }
});

export const HotColumn = () => ( {
  template:`
  <div>
    <a href="https://dev.handsontable.com/docs/next/angular-simple-example/#angular-basic-example" target="_blank">Source</a>
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
    },
  }
});
