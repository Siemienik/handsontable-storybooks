import "handsontable/dist/handsontable.full.css"
import numbro from 'numbro';
import languages from 'numbro/dist/languages.min.js';

/** CYPRESS */
import { forceReRender } from '@storybook/html'
import { setCurrentStory } from 'cypress-storybook/common'

window.__setCurrentStory = function (categorization, story) {
  setCurrentStory(categorization, story)
  forceReRender()
}

window.__changeKnob = function (changedKnob) {
  changeKnob(changedKnob)

  // force story to rerender with updated knob
  forceReRender()
}

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