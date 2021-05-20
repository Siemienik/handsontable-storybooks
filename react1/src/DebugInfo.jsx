import { HotTable } from '@handsontable/react';
import Handsontable from 'handsontable';
import { HyperFormula } from 'hyperformula';

export const DebugInfo = () => {
    return (
        <>
            hotBuildDate: {Handsontable.buildDate} <br/>
            hotVersion: {Handsontable.version} <br/>
            hfBuildDate: {HyperFormula.buildDate} <br/>
            hfVersion: {HyperFormula.version} <br/>
            HotTable: {HotTable.version} <br/>
        </>
    )
}