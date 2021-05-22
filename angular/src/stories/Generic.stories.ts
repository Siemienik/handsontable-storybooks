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

const mapConfigToStory = (configuration) => () => ({props:{settings:configuration}})

export const JustATable = mapConfigToStory(configurations.JustATable);
export const CustomContextMenu = mapConfigToStory(configurations.CustomContextMenu);
export const CustomEditorExample = mapConfigToStory(configurations.CustomEditorExample);
export const CustomRendererExample = mapConfigToStory(configurations.CustomRendererExample);

const formulas = {formulas:{engine:HyperFormula}};
export const HfJustATable = mapConfigToStory({...configurations.JustATable, ...formulas});
export const HfCustomContextMenu = mapConfigToStory({...configurations.CustomContextMenu, ...formulas});
export const HfCustomEditorExample = mapConfigToStory({...configurations.CustomEditorExample, ...formulas});
export const HfCustomRendererExample = mapConfigToStory({...configurations.CustomRendererExample, ...formulas});
