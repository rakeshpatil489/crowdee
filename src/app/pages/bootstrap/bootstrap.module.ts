import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';

import { BootstrapRoutingModule } from './bootstrap-routing.module';
import { BootstrapComponent } from './bootstrap.component';
import { ButtonsModule } from './buttons/buttons.module';

const COMPONENTS = [
  BootstrapComponent,
];

const ENTRY_COMPONENTS = [];

@NgModule({
  imports: [
    ThemeModule,
    BootstrapRoutingModule,
    ButtonsModule,
  ],
  declarations: [
    ...COMPONENTS,
  ],
  entryComponents: [
    ...ENTRY_COMPONENTS,
  ],
})
export class BootstrapModule { }
