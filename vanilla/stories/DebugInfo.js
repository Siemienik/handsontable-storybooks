import Handsontable from "handsontable";
import { HyperFormula } from "hyperformula";

export const createDebugInfo = ({}) => {
  const container = document.createElement('div');
  container.innerHTML = `
    hotBuildDate: ${Handsontable.buildDate} <br/>
    hotVersion: ${Handsontable.version} <br/>
    hfBuildDate: ${HyperFormula.buildDate} <br/>
    hfVersion: ${HyperFormula.version} <br/>
  `
  return container;
};
