import {HotColumn, HotTable} from '@handsontable/react';
import Handsontable from "handsontable";
import {HyperFormula} from "hyperformula";

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