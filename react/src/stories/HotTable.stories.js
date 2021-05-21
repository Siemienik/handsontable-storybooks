import React, { useRef } from 'react';
import {HotColumn, HotTable} from '@handsontable/react';
import Handsontable from "handsontable";

import { CustomEditor } from '../CustomEditor';
import { Locale } from '../Locale';
import { WithControls } from '../WithControls';
import { Language } from '../Language';

export default {
    title: 'HOT',
    component: HotTable
};

export const JustATable = (args) => <HotTable {...args} />
JustATable.args = {
    data: Handsontable.helper.createSpreadsheetData(6, 10),
    colHeaders: true,
    rowHeaders: true,
    licenseKey: "non-commercial-and-evaluation",
}

export const UsingHotColumn = (args) => {
    return (
        <HotTable settings={args.hotTableSettings}>
            <HotColumn title="First column header" />
            <HotColumn settings={args.secondColumnSettings} />
        </HotTable>
    )
}
UsingHotColumn.args = {
    hotTableSettings: {
        data: Handsontable.helper.createSpreadsheetData(15, 20),
        licenseKey: "non-commercial-and-evaluation",
    },
    secondColumnSettings: {
        title: "Second column header",
        readOnly: true
    }
}

export const BasicExampleWithControls = (args) => <WithControls {...args} />
BasicExampleWithControls.args = {
    data: Handsontable.helper.createSpreadsheetData(15, 20),
    width: 570,
    height: 220,
    licenseKey: "non-commercial-and-evaluation",
}


export const SettingUpALocale = (args) => <Locale {...args} />
SettingUpALocale.args = {
    data: [
        {
            productName: 'Product A',
            JP_price: 1.32,
            TR_price: 100.56
        },
        {
            productName: 'Product B',
            JP_price: 2.22,
            TR_price: 453.5
        },
        {
            productName: 'Product C',
            JP_price: 3.1,
            TR_price: 678.1
        }
    ],
    autoRowSize: false,
    autoColumnSize: false,
    colHeaders: ['Product name', 'Price in Japan', 'Price in Turkey'],
    licenseKey: 'non-commercial-and-evaluation'
}

export const CustomContextMenuExample = (args) => <HotTable settings={args} />
CustomContextMenuExample.args = {
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
}

export const CustomEditorExample = (args) => <HotTable settings={args} />
CustomEditorExample.args = {
    startRows: 5,
    columns: [
        {
        editor: CustomEditor
        }
    ],
    colHeaders: true,
    colWidths: 200,
    licenseKey: 'non-commercial-and-evaluation'
}

export const CustomRendererExample = (args) => <HotTable settings={args} />
CustomRendererExample.args = {
    data: [
        ['A1', 'https://handsontable.com/docs/images/examples/professional-javascript-developers-nicholas-zakas.jpg'],
        ['A2', 'https://handsontable.com/docs/images/examples/javascript-the-good-parts.jpg']
    ],
    columns: [
        {},
        {
            renderer(instance, td, row, col, prop, value, cellProperties) {
                const escaped = Handsontable.helper.stringify(value);

                if (escaped.indexOf('http') === 0) {
                    const img = document.createElement('IMG');
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

export const LanguageChangeExample = (args) => <Language {...args} />
LanguageChangeExample.args = {
    data: Handsontable.helper.createSpreadsheetData(5, 10),
    colHeaders: true,
    rowHeaders: true,
    contextMenu: true,
    licenseKey: 'non-commercial-and-evaluation'
}

export const ReferencingTheHandsontableInstance = (args) => {
    const hotTableComponent = useRef(null);

    const swapHotData = () => {
        // The Handsontable instance is stored under the `hotInstance` property of the wrapper component.
        hotTableComponent.current.hotInstance.loadData([['new', 'data']]);
    };

    return (
        <div className="controls">
            <HotTable ref={hotTableComponent} settings={args}/>
            <br/>
            <button onClick={swapHotData}>Load new data!</button>
        </div>
    );
}
ReferencingTheHandsontableInstance.args = {
    data: Handsontable.helper.createSpreadsheetData(4, 4),
    colHeaders: true,
    licenseKey: 'non-commercial-and-evaluation'
}