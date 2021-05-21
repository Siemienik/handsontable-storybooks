import Handsontable from "handsontable";

export class CustomEditor extends Handsontable.editors.TextEditor {
    createElements() {
        super.createElements();

        this.TEXTAREA = document.createElement('input');
        this.TEXTAREA.setAttribute('placeholder', 'Custom placeholder');
        // @ts-ignore
        this.TEXTAREA.setAttribute('data-hot-input', true);
        this.textareaStyle = this.TEXTAREA.style;
        Handsontable.dom.empty(this.TEXTAREA_PARENT);
        this.TEXTAREA_PARENT.appendChild(this.TEXTAREA);
    }
}