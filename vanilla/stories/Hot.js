import Handsontable from "handsontable";

export const createHot = ({
    settings,
    callback = ()=>{},
    css = '',
    rtl = false
}) => {

  const style = document.createElement('style');
  style.innerHTML = css;

  const container = document.createElement('div');
  const hot = new Handsontable(container, settings);

  callback(hot);

  const wrapper = document.createElement('div');
  wrapper.append(style, container);

  if(rtl){
      wrapper.dir = 'rtl';
  }

  setTimeout(()=>hot.render());

  return wrapper;
};
