import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../../../store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentForm: Observable<number>;
  constructor(private store: Store<fromStore.AppState> ) {
  }

  ngOnInit() {
    this.currentForm = this.store.pipe(select(fromStore.getCurrentForm));
  }

  navigateTo(formNumber: number) {
    this.store.dispatch(new fromStore.ShowForm(formNumber));
  }
}
