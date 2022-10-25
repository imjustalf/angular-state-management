import { createActionGroup, props, emptyProps } from '@ngrx/store';

//these are the things the components tell us about.
// they are things tht happened to a particular component.

export const CounterComponentEvents = createActionGroup({
  source: 'Counter CounterComponent Events',
  events: {
    incremented: emptyProps(),
    decremented: emptyProps(),
    reset: emptyProps(),
  },
});

export const CounterComponentCommands = createActionGroup({
  source: 'Counter CounterComponent Commands',
  events: {},
});

export const CounterComponentDocuments = createActionGroup({
  source: 'Counter CounterComponent Documents',
  events: {},
});
