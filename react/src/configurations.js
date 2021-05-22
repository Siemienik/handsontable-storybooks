import {CustomEditor} from "./CustomEditor";
import Handsontable from "handsontable";

//todo import for vanilla (not working for react)
const configurations = {};
configurations.JustATable = {
    data: Handsontable.helper.createSpreadsheetData(6, 10),
    colHeaders: true,
    rowHeaders: true,
    licenseKey: "non-commercial-and-evaluation",
};
configurations.CustomContextMenu = {
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
                callback() {
                    this.clear();
                }
            }
        }
    },
    licenseKey: 'non-commercial-and-evaluation'
};
configurations.CustomEditorExample = {
    startRows: 5,
    columns: [
        {
            editor: CustomEditor
        }
    ],
    colHeaders: true,
    colWidths: 200,
    licenseKey: 'non-commercial-and-evaluation'
};
configurations.CustomRendererExample = {
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
};

export default configurations;