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
configurations.StandardContextMenu = {
    data: Handsontable.helper.createSpreadsheetData(4, 4),
    colHeaders: true,
    rowHeaders: true,
    contextMenu: true,
    licenseKey: "non-commercial-and-evaluation",
};
configurations.NestedRows = {
    data: [
        {
            category: 'Best Rock Performance',
            artist: null,
            title: null,
            label: null,
            __children: [{
                title: 'Don\'t Wanna Fight',
                artist: 'Alabama Shakes',
                label: 'ATO Records'
            }, {
                title: 'What Kind Of Man',
                artist: 'Florence & The Machine',
                label: 'Republic'
            }, {
                title: 'Something From Nothing',
                artist: 'Foo Fighters',
                label: 'RCA Records'
            }, {
                title: 'Ex\'s & Oh\'s',
                artist: 'Elle King',
                label: 'RCA Records'
            }, {
                title: 'Moaning Lisa Smile',
                artist: 'Wolf Alice',
                label: 'RCA Records/Dirty Hit'
            }

            ]
        }, {
            category: 'Best Metal Performance',
            __children: [{
                title: 'Cirice',
                artist: 'Ghost',
                label: 'Loma Vista Recordings'
            }, {
                title: 'Identity',
                artist: 'August Burns Red',
                label: 'Fearless Records'
            }, {
                title: '512',
                artist: 'Lamb Of God',
                label: 'Epic Records'
            }, {
                title: 'Thank You',
                artist: 'Sevendust',
                label: '7Bros Records'
            }, {
                title: 'Custer',
                artist: 'Slipknot',
                label: 'Roadrunner Records'
            }, ]
        }, {
            category: 'Best Rock Song',
            __children: [{
                title: 'Don\'t Wanna Fight',
                artist: 'Alabama Shakes',
                label: 'ATO Records',
            }, {
                title: 'Ex\'s & Oh\'s',
                artist: 'Elle King',
                label: 'RCA Records',
            }, {
                title: 'Hold Back The River',
                artist: 'James Bay',
                label: 'Republic',
            }, {
                title: 'Lydia',
                artist: 'Highly Suspect',
                label: '300 Entertainment',
            }, {
                title: 'What Kind Of Man',
                artist: 'Florence & The Machine',
                label: 'Republic',
            }]
        }, {
            category: 'Best Rock Album',
            __children: [{
                title: 'Drones',
                artist: 'Muse',
                label: 'Warner Bros. Records',
            }, {
                title: 'Chaos And The Calm',
                artist: 'James Bay',
                label: 'Republic',
            }, {
                title: 'Kintsugi',
                artist: 'Death Cab For Cutie',
                label: 'Atlantic',
            }, {
                title: 'Mister Asylum',
                artist: 'Highly Suspect',
                label: '300 Entertainment',
            }, {
                title: '.5: The Gray Chapter',
                artist: 'Slipknot',
                label: 'Roadrunner Records',
            }]
        }],
    licenseKey: 'non-commercial-and-evaluation',
    rowHeaders: true,
    colHeaders: ['Category', 'Artist', 'Title', 'Album', 'Label'],
    nestedRows: true,
    contextMenu: true,
}
configurations.ButtonRendererWithAction = {
    data: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ],
    licenseKey: 'non-commercial-and-evaluation',
    colWidths: 100,
    colHeaders: true,
    cells(row, col) {
        const cellPrp = {};

        if (col === 1) {
            cellPrp.renderer = (instance, td, row, col, prop, value, cellProperties) => {
                Handsontable.renderers.TextRenderer.apply(this, [instance, td, row, col, prop, value, cellProperties]);

                td.innerHTML = `<button class="myBt bt-${row}" onclick="this.innerHTML='clicked'">${value}</button>`;
            };
            cellPrp.readOnly = true;
        }

        return cellPrp
    }
}

export default configurations;