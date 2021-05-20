import "handsontable/dist/handsontable.full.css"
import numbro from 'numbro';
import languages from 'numbro/dist/languages.min.js';

// register needed languages
numbro.registerLanguage(languages['ja-JP']);
numbro.registerLanguage(languages['tr-TR']);


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}