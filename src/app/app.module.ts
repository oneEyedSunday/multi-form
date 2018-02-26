import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import * as fromComponents from './components';
import * as fromContainers from './containers';


@NgModule({
  declarations: [
    [...fromComponents.components],
    [...fromContainers.containers]
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [fromComponents.AppComponent]
})
export class AppModule { }
