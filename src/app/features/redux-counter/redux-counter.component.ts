import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCounterCurrent } from './state';
import { CounterComponentEvents } from './state/actions/counter.actions';

@Component({
  selector: 'app-redux-counter',
  templateUrl: './redux-counter.component.html',
  styleUrls: ['./redux-counter.component.css'],
})
export class ReduxCounterComponent {
  current$ = this.store.select(selectCounterCurrent);
  constructor(private readonly store: Store) {}

  increment() {
    //tell the store what happened
    this.store.dispatch(CounterComponentEvents.incremented());
  }

  decrement() {
    this.store.dispatch(CounterComponentEvents.decremented());
  }

  reset() {
    this.store.dispatch(CounterComponentEvents.reset());
  }
}
