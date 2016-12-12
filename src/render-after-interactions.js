import React from 'react';
import AfterInteractions from './after-interactions';

const defaults = {
  placeholder: null,
  renderPlaceholder: null,
  inheritStaticProps: true
};

export default function renderAfterInteractions(optionsOrComponent) {
  if (typeof optionsOrComponent === 'function') {
    // only component provided
    return renderAfterInteractions()(optionsOrComponent);
  }

  const {
    placeholder,
    renderPlaceholder,
    inheritStaticProps
  } = {...defaults, ...optionsOrComponent};

  return ExpensiveComponent => {
    function WrappedComponent(props) {
      return (
        <AfterInteractions placeholder={placeholder} renderPlaceholder={renderPlaceholder}>
          <ExpensiveComponent {...props}/>
        </AfterInteractions>
      );
    }

    if (inheritStaticProps) {
      Object.assign(WrappedComponent, ExpensiveComponent);
    }

    return WrappedComponent;
  };
}
