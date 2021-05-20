import {HotColumn, HotTable} from '@handsontable/react';
import Handsontable from "handsontable";

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