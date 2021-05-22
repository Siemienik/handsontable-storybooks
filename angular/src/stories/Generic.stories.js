import {MyHotTable} from './MyHotTable';
import configurations from '../../../vanilla/configurations'
import {HyperFormula} from "hyperformula";
import {moduleMetadata} from "@storybook/angular";
import {HotTableModule} from "@handsontable/angular";

export default {
    title: 'Generic',
    component: MyHotTable,
    decorators: [
        moduleMetadata({
            declarations: [],
            imports: [HotTableModule],
        }),
    ],
};

const formulas = {formulas:{engine:HyperFormula}};

export const JustATable = () => ({props:{settings:configurations.JustATable}});
export const CustomContextMenu = () => ({props:{settings:configurations.CustomContextMenu}});
export const CustomEditorExample = () => ({props:{settings:configurations.CustomEditorExample}});
export const CustomRendererExample = () => ({props:{settings:configurations.CustomRendererExample}});

export const HfJustATable = () => ({props:{settings:{...configurations.JustATable, ...formulas}}});
export const HfCustomContextMenu = () => ({props:{settings:{...configurations.CustomContextMenu, ...formulas}}});
export const HfCustomEditorExample = () => ({props:{settings:{...configurations.CustomEditorExample, ...formulas}}});
export const HfCustomRendererExample = () => ({props:{settings:{...configurations.CustomRendererExample, ...formulas}}});