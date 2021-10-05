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
export const Searching = (({ rtl = false}) => {
  const container = document.createElement('div');
  const hot = new Handsontable(container, {
    data: [
      ['Tesla', 2017, 'black', 'black'],
      ['Nissan', 2018, 'blue', 'blue'],
      ['Chrysler', 2019, 'yellow', 'black'],
      ['Volvo', 2020, 'yellow', 'gray']
    ],
    colHeaders: true,
    // enable the `Search` plugin
    search: true,
    height: 'auto',
    licenseKey: 'non-commercial-and-evaluation'
  });

  const search = document.createElement('input');
  search.type = 'search';
  search.placeholder = 'Search';

  Handsontable.dom.addEvent(search, 'keyup', function(event) {
    // get the `Search` plugin's instance
    const search = hot.getPlugin('search');
    // use the `Search` plugin's `query()` method
    const queryResult = search.query(this.value);

    console.log(queryResult);

    hot.render();
  });

  const wrapper = document.createElement('div');
  wrapper.append(search, container);

  if(rtl){
    wrapper.dir = 'rtl';
  }

  setTimeout(()=>hot.render());

  return wrapper;
}).bind({});
Searching.args = {rtl:false}