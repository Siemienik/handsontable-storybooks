import {HotColumn, HotTable} from "@handsontable/vue";
import configurations from "../../vanilla/configurations";
import {HyperFormula} from "hyperformula";

export default {
    title: 'Generic',
    component: HotTable
};

const Template = (args, {argTypes}) => ({
    props: Object.keys(argTypes),
    components: {HotTable, HotColumn},
    template: `<hot-table v-bind="$props.hotTable"></hot-table>
  `,
});

const mapConfigToStory = (configuration) => {
    const story = Template.bind({});
    story.args = {
        hotTable: {
            settings: configuration
        }
    };
    return story
};

export const JustATable = mapConfigToStory(configurations.JustATable);
export const CustomContextMenu = mapConfigToStory(configurations.CustomContextMenu);
export const CustomEditorExample = mapConfigToStory(configurations.CustomEditorExample);
export const CustomRendererExample = mapConfigToStory(configurations.CustomRendererExample);
export const CustomEditorAsAClass = mapConfigToStory(configurations.CustomEditorAsAClass);
//
const formulas = {formulas:{engine:HyperFormula}};
export const HfJustATable = mapConfigToStory({...configurations.JustATable, ...formulas});
export const HfCustomContextMenu = mapConfigToStory({...configurations.CustomContextMenu, ...formulas});
export const HfCustomEditorExample = mapConfigToStory({...configurations.CustomEditorExample, ...formulas});
export const HfCustomRendererExample = mapConfigToStory({...configurations.CustomRendererExample, ...formulas});
export const HfCustomEditorAsAClass = mapConfigToStory({...configurations.CustomEditorAsAClass, ...formulas});

