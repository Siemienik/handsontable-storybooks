import {CustomEditor} from "./editors/CustomEditor";
import Handsontable from "handsontable";

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
    data: Handsontable.helper.createSpreadsheetData(5, 20),
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
configurations.CustomBorders = {
    data: Handsontable.helper.createSpreadsheetData(5, 6),
    rowHeaders: true,
    colHeaders: true,
    stretchH: 'all',
    customBorders: [
        {
            range: {
                from: { row: 1,  col: 1 },
                to: { row: 3,  col: 4 }
            },
            top: { width: 2,  color: '#5292F7' },
            left: { width: 2,  color: 'orange' },
            bottom: { width: 2,  color: 'red' },
            right: { width: 2,  color: 'magenta' }
        },
        {
            row: 2,
            col: 2,
            left: { width: 2,  color: 'red' },
            right: { width: 1,  color: 'green' }
        }
    ],
    licenseKey: 'non-commercial-and-evaluation'
};
configurations.UndoRedo = {
    data: Handsontable.helper.createSpreadsheetData(4, 4),
    rowHeaders: true,
    colHeaders: true,
    licenseKey: "non-commercial-and-evaluation",
};
configurations.UndoRedoContextMenu = {
    data: Handsontable.helper.createSpreadsheetData(4, 4),
    rowHeaders: true,
    colHeaders: true,
    contextMenu: true,
    licenseKey: "non-commercial-and-evaluation",
};

// Added during RTL research and development
configurations.FixedRowsBottom = {
    data: Handsontable.helper.createSpreadsheetData(60, 10),
    licenseKey: "non-commercial-and-evaluation",
    fixedRowsBottom: 1
};
configurations.FixedRowsBottomWithHeaders = {
    data: Handsontable.helper.createSpreadsheetData(60, 10),
    colHeaders: true,
    rowHeaders: true,
    licenseKey: "non-commercial-and-evaluation",
    fixedRowsBottom: 1
};
configurations.MultileSelection = {
    data: Handsontable.helper.createSpreadsheetData(20, 20),
    colHeaders: true,
    rowHeaders: true,
    selectionMode: 'multiple',
    licenseKey: "non-commercial-and-evaluation",
};

