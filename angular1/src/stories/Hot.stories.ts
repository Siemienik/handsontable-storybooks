// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';
import { HotTableModule} from "@handsontable/angular";
import  {HotTableWrapper} from './HotTableWrapper';


export default {
  title: 'HOT',
  component: HotTableWrapper,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [HotTableModule],
    }),
  ],
} as Meta;


export const Primary = ()=>( {props:{
  // data: [
  //   {id: 1, name: 'Ted Right', address: 'Wall Street'},
  //   {id: 2, name: 'Frank Honest', address: 'Pennsylvania Avenue'},
  //   {id: 3, name: 'Joan Well', address: 'Broadway'},
  //   {id: 4, name: 'Gail Polite', address: 'Bourbon Street'},
  //   {id: 5, name: 'Michael Fair', address: 'Lombard Street'},
  //   {id: 6, name: 'Mia Fair', address: 'Rodeo Drive'},
  //   {id: 7, name: 'Cora Fair', address: 'Sunset Boulevard'},
  //   {id: 8, name: 'Jack Right', address: 'Michigan Avenue'},
  // ],
  // colHeaders: true,
  // rowHeaders: true,
  // licenseKey:"non-commercial-and-evaluation"
}});
