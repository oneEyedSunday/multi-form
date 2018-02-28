import { FormService } from './services/form.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import * as fromStore from '../store';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MatInputModule,
  MatSelectModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatRadioModule,
  MatRadioGroup,
  MatRadioButton,
  MatCheckboxModule,
  MatSlideToggleModule,
  MatListModule
} from '@angular/material';
import * as fromComponents from './components';
import * as fromContainers from './containers';

const matComponents = [
  MatCardModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  MatIconModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatCheckboxModule,
  MatListModule
];

const matDirectives = [
  MatRadioButton,
  MatRadioGroup
];

@NgModule({
  declarations: [
    [...fromComponents.components],
    [...fromContainers.containers]
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    [...matComponents],
    StoreModule.forRoot({ form : fromStore.reducer}),
    StoreDevtoolsModule.instrument(),
    FlexLayoutModule
  ],
  providers: [FormService],
  bootstrap: [fromContainers.AppComponent]
})
export class AppModule { }
