import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";

interface AppState {
  message: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrxFire';
  message$: Observable<string>;

  constructor(private store: Store<AppState>) {
    this.message$ = this.store.select('message');
  }

  frenchMessage() {
    this.store.dispatch({type: 'FRENCH'});
  }

  spanishMessage() {
    this.store.dispatch({type: 'SPANISH'});
  }
}
