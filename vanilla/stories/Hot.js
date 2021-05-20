import Handsontable from "handsontable";

export const createHot = ({
    settings,
    callback = ()=>{}
}) => {
  const container = document.createElement('div');

  const hot = new Handsontable(container, settings);

  callback(hot);

  return container;
};
