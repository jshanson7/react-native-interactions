# React Native Interactions [![NPM version][npm-image]][npm-url]

React Native [InteractionManager](https://facebook.github.io/react-native/docs/interactionmanager.html) helpers.

![Demo](demo.gif)

```javascript
import {AfterInteractions} from 'react-native-interactions';

function MyComponent() {
  return (
    <AfterInteractions>
      <ExpensiveComponent/>
    </AfterInteractions>
  );
}
```

## Installation

```sh
npm i --save react-native-interactions
```

## Usage

### AfterInteractions

A component that only renders `children` after `InteractionManager.runAfterInteractions()`.  Wrap top-level [`Navigator`](http://facebook.github.io/react-native/docs/navigator.html) scenes with this component to improve animation perfomance.

```javascript
import {AfterInteractions} from 'react-native-interactions';

function MyScene() {
  return (
    <AfterInteractions placeholder={<CheapPlaceholder/>}>
      <ExpensiveComponent/>
    </AfterInteractions>
  );
}
```

Props:

| prop                | type          | default | description                                |
|---------------------|---------------|---------|--------------------------------------------|
| `placeholder`       | react element | `null`  | (optional) prerendered placeholder content |
| `renderPlaceholder` | function      | `null`  | (optional) placeholder renderer            |

### renderAfterInteractions

Same as `AfterInteractions` component, but in the form of a decorator.

```javascript
import {renderAfterInteractions} from 'react-native-interactions';

@renderAfterInteractions
class ExpensiveComponent extends Component {

  static placeholder = <CheapPlaceholder/>;

  render() {
    // expensive stuff
  }
}
```

or:

```javascript
@renderAfterInteractions({placeholder: <CheapPlaceholder/>})
class ExpensiveComponent extends Component {
  // expensive stuff
}
```

or:

```javascript
class ExpensiveComponent extends Component {
  // expensive stuff
}

export default renderAfterInteractions(ExpensiveComponent);
```

Options:

| option              | type          | default | description                                                                                                         |
|---------------------|---------------|---------|---------------------------------------------------------------------------------------------------------------------|
| `hoistStatics`      | boolean       | `true`  | (optional) [copy non-react static props](https://github.com/mridgway/hoist-non-react-statics) to composed component |
| `placeholder`       | react element | `null`  | (optional) prerendered placeholder content                                                                          |
| `renderPlaceholder` | function      | `null`  | (optional) placeholder renderer                                                                                     |

## License

MIT

[npm-image]: https://badge.fury.io/js/react-native-interactions.svg
[npm-url]: https://npmjs.org/package/react-native-interactions
