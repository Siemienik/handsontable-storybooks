import configurations from "../configurations";
import {HyperFormula} from "hyperformula";
import {HotTable} from "@handsontable/react";
import React from "react";

export default {
    title: 'Generic',
    component: HotTable
};

const mapConfigToStory = (configuration) => {
    const story = (args) => <HotTable {...args} />
    story.args = {
        settings: configuration
    };
    return story
};

export const JustATable = mapConfigToStory(configurations.JustATable);
export const CustomContextMenu = mapConfigToStory(configurations.CustomContextMenu);
export const CustomEditorExample = mapConfigToStory(configurations.CustomEditorExample);
export const CustomRendererExample = mapConfigToStory(configurations.CustomRendererExample);
export const StandardContextMenu = mapConfigToStory(configurations.StandardContextMenu);
export const NestedRows = mapConfigToStory(configurations.NestedRows);
export const ButtonRendererWithAction = mapConfigToStory(configurations.ButtonRendererWithAction);
export const ValidationResultAsAComment = mapConfigToStory(configurations.ValidationResultAsAComment);
export const ValidationAndDropDown = mapConfigToStory(configurations.ValidationAndDropDown);
export const AutoColumnSizeDefault = mapConfigToStory(configurations.AutoColumnSizeDefault);
export const AutoColumnSizeEnabled = mapConfigToStory(configurations.AutoColumnSizeEnabled);
export const AutoColumnSizeDisabled = mapConfigToStory(configurations.AutoColumnSizeDisabled);
export const NestedHeaders = mapConfigToStory(configurations.NestedHeaders);
export const CollapsibleColumns = mapConfigToStory(configurations.CollapsibleColumns);
export const ColumnSummary = mapConfigToStory(configurations.ColumnSummary);
export const CustomBorders = mapConfigToStory(configurations.CustomBorders);

const formulas = {formulas:{engine:HyperFormula}};
export const HfJustATable = mapConfigToStory({...configurations.JustATable, ...formulas});
export const HfCustomContextMenu = mapConfigToStory({...configurations.CustomContextMenu, ...formulas});
export const HfCustomEditorExample = mapConfigToStory({...configurations.CustomEditorExample, ...formulas});
export const HfCustomRendererExample = mapConfigToStory({...configurations.CustomRendererExample, ...formulas});
export const HfStandardContextMenu = mapConfigToStory({...configurations.StandardContextMenu, ...formulas});
export const HfNestedRows = mapConfigToStory({...configurations.NestedRows, ...formulas});
export const HfButtonRendererWithAction = mapConfigToStory({...configurations.ButtonRendererWithAction, ...formulas});
export const HfValidationResultAsAComment = mapConfigToStory({...configurations.ValidationResultAsAComment, ...formulas});
export const HfValidationAndDropDown = mapConfigToStory({...configurations.ValidationAndDropDown, ...formulas});
export const HfAutoColumnSizeDefault = mapConfigToStory({...configurations.AutoColumnSizeDefault, ...formulas});
export const HfAutoColumnSizeEnabled = mapConfigToStory({...configurations.AutoColumnSizeEnabled, ...formulas});
export const HfAutoColumnSizeDisabled = mapConfigToStory({...configurations.AutoColumnSizeDisabled, ...formulas});
export const HfNestedHeaders = mapConfigToStory({...configurations.NestedHeaders, ...formulas});
export const HfCollapsibleColumns = mapConfigToStory({...configurations.CollapsibleColumns, ...formulas});
export const HfColumnSummary = mapConfigToStory({...configurations.ColumnSummary, ...formulas});
export const HfCustomBorders = mapConfigToStory({...configurations.CustomBorders, ...formulas});
