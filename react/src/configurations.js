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
configurations.ValidationResultAsAComment = {
    data: [[4.5, 'Hello'],[`4,`, 'Hello']],
    licenseKey: 'non-commercial-and-evaluation',
    colWidths: 100,
    rowHeaders: true,
    colHeaders: true,
    comments: true,
    columns: [
        {type: 'numeric'},
        {},
    ],
    afterValidate(isValid, value, row, prop) {
        const commentsPlugin = this.getPlugin('comments');

        if (!isValid) {
            commentsPlugin.setCommentAtCell(row, prop, 'Invalid cell');
        } else {
            commentsPlugin.removeCommentAtCell(row, prop);
        }

        this.render();
    },
    afterInit(){
        this.validateCells();
    }
}
configurations.ValidationAndDropDown = {
    data: [
        {
            car: "Mercedes A 160",
            year: '2014',
            ownersByYear: {2013: 'Micheal Pattinson', 2014: 'John Smith', 2015: 'James Anthon'},
            owner: 'John Smith',
            cleared: false
        },
        {
            car: "Citroen C4 Coupe",
            year: '2015',
            ownersByYear: {2013: 'Micheal Pattinson', 2014: 'John Smith', 2015: 'James Anthon'},
            owner: 'James Anthon',
            cleared: false
        },
        {
            car: "Audi A4 Avant",
            year: '2017',
            ownersByYear: {2013: 'Andrew Sanchez', 2014: 'John Smith', 2015: 'James Anthon'},
            owner: 'James Anthon',
            cleared: true
        },
        {
            car: "Opel Astra",
            year: '2016',
            ownersByYear: {2013: 'John Smith', 2014: 'Micheal Pattinson', 2015: 'Andrew Sanchez'},
            owner: 'John Smith',
            cleared: false
        }
    ],
    licenseKey: 'non-commercial-and-evaluation',
    colHeaders: true,
    colWidths: [100, 170, 250],
    fillHandle: false,
    columns: [
        {
            data: 'car',
            title: 'Car Model',
        },
        {
            data: 'year',
            title: 'Year of production',
            type: 'dropdown',
            source: ['2015', '2016', '2017'],
        },
        {
            data: 'owner',
            title: 'Owner',
            type: 'dropdown',
            source: ['John Smith', 'James Anthon', 'Andrew Sanchez', 'Micheal Pattinson'],
        }
    ],
    afterInit(){
        window.OPTIONS = new Map([
            ['2015', () => ['Jack', 'Bob', 'Same']],
            ['2016', () => ['WW', 'Saddy', 'Caven']],
            ['2017', () => ['VC', 'Pob', 'DJ', 'Saro']],
        ]);

    },
    afterChange(changes, source) {
        if (source === 'loadData' || source === 'internal' || changes.length > 1) {
            return;
        }

        const [row, prop, oldValue, newValue] = changes[0];

        if (prop !== 'year') {
            return;
        }
        if (!window.OPTIONS.has(newValue)) {
            return;
        }

        const option = window.OPTIONS.get(newValue)();

        this.setCellMeta(row, this.propToCol('owner'), 'source', option);
        this.setDataAtRowProp(row, 'owner', option[0]);
    }
}
configurations.AutoColumnSizeDefault = {
    data: Handsontable.helper.createSpreadsheetData(4, 4),
    colHeaders: true,
    rowHeaders: true,
    licenseKey: "non-commercial-and-evaluation",
};
configurations.AutoColumnSizeEnabled = {
    data: Handsontable.helper.createSpreadsheetData(4, 4),
    autoColumnSize: true,
    colHeaders: true,
    rowHeaders: true,
    licenseKey: "non-commercial-and-evaluation",
};
configurations.AutoColumnSizeDisabled = {
    data: Handsontable.helper.createSpreadsheetData(4, 4),
    autoColumnSize: false,
    colHeaders: true,
    rowHeaders: true,
    licenseKey: "non-commercial-and-evaluation",
};
configurations.NestedHeaders = {
    data: Handsontable.helper.createSpreadsheetData(5,10),
    colHeaders: true,
    rowHeaders: true,
    nestedHeaders: [
        ['A', {label: 'B', colspan: 9}],
        ['D', {label: 'E', colspan: 4}, {label: 'F', colspan: 4}, 'G'],
        ['H', {label: 'I', colspan: 2}, {label: 'J', colspan: 2}, {label: 'K', colspan: 2}, {label: 'L', colspan: 2}, 'M'],
        ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W']
    ],
    licenseKey: 'non-commercial-and-evaluation'
};
configurations.CollapsibleColumns = {
    data: Handsontable.helper.createSpreadsheetData(5,11),
    colHeaders: true,
    rowHeaders: true,
    colWidths: 60,
    nestedHeaders: [
        ['A', {label: 'B', colspan: 9}],
        ['D', {label: 'E', colspan: 4}, {label: 'F', colspan: 4}, 'G'],
        ['H',  'I1','I2', {label: 'J', colspan: 2}, {label: 'K', colspan: 2}, {label: 'L', colspan: 2}, 'M'],
        ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W']
    ],
    collapsibleColumns: [
        {row: -4, col: 1, collapsible: true},
        {row: -3, col: 1, collapsible: true},
        {row: -2, col: 1, collapsible: true},
        {row: -2, col: 3, collapsible: true}
    ],
    licenseKey: 'non-commercial-and-evaluation'
};
configurations.ColumnSummary = {
    data: [
        [null,null,null,null,null],
        [1,1,2,3,5],
        [8,13,21,34,55],
        [89,144,233,377,610],
        [89.1,144.1,233.2,377.3,610.5],
        [81,131,212,343,555]
    ],
    rowHeaders: true,
    colHeaders: ['sum', 'min', 'max', 'count', 'average'],
    columnSummary() {
        return ['sum', 'min', 'max', 'count', 'average']
            .map((t,i)=>({
                sourceColumn: i,
                destinationRow: 0,
                destinationColumn: i,
                type: t,
                forceNumeric: true
            }));
    },
    licenseKey: 'non-commercial-and-evaluation'
};

export default configurations;
//todo https://jsfiddle.net/5nobvsz0/1/ dropdown menu, filters;
//todo instance under cell https://jsfiddle.net/handsoncode/stv62pqr