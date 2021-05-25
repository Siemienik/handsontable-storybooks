import Handsontable from 'handsontable';

export class CustomEditor extends Handsontable.editors.TextEditor {
  constructor(props) {
    super(props);
  }

  createElements() {
    super.createElements();

    this.TEXTAREA = document.createElement('input');
    this.TEXTAREA.setAttribute('placeholder', 'Custom placeholder');
    this.TEXTAREA.setAttribute('data-hot-input', true);
    this.textareaStyle = this.TEXTAREA.style;
    Handsontable.dom.empty(this.TEXTAREA_PARENT);
    this.TEXTAREA_PARENT.appendChild(this.TEXTAREA);
  }
}