import React, { useState, useEffect, useRef } from 'react';
import {HotColumn, HotTable} from '@handsontable/react';
import Handsontable from "handsontable";
import {HyperFormula} from "hyperformula";
import numbro from 'numbro';
import languages from 'numbro/dist/languages.min.js';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

import { CustomEditor } from '../CustomEditor';

export default {
    title: 'HOT+HF',
    component: HotTable
};

export const JustATable = (args) => <HotTable {...args} />

JustATable.args = {
    data: Handsontable.helper.createSpreadsheetData(6, 10),
    colHeaders: true,
    rowHeaders: true,
    formulas: {
        engine: HyperFormula
    },
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
        formulas: {
            engine: HyperFormula
        },
        licenseKey: "non-commercial-and-evaluation",
    },
    secondColumnSettings: {
        title: "Second column header",
        readOnly: true
    }
}

export const BasicExampleWithControls = (args) => {
    const [settings, setSettings] = useState({});

    const handleChange = (setting, states) => event => {
        setSettings(prevState => ({
            ...prevState,
            [setting]: states[event.target.checked ? 1 : 0],
        }))
    }

    const newSettings = {
        ...args,
        settings
    }

    return (
        <div>
            <div className="controllers">
            <label>
                <input onChange={handleChange('fixedRowsTop', [0, 2])} type="checkbox" />
                Add fixed rows
            </label>
            <br/>

            <label>
                <input onChange={handleChange('fixedColumnsLeft', [0, 2])} type="checkbox" />
                Add fixed columns
            </label>
            <br/>

            <label>
                <input onChange={handleChange('rowHeaders', [false, true])} type="checkbox" />
                Enable row headers
            </label>
            <br/>

            <label>
                <input onChange={handleChange('colHeaders', [false, true])} type="checkbox" />
                Enable column headers
            </label>
            <br/>
            </div>

            <HotTable root="hot" settings={newSettings}/>
        </div>
    )
}

BasicExampleWithControls.args = {
    data: Handsontable.helper.createSpreadsheetData(15, 20),
    width: 570,
    height: 220,
    formulas: {
        engine: HyperFormula
    },
    licenseKey: "non-commercial-and-evaluation",
}

numbro.registerLanguage(languages['ja-JP']);
numbro.registerLanguage(languages['tr-TR']);

// define formats
const formatJP = {
    pattern: '0,0.00 $',
    culture: 'ja-JP'
  };
  
  const formatTR = {
    pattern: '0,0.00 $',
    culture: 'tr-TR'
  };

export const SettingUpALocale = (args) => {
    return (
        <HotTable settings={args.hotSettings}>
            <HotColumn data="productName" type="text" width="120" />
            <HotColumn
                data="JP_price"
                type="numeric"
                numericFormat={formatJP}
                width="120"
            />
            <HotColumn
                data="TR_price"
                type="numeric"
                numericFormat={formatTR}
                width="120"
            />
        </HotTable>
    )
}

SettingUpALocale.args = {
    hotSettings: {
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
        formulas: {
            engine: HyperFormula
        },
        licenseKey: 'non-commercial-and-evaluation'
    }
}

export const CustomContextMenuExample = (args) => {
    return (
        <div>
            <HotTable
                id="hot"
                settings={args}
            />
        </div>
    )
}

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
    formulas: {
        engine: HyperFormula
    },
    licenseKey: 'non-commercial-and-evaluation'
}

export const CustomEditorExample = (args) => {
    return (
        <div>
            <HotTable
                id="hot"
                settings={args}
            />
        </div>
    )
}

CustomEditorExample.args = {
    startRows: 5,
    columns: [
        {
        editor: CustomEditor
        }
    ],
    colHeaders: true,
    colWidths: 200,
    formulas: {
        engine: HyperFormula
    },
    licenseKey: 'non-commercial-and-evaluation'
}

export const CustomRendererExample = (args) => {
    return (
        <div>
            <HotTable
                id="hot"
                settings={args}
            />
        </div>
    )
}

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
    formulas: {
        engine: HyperFormula
    },
    licenseKey: 'non-commercial-and-evaluation'
}

