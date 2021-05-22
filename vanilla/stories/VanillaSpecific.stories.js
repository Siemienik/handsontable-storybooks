import { createHot } from './Hot';
import Handsontable from "handsontable";

export default {
  title: 'VanillaSpecific',
};

const Template = (args ) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createHot({ ...args });
};

// todo: at this moment css cannot be set for wrappers
export const ContextMenuForFont = Template.bind({});
ContextMenuForFont.args =  {
  css: `
    .sans {
      font: 0.8em sans-serif;
    }
    
    .verdana {
      font: 0.8em Verdana;
    }
  `,
  settings: {
    data: [
      ['', 'Kia', 'Nissan', 'Toyota', 'Honda', 'Mazda', 'Ford'],
      ['2012', 10, 11, 12, 13, 15, 16],
      ['2013', 10, 11, 12, 13, 15, 16],
      ['2014', 10, 11, 12, 13, 15, 16],
      ['2015', 10, 11, 12, 13, 15, 16],
      ['2016', 10, 11, 12, 13, 15, 16]
    ],
    licenseKey: 'non-commercial-and-evaluation',
    rowHeaders: true,
    colHeaders: true,
    contextMenu: {
      items: {
        "change_to_sans": {
          name: 'Change font to Sans-Serif',
          callback() {
            this.updateSettings({
              className: 'sans'
            });
          },
        },
        "change_to_verdana": {
          name: 'Change font to Verdana',
          callback() {
            this.updateSettings({
              className: 'verdana'
            });
          },
        },
      },
    },
  },
};

