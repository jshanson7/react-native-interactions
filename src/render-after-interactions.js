import React from 'react';
import AfterInteractions from './after-interactions';

const defaults = {
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
      placeholder,
      renderPlaceholder
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

    Object.assign(WrappedComponent, ExpensiveComponent);

    return WrappedComponent;
  };
}
