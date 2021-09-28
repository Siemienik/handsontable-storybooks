import { createHot } from './Hot';
import Handsontable from "handsontable";
import {HyperFormula} from "hyperformula";
import configurations from "../configurations";

export default {
  title: 'Generic',
};

const Template = (args ) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createHot({ ...args });
};


const mapConfigToStory = (configuration, options) => {
  const story = Template.bind({});
  story.args = {settings: configuration, ...options};
  return story;
}

export const RtlJustATable = mapConfigToStory(configurations.JustATable, {rtl: true});
export const RtlFixedRowsBottom = mapConfigToStory(configurations.FixedRowsBottom, {rtl: true});
export const RtlFixedRowsBottomWithHeaders = mapConfigToStory(configurations.FixedRowsBottomWithHeaders, {rtl: true});
export const RtlCustomContextMenu = mapConfigToStory(configurations.CustomContextMenu, {rtl: true});
export const RtlCustomEditorExample = mapConfigToStory(configurations.CustomEditorExample, {rtl: true});
export const RtlCustomRendererExample = mapConfigToStory(configurations.CustomRendererExample, {rtl: true});
export const RtlStandardContextMenu = mapConfigToStory(configurations.StandardContextMenu, {rtl: true});
export const RtlNestedRows = mapConfigToStory(configurations.NestedRows, {rtl: true});
export const RtlButtonRendererWithAction = mapConfigToStory(configurations.ButtonRendererWithAction, {rtl: true});
export const RtlValidationResultAsAComment = mapConfigToStory(configurations.ValidationResultAsAComment, {rtl: true});
export const RtlValidationAndDropDown = mapConfigToStory(configurations.ValidationAndDropDown, {rtl: true});
export const RtlAutoColumnSizeDefault = mapConfigToStory(configurations.AutoColumnSizeDefault, {rtl: true});
export const RtlAutoColumnSizeEnabled = mapConfigToStory(configurations.AutoColumnSizeEnabled, {rtl: true});
export const RtlAutoColumnSizeDisabled = mapConfigToStory(configurations.AutoColumnSizeDisabled, {rtl: true});
export const RtlUndoRedo = mapConfigToStory(configurations.UndoRedo, {rtl: true});
export const RtlUndoRedoContextMenu = mapConfigToStory(configurations.UndoRedoContextMenu, {rtl: true});
export const RtlNestedHeaders = mapConfigToStory(configurations.NestedHeaders, {rtl: true});
export const RtlCollapsibleColumns = mapConfigToStory(configurations.CollapsibleColumns, {rtl: true});
export const RtlColumnSummary = mapConfigToStory(configurations.ColumnSummary, {rtl: true});
export const RtlCustomBorders = mapConfigToStory(configurations.CustomBorders, {rtl: true});

export const JustATable = mapConfigToStory(configurations.JustATable);
export const FixedRowsBottom = mapConfigToStory(configurations.FixedRowsBottom);
export const FixedRowsBottomWithHeaders = mapConfigToStory(configurations.FixedRowsBottomWithHeaders);
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
export const UndoRedo = mapConfigToStory(configurations.UndoRedo);
export const UndoRedoContextMenu = mapConfigToStory(configurations.UndoRedoContextMenu);
export const NestedHeaders = mapConfigToStory(configurations.NestedHeaders);
export const CollapsibleColumns = mapConfigToStory(configurations.CollapsibleColumns);
export const ColumnSummary = mapConfigToStory(configurations.ColumnSummary);
export const CustomBorders = mapConfigToStory(configurations.CustomBorders);

const formulas = {formulas:{engine:HyperFormula}};
export const HfJustATable = mapConfigToStory({...configurations.JustATable, ...formulas});
export const HfFixedRowsBottom = mapConfigToStory({...configurations.FixedRowsBottom, ...formulas});
export const HfFixedRowsBottomWithHeaders = mapConfigToStory({...configurations.FixedRowsBottomWithHeaders, ...formulas});
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
export const HfUndoRedo = mapConfigToStory({...configurations.UndoRedo, ...formulas});
export const HfUndoRedoContextMenu = mapConfigToStory({...configurations.UndoRedoContextMenu, ...formulas});
export const HfNestedHeaders = mapConfigToStory({...configurations.NestedHeaders, ...formulas});
export const HfCollapsibleColumns = mapConfigToStory({...configurations.CollapsibleColumns, ...formulas});
export const HfColumnSummary = mapConfigToStory({...configurations.ColumnSummary, ...formulas});
export const HfCustomBorders = mapConfigToStory({...configurations.CustomBorders, ...formulas});
