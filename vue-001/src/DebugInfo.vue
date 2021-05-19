<template>
  <div id="app">
    {{debug}}
  </div>
</template>

<script>
import { HotTable } from '@handsontable/vue';
import Handsontable from 'handsontable';
import { HyperFormula } from 'hyperformula';

export default {
  name: 'App',
  data: function() {
    return {
      debug: {
        hotBuildDate: Handsontable.buildDate,
        hotVersion: Handsontable.version,
        hfBuildDate: HyperFormula.buildDate,
        hfVersion: HyperFormula.version,
      },
    }
  },
  components: {
    HotTable
  }
}
</script>
