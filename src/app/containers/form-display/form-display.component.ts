import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../../../store';
import { Observable } from 'rxjs/Observable';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-form-display',
  template: `
    <ng-content></ng-content>
    <div fxLayout fxLayoutAlign="space-around">
      <button *ngIf="currentFormNumber != 0" mat-raised-button (click)="Previous()">Previous</button>
      <button (click)="Proceed()" mat-raised-button [attr.disabled]="bar">{{ lastBtn }}</button>
    </div>
  `,
  styleUrls: ['./form-display.component.css']
})
export class FormDisplayComponent implements OnInit {
  constructor(private store: Store<fromStore.AppState>,
  public fs: FormService) { }
  currentFormNumber: number;
  lastBtn: string;
  bar = false;
  // if its third compinent i.e submission, check if any of
  // the forms have errors, hide submit button based on these errors
  // show form having the error or field
  ngOnInit() {
    this.store.select(fromStore.getCurrentForm)
      .subscribe(number => {
        this.currentFormNumber = number;
        if (number === 3) {
          this.lastBtn = 'Submit';
          this.bar = !this.fs.formsValid();
        } else {
          this.lastBtn = 'Next';
          this.bar = false;
        }
      });
  }

  Proceed() {
  if (this.currentFormNumber < 3) {
    this.nextForm();
  } else {
    this.submit();
  }
  }

  submit() {
  }

  nextForm() {
    this.store.dispatch(new fromStore.ShowForm(this.currentFormNumber + 1));
  }

  Previous () {
    this.store.dispatch(new fromStore.ShowForm(this.currentFormNumber - 1));
  }

}
