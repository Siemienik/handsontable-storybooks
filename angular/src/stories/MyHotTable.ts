// noinspection AngularMissingOrInvalidDeclarationInModule

import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
      <hot-table [settings]="settings">
          <ng-content></ng-content>
      </hot-table>
  `,
})
export class MyHotTable{
    @Input() settings={};
}
