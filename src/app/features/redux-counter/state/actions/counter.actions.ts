import { createActionGroup, props, emptyProps } from '@ngrx/store';
import { CounterState } from '../reducers/counter.reducer';

//these are the things the components tell us about.
// they are things tht happened to a particular component.

export const CounterComponentEvents = createActionGroup({
  source: 'Counter CounterComponent Events',
  events: {
    entered: emptyProps(),
    incremented: emptyProps(),
    decremented: emptyProps(),
    reset: emptyProps(),
    by: props<{ by: 1 | 3 | 5 }>(),
  },
});

export const CounterComponentCommands = createActionGroup({
  source: 'Counter CounterComponent Commands',
  events: {},
});

export const CounterComponentDocuments = createActionGroup({
  source: 'Counter CounterComponent Documents',
  events: {
    state: props<{ payload: CounterState }>(),
  },
});
