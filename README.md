# Redux Notify
Redux middleware to notify when an action from the list is dispatched.

## Usage
Specify actions to catch, and which actions to trigger:
```js
const notifyEvents = [
  {
    catch: [INCREMENT_COUNTER, DECREMENT_COUNTER],
    dispatch: sendNotification
  }
];
```
Then just include it as a redux middleware:
```js
import notify from 'redux-notify';
const middleware = [
      thunk,
      ...
      notify(notifyEvents)
    ];
const store = applyMiddleware(...middleware)(createStore)(reducer);
```

## API
#### `notify(notifyEvents, [config])`
  - arguments
    - **notifyEvents** an *array* of *objects*:
      - **catch** - an *array* of action *objects*, which trigger dispatching of actions specified in the **dispatch** parameter.
      - **dispatch** - an *array* of action creators (*functions*) or just an action creator (*function*) to be dispatched after the actions in the **catch** parameter.
    - **config** *object* (optional)
      - **noReverse** *boolean* - prevents triggering the action back, when having cyclic dispatching.

#### Example
See [browser-redux](https://github.com/zalmoxisus/browser-redux) for a boilerplate:
  - [notifyEvents](https://github.com/zalmoxisus/browser-redux/blob/master/src/app/events/notifyEvents.js)
  - [implementation](https://github.com/zalmoxisus/browser-redux/blob/master/src/app/store/configureStore.js#L14)
