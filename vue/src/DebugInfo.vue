<template>
  <div id="app">:)
    hotBuildDate: {{debug.hotBuildDate}},<br/>
    hotVersion: {{debug.hotVersion}},<br/>
    hfBuildDate: {{debug.hfBuildDate}},<br/>
    hfVersion: {{debug.hfVersion}},<br/>
    hotTableVersion: {{debug.hotTableVersion}},<br/>
  </div>
</template>

<script>
import { HotTable } from '@handsontable/vue';
import Handsontable from 'handsontable';
import { HyperFormula } from 'hyperformula';

export default {
  name: 'DebugInfo',
  data: function() {
    return {
      debug: {
        hotBuildDate: Handsontable.buildDate,
        hotVersion: Handsontable.version,
        hfBuildDate: HyperFormula.buildDate,
        hfVersion: HyperFormula.version,
        hotTableVersion: HotTable.version,
      },
    }
  },
}
</script>