configurations.CellTypeNumeric =  { // does not working properly in this storybook setup
    data: [
        { car: 'Mercedes A 160', year: 2017, price_usd: 7000, price_eur: 7000 },
        { car: 'Citroen C4 Coupe', year: 2018, price_usd: 8330, price_eur: 8330 },
        { car: 'Audi A4 Avant', year: 2019, price_usd: 33900, price_eur: 33900 },
        { car: 'Opel Astra', year: 2020, price_usd: 5000, price_eur: 5000 },
        { car: 'BMW 320i Coupe', year: 2021, price_usd: 30500, price_eur: 30500 }
    ],
    colHeaders: ['Car', 'Year', 'Price ($)', 'Price (€)'],
    columnSorting : true,
    height: 'auto',
    licenseKey: 'non-commercial-and-evaluation',
    columns: [
        {
            data: 'car'
            // 1st column is simple text, no special options here
        },
        {
            data: 'year',
            type: 'numeric'
        },
        {
            data: 'price_usd',
            type: 'numeric',
            numericFormat: {
                pattern: '$0,0.00',
                culture: 'en-US' // this is the default culture, set up for USD
            },
            allowEmpty: false
        },
        {
            data: 'price_eur',
            type: 'numeric',
            numericFormat: {
                pattern: '0,0.00 $',
                culture: 'de-DE' // use this for EUR (German),
                // more cultures available on http://numbrojs.com/languages.html
            }
        }
    ]
}
configurations.CellTypeAutocomplete = {
    licenseKey: 'non-commercial-and-evaluation',
    data: [
        ['BMW', 'black', 'black'],
        ['Nissan', 'blue', 'blue'],
        ['Chrysler', 'yellow', 'black'],
        ['Volvo', 'white', 'gray']
    ],
    colHeaders: ['Car', 'Chassis color', 'Bumper color'],
    columns: [
        {
            type: 'autocomplete',
            source: ['BMW', 'Chrysler', 'Nissan', 'Suzuki', 'Toyota', 'Volvo'],
            strict: false
        },
        {
            type: 'autocomplete',
            source:  ['yellow', 'red', 'orange and another color', 'green',
    'blue', 'gray', 'black', 'white', 'purple', 'lime', 'olive', 'cyan'],
            strict: false,
            visibleRows: 4
        },
        {
            type: 'autocomplete',
            source:  ['yellow', 'red', 'orange and another color', 'green',
    'blue', 'gray', 'black', 'white', 'purple', 'lime', 'olive', 'cyan'],
            strict: false,
            trimDropdown: false
        }
    ]
};
configurations.CellTypeCheckbox = {
    data: [
        { car: 'Mercedes A 160',  available: true, comesInBlack: 'yes' },
        { car: 'Citroen C4 Coupe',  available: false, comesInBlack: 'yes' },
        { car: 'Audi A4 Avant',  available: true, comesInBlack: 'no' },
        { car: 'Opel Astra',  available: false, comesInBlack: 'yes' },
        { car: 'BMW 320i Coupe',  available: false, comesInBlack: 'no' }
    ],
    colHeaders: ['Car model', 'Accepted (label after)', 'Comes in black (label before)'],
    height: 'auto',
    columns: [
        {
            data: 'car'
        },
        {
            data: 'available',
            type: 'checkbox',
            label: {
                position: 'after',
                property: 'car' // Read value from row object
            },
        },
        {
            data: 'comesInBlack',
            type: 'checkbox',
            checkedTemplate: 'yes',
            uncheckedTemplate: 'no',
            label: {
                position: 'before',
                value: 'In black? '
            },
        },
    ],
    licenseKey: 'non-commercial-and-evaluation'
};
configurations.CellTypeDate = {
    licenseKey: 'non-commercial-and-evaluation',
    data: [
        ['01/14/2021'],
        ['12/01/2022'],
        ['11/19/2023'],
        ['02/02/2021'],
        ['07/24/2022']
    ],
    height: 'auto',
    columns: [
        {
            type: 'date',
            dateFormat: 'MM/DD/YYYY',
            correctFormat: true,
            defaultDate: '01/01/1900',
            // datePicker additional options
            // (see https://github.com/dbushell/Pikaday#configuration)
            datePickerConfig: {
                // First day of the week (0: Sunday, 1: Monday, etc)
                firstDay: 0,
                showWeekNumber: true,
                numberOfMonths: 3,
                disableDayFn(date) {
                    // Disable Sunday and Saturday
                    return date.getDay() === 0 || date.getDay() === 6;
                }
            }
        },
    ]
};
configurations.CellTypeDropdown = {
    data: [['black'], ['blue'], ['black'], ['gray']],
    columns: [
        {
            type: 'dropdown',
            source: ['yellow', 'red', 'orange', 'green', 'blue', 'gray', 'black', 'white']
        }
    ],
    licenseKey: 'non-commercial-and-evaluation'
};
configurations.CellTypeHandsontable = {
    licenseKey: 'non-commercial-and-evaluation',
    data: [
        ['Tesla', 2017, 'black', 'black'],
        ['Nissan', 2018, 'blue', 'blue'],
        ['Chrysler', 2019, 'yellow', 'black'],
        ['Volvo', 2020, 'white', 'gray']
    ],
    colHeaders: ['Car', 'Year', 'Chassis color', 'Bumper color'],
    columns: [
        {
            type: 'handsontable',
            handsontable: {
                colHeaders: ['Marque', 'Country', 'Parent company'],
                autoColumnSize: true,
                data: [
                    { name: 'BMW', country: 'Germany', owner: 'Bayerische Motoren Werke AG' },
                    { name: 'Chrysler', country: 'USA', owner: 'Chrysler Group LLC' },
                    { name: 'Nissan', country: 'Japan', owner: 'Nissan Motor Company Ltd' },
                    { name: 'Suzuki', country: 'Japan', owner: 'Suzuki Motor Corporation' },
                    { name: 'Toyota', country: 'Japan', owner: 'Toyota Motor Corporation' },
                    { name: 'Volvo', country: 'Sweden', owner: 'Zhejiang Geely Holding Group' }
                ],
                getValue() {
                    const selection = this.getSelectedLast();

                    // Get the manufacturer name of the clicked row and ignore header
                    // coordinates (negative values)
                    return this.getSourceDataAtRow(Math.max(selection[0], 0)).name;
                },
            }
        },
        {},
        {},
        {}
    ]
};
configurations.CellTypePassword = {
    data: [
        { password: 'plainTextPassword' },
        { password: 'txt' },
        { password: 'longer' }
    ],
    colHeaders: ['Password'],
    licenseKey: 'non-commercial-and-evaluation',
    columns: [
        { data: 'password', type: 'password', hashLength: 10 }
    ]
};
configurations.CellTypeTime = {
    data: [[1332284400000], ['10 30'], ['8:00 PM'], [1332284400000], [1332284400000]],
    licenseKey: 'non-commercial-and-evaluation',
    columns: [
        {
            type: 'time',
            timeFormat: 'h:mm:ss a',
            correctFormat: true
        },
    ]
};
configurations.NestedAndCollapsibleColumns =  {
    data: Handsontable.helper.createSpreadsheetData(5, 10),
    colHeaders: true,
    rowHeaders: true,
    colWidths: 60,
    height: 'auto',
    nestedHeaders: [
        ['A', { label: 'B', colspan: 8 }, 'C'],
        ['D', { label: 'E', colspan: 4 }, { label: 'F', colspan: 4 }, 'G'],
        ['H', { label: 'I', colspan: 2 }, { label: 'J', colspan: 2 }, { label: 'K', colspan: 2 }, { label: 'L', colspan: 2 }, 'M'],
        ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W']
    ],
    collapsibleColumns: [
        { row: -4, col: 1, collapsible: true },
        { row: -3, col: 1, collapsible: true },
        { row: -2, col: 1, collapsible: true },
        { row: -2, col: 3, collapsible: true }
    ],
    licenseKey: 'non-commercial-and-evaluation'
}
configurations.ColumnSorting = {
    data: [
        ['Tesla', 'Model 3', 'BlueStar', 'USA', '★★★★'],
        ['Tesla', 'Model S', 'WhiteStar', 'USA', '★★★★★'],
        ['Mitsubishi', 'iMiEV', '', 'Japan', '★★'],
        ['Ford', 'Focus EV', '', 'USA', '★★'],
        ['Mitsubishi', 'iMiEV Sport', '', 'Japan', '★★'],
        ['Tesla', 'Roadster', 'DarkStar', 'USA', '★★★★★'],
        ['Volkswagen', 'e-Golf','', 'Germany', '★★'],
        ['Volkswagen', 'E-Up!', '', 'Germany', '★★'],
        ['Ford', 'C-Max Energi', '', 'USA', '★'],
        ['BYD', 'Denza', '', 'China', '★★★'],
        ['BYD', 'e5', '', 'China', '★★★'],
        ['BYD', 'e6', '', 'China', '★★★★']
    ],
    colHeaders: ['Brand', 'Model', 'Code name', 'Country of origin', 'Rank'],
    columnSorting: true,
    height: 'auto',
    licenseKey: 'non-commercial-and-evaluation'
}
configurations.ColumnSummary1 = {
    licenseKey: 'non-commercial-and-evaluation',
    data: [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [null]
    ],
    colHeaders: true,
    rowHeaders: true,
    columnSummary: [
        {
            sourceColumn: 0,
            type: 'sum',
            destinationRow: 3,
            destinationColumn: 0
        },
        {
            sourceColumn: 1,
            type: 'min',
            destinationRow: 3,
            destinationColumn: 1
        },
        {
            sourceColumn: 2,
            type: 'max',
            destinationRow: 3,
            destinationColumn: 2
        },
        {
            sourceColumn: 3,
            type: 'count',
            destinationRow: 3,
            destinationColumn: 3
        },
        {
            sourceColumn: 4,
            type: 'average',
            destinationRow: 3,
            destinationColumn: 4
        }
    ]
};
configurations.Comments = {
    data: [
        ['', 'Tesla', 'Nissan', 'Toyota', 'Honda', 'Mazda', 'Ford'],
        ['2017', 10, 11, 12, 13, 15, 16],
        ['2018', 10, 11, 12, 13, 15, 16],
        ['2019', 10, 11, 12, 13, 15, 16],
    ],
    rowHeaders: true,
    colHeaders: true,
    contextMenu: true,
    comments: true,
    cell: [
        { row: 1, col: 1, comment: { value: 'Some comment' } },
        { row: 2, col: 2, comment: { value: 'Comment 200x50 px', style: { width: 200, height: 50 } } }
    ],
    height: 'auto',
    licenseKey: 'non-commercial-and-evaluation'
};
configurations.ColumnDropdownMenu = {
    data: Handsontable.helper.createSpreadsheetData(5, 20),
    colHeaders: true,
    dropdownMenu: true,
    licenseKey: 'non-commercial-and-evaluation'
};
configurations.Filters = {
    data: [
        ['Lorem', 'ipsum', 'dolor', 'sit', '12/1/2015', 23],
        ['adipiscing', 'elit', 'Ut', 'imperdiet', '5/12/2015', 6],
        ['Pellentesque', 'vulputate', 'leo', 'semper', '10/23/2015', 26],
        ['diam', 'et', 'malesuada', 'libero', '12/1/2014', 98],
        ['orci', 'et', 'dignissim', 'hendrerit', '12/1/2016', 8.5]
    ],
    columns: [
        { type: 'text' },
        { type: 'text' },
        { type: 'text' },
        { type: 'text' },
        { type: 'date', dateFormat: 'M/D/YYYY' },
        { type: 'numeric' }
    ],
    colHeaders: true,
    dropdownMenu: true,
    filters: true,
    height: 'auto',
    licenseKey: 'non-commercial-and-evaluation'
}
configurations.HiddenColumns =  {
    licenseKey: 'non-commercial-and-evaluation',
    data: Handsontable.helper.createSpreadsheetData(5, 12),
    colHeaders: true,
    rowHeaders: true,
    height:'auto',
    // individually add column hiding context menu items
    contextMenu: [`hidden_columns_show`, `hidden_columns_hide`],
    hiddenColumns: {
        columns: [3, 5, 9],
        indicators: true
    }
}
configurations.ColumnFreeze = {
    data: Handsontable.helper.createSpreadsheetData(100, 50),
    fixedColumnsLeft: 2,
    licenseKey: 'non-commercial-and-evaluation'
};

export default configurations

//todo https://jsfiddle.net/5nobvsz0/1/ dropdown menu, filters;
//todo instance under cell https://jsfiddle.net/handsoncode/stv62pqr
//todo custom dropdown menu https://jsfiddle.net/handsoncode/ue9abc3w