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
  story.args = {settings: configuration, rtl:false, ...options};
  return story;
}

export const RtlJustATable = mapConfigToStory(configurations.JustATable, {rtl: true});
export const RtlFixedRowsBottom = mapConfigToStory(configurations.FixedRowsBottom, {rtl: true});
export const RtlFixedRowsBottomWithHeaders = mapConfigToStory(configurations.FixedRowsBottomWithHeaders, {rtl: true});
export const RtlMultileSelection = mapConfigToStory(configurations.MultileSelection, {rtl: true});
export const RtlCellTypeNumeric = mapConfigToStory(configurations.CellTypeNumeric, {rtl: true});
export const RtlCellTypeAutocomplete = mapConfigToStory(configurations.CellTypeAutocomplete, {rtl: true});
export const RtlCellTypeCheckbox = mapConfigToStory(configurations.CellTypeCheckbox, {rtl: true});
export const RtlCellTypeDate = mapConfigToStory(configurations.CellTypeDate, {rtl: true});
export const RtlCellTypeDropdown = mapConfigToStory(configurations.CellTypeDropdown, {rtl: true});
export const RtlCellTypeHandsontable = mapConfigToStory(configurations.CellTypeHandsontable, {rtl: true});
export const RtlCellTypePassword = mapConfigToStory(configurations.CellTypePassword, {rtl: true});
export const RtlCellTypeTime = mapConfigToStory(configurations.CellTypeTime, {rtl: true});
export const RtlNestedAndCollapsibleColumns = mapConfigToStory(configurations.NestedAndCollapsibleColumns, {rtl: true});
export const RtlColumnSorting = mapConfigToStory(configurations.ColumnSorting, {rtl: true});
export const RtlColumnSummary1 = mapConfigToStory(configurations.ColumnSummary1, {rtl: true});
export const RtlComments = mapConfigToStory(configurations.Comments, {rtl: true});
export const RtlColumnDropdownMenu = mapConfigToStory(configurations.ColumnDropdownMenu, {rtl: true});
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
export const RtlFilters = mapConfigToStory(configurations.Filters, {rtl: true});
export const RtlHiddenColumns = mapConfigToStory(configurations.HiddenColumns, {rtl: true});
export const RtlColumnSummary = mapConfigToStory(configurations.ColumnSummary, {rtl: true});
export const RtlCustomBorders = mapConfigToStory(configurations.CustomBorders, {rtl: true});

export const JustATable = mapConfigToStory(configurations.JustATable);
export const FixedRowsBottom = mapConfigToStory(configurations.FixedRowsBottom);
export const FixedRowsBottomWithHeaders = mapConfigToStory(configurations.FixedRowsBottomWithHeaders);
export const MultileSelection = mapConfigToStory(configurations.MultileSelection);
export const CellTypeNumeric = mapConfigToStory(configurations.CellTypeNumeric);
export const CellTypeAutocomplete = mapConfigToStory(configurations.CellTypeAutocomplete);
export const CellTypeCheckbox = mapConfigToStory(configurations.CellTypeCheckbox);
export const CellTypeDate = mapConfigToStory(configurations.CellTypeDate);
export const CellTypeDropdown = mapConfigToStory(configurations.CellTypeDropdown);
export const CellTypeHandsontable = mapConfigToStory(configurations.CellTypeHandsontable);
export const CellTypePassword = mapConfigToStory(configurations.CellTypePassword);
export const CellTypeTime = mapConfigToStory(configurations.CellTypeTime);
export const NestedAndCollapsibleColumns = mapConfigToStory(configurations.NestedAndCollapsibleColumns);
export const ColumnSorting = mapConfigToStory(configurations.ColumnSorting);
export const ColumnSummary1 = mapConfigToStory(configurations.ColumnSummary1);
export const Comments = mapConfigToStory(configurations.Comments);
export const ColumnDropdownMenu = mapConfigToStory(configurations.ColumnDropdownMenu);
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
export const Filters = mapConfigToStory(configurations.Filters);
export const HiddenColumns = mapConfigToStory(configurations.HiddenColumns);
export const CustomBorders = mapConfigToStory(configurations.CustomBorders);

const formulas = {formulas:{engine:HyperFormula}};
export const HfJustATable = mapConfigToStory({...configurations.JustATable, ...formulas});
export const HfFixedRowsBottom = mapConfigToStory({...configurations.FixedRowsBottom, ...formulas});
export const HfFixedRowsBottomWithHeaders = mapConfigToStory({...configurations.FixedRowsBottomWithHeaders, ...formulas});
export const HfMultileSelection = mapConfigToStory({...configurations.MultileSelection, ...formulas});
export const HfCellTypeNumeric = mapConfigToStory({...configurations.CellTypeNumeric, ...formulas});
export const HfCellTypeAutocomplete = mapConfigToStory({...configurations.CellTypeAutocomplete, ...formulas});
export const HfCellTypeCheckbox = mapConfigToStory({...configurations.CellTypeCheckbox, ...formulas});
export const HfCellTypeDate = mapConfigToStory({...configurations.CellTypeDate, ...formulas});
export const HfCellTypeDropdown = mapConfigToStory({...configurations.CellTypeDropdown, ...formulas});
export const HfCellTypeHandsontable = mapConfigToStory({...configurations.CellTypeHandsontable, ...formulas});
export const HfCellTypePassword = mapConfigToStory({...configurations.CellTypePassword, ...formulas});
export const HfCellTypeTime = mapConfigToStory({...configurations.CellTypeTime, ...formulas});
export const HfNestedAndCollapsibleColumns = mapConfigToStory({...configurations.NestedAndCollapsibleColumns, ...formulas});
export const HfColumnSorting = mapConfigToStory({...configurations.ColumnSorting, ...formulas});
export const HfColumnSummary1 = mapConfigToStory({...configurations.ColumnSummary1, ...formulas});
export const HfComments = mapConfigToStory({...configurations.Comments, ...formulas});
export const HfColumnDropdownMenu = mapConfigToStory({...configurations.ColumnDropdownMenu, ...formulas});
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
export const HfFilters = mapConfigToStory({...configurations.Filters, ...formulas});
export const HfHiddenColumns = mapConfigToStory({...configurations.HiddenColumns, ...formulas});
export const HfColumnSummary = mapConfigToStory({...configurations.ColumnSummary, ...formulas});
export const HfCustomBorders = mapConfigToStory({...configurations.CustomBorders, ...formulas});
