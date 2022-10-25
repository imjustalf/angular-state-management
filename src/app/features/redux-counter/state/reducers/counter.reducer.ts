import { createReducer, on } from '@ngrx/store';
import {
  CounterComponentDocuments,
  CounterComponentEvents,
} from '../actions/counter.actions';

// describe state for typescript
export interface CounterState {
  current: number;
  by: 1 | 3 | 5;
}

// what should inital state of this be when the application starts up.

const initialState: CounterState = {
  current: 0,
  by: 1,
};

export const reducer = createReducer(
  initialState,
  on(CounterComponentDocuments.state, (_, a) => a.payload),
  on(CounterComponentEvents.by, (s, a) => ({ ...s, by: a.by })),
  on(CounterComponentEvents.reset, (_) => initialState),
  on(
    CounterComponentEvents.incremented,
    (currentState: CounterState): CounterState => ({
      ...currentState,
      current: currentState.current + currentState.by,
    }),
  ),
  on(CounterComponentEvents.decremented, (currentState) => ({
    ...currentState,
    current: currentState.current - currentState.by,
  })),
);