export const LanguageChangeExample = (args) => {
    const [language, setLanguage] = useState('en-US');
    const [languageList, setLanguageList] = useState([]);

    useEffect(() => {
        setLanguageList(Handsontable.languages.getLanguagesDictionaries());
    }, []);

    const updateHotLanguage = event => {
        setLanguage(event.target.value);
    };

    return (
        <div>
            <label htmlFor="languages">Select language:
                {' '}
                <select value={language} onChange={updateHotLanguage} id="languages">
                {languageList.map(({ languageCode }) => (
                    <option key={languageCode} value={languageCode}>
                        {languageCode}
                    </option>
                ))}
                </select>
            </label>

            <br/>
            <br/>

            <HotTable language={language} settings={args}/>
        </div>
    )
}

LanguageChangeExample.args = {
    data: Handsontable.helper.createSpreadsheetData(5, 10),
    colHeaders: true,
    rowHeaders: true,
    contextMenu: true,
    formulas: {
        engine: HyperFormula
    },
    licenseKey: 'non-commercial-and-evaluation'
}

const initialReduxStoreState = {
    data: Handsontable.helper.createSpreadsheetData(5, 3),
    colHeaders: true,
    rowHeaders: true,
    readOnly: false,
    licenseKey: 'non-commercial-and-evaluation'
};

const updatesReducer = (state = initialReduxStoreState, action) => {
    switch (action.type) {
      case 'updateData':
        const newData = [...state.data];
  
        action.dataChanges.forEach(([row, column, oldValue, newValue]) => {
          newData[row][column] = newValue;
        })
  
        return {
          ...state,
          data: newData
        }
  
      case 'updateReadOnly':
        return {
          ...state,
          readOnly: action.readOnly
        };
  
      default:
        return state;
    }
};

const reduxStore = createStore(updatesReducer);

const ReduxExampleApp = (args) => {
    const hotSettings = useSelector(state => state);
    const dispatch = useDispatch();
    const hotTableComponent = useRef(null);

    const hotData = hotSettings?.data;
    const isHotData = Array.isArray(hotData);

    const onBeforeHotChange = changes => {
        dispatch({
            type: 'updateData',
            dataChanges: changes
        });

        return false;
    }

    const toggleReadOnly = event => {
        dispatch({
            type: 'updateReadOnly',
            readOnly: event.target.checked
        });
    }

    return (
        <div className="redux-example-container">
            <div id="example-container">

                <div id="example-preview">
                <div id="toggle-boxes">
                    <br/>
                    <input onClick={toggleReadOnly} id="readOnlyCheck" type="checkbox"/>
                    <label htmlFor="readOnlyCheck">
                        Toggle <code>readOnly</code> for the entire table
                    </label>
                </div>
                <br/>

                <HotTable
                    ref={hotTableComponent}
                    beforeChange={onBeforeHotChange}
                    settings={hotSettings}
                />
                </div>

                <div id="redux-preview" className="table-container">
                <h3>Redux store dump</h3>

                {isHotData && (
                    <>
                        <strong>data:</strong>
                        <table style={{ border: '1px solid #d6d6d6' }}>
                            <tbody>
                                {hotData.map((row, i) => (
                                    <tr key={i}>
                                        {row.map((cell, i) => <td key={i}>{cell}</td>)}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </>
                )}

                <table>
                    <tbody>
                        {Object.entries(hotSettings).map(([name, value]) => name !== 'data' && (
                            <tr key={`${name}${value}`}>
                            <td><strong>{name}:</strong></td>
                            <td>{value.toString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>

            </div>
        </div>
    );
}

export const ReduxExample = (args) => {
    return (
        <Provider store={reduxStore}>
            <ReduxExampleApp args={args} />
        </Provider>
    )
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
    formulas: {
        engine: HyperFormula
    },
    licenseKey: 'non-commercial-and-evaluation'
}