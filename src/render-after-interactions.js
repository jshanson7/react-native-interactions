import hoistNonReactStatics from 'hoist-non-react-statics'
import React from 'react';
import AfterInteractions from './after-interactions';

const defaults = {
  hoistStatics: true,
  placeholder: null,
  renderPlaceholder: null
};

export default function renderAfterInteractions(options) {
  if (typeof options === 'function') {
    // only component provided
    return renderAfterInteractions()(options);
  }

  return ExpensiveComponent => {
    const {
      hoistStatics,
      renderPlaceholder,
      placeholder
    } = {
      ...defaults,
      ...ExpensiveComponent,
      ...options
    };

    function WrappedComponent(props) {
      return (
        <AfterInteractions placeholder={placeholder} renderPlaceholder={renderPlaceholder}>
          <ExpensiveComponent {...props}/>
        </AfterInteractions>
      );
    }

    if (hoistStatics) {
      hoistNonReactStatics(WrappedComponent, ExpensiveComponent);
    }

    return WrappedComponent;
  };
}
