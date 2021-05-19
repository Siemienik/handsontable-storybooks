<template>
  <div id="app">
    {{debug}}
    <hot-table :settings="hotSettings">
    </hot-table>
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
      debug:{
        hotBuildDate: Handsontable.buildDate,
        hotVersion: Handsontable.version,
        hfBuildDate: HyperFormula.buildDate,
        hfVersion: HyperFormula.version,
      },
      hotSettings: {
        data: Handsontable.helper.createSpreadsheetData(10, 10),
        formulas:{
          engine: HyperFormula
        },
        licenseKey: 'non-commercial-and-evaluation'
      },
    }
  },
  components: {
    HotTable
  }
}
</script>

<style src="../node_modules/handsontable/dist/handsontable.full.css"></style>
