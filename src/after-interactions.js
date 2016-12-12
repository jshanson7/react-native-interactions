import {Component, PropTypes} from 'react';
import {InteractionManager} from 'react-native';

export default class AfterInteractions extends Component {

  static propTypes = {
    children: PropTypes.any,
    placeholder: PropTypes.any,
    renderPlaceholder: PropTypes.func
  };

  static defaultProps = {
    placeholder: null,
    renderPlaceholder: null
  };

  state = {interactionsComplete: false};

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      this.setState({interactionsComplete: true});
    });
  }

  render() {
    const {
      children,
      placeholder,
      renderPlaceholder
    } = this.props;

    if (this.state.interactionsComplete) {
      return children;
    }

    if (placeholder) {
      return placeholder;
    }

    if (renderPlaceholder) {
      return renderPlaceholder();
    }

    return null;
  }
}
