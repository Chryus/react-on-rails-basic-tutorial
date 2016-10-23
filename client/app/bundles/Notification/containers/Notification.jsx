import React, { PropTypes } from 'react';
import NotificationWidget from '../components/NotificationWidget';

// Simple example of a React "smart" component
export default class Notification extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  constructor(props, context) {
    super(props, context);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = { name: this.props.name };
  }

  updateName(name) {
    this.setState({ name });
  }

  render() {
    return (
      <div>
        <NotificationWidget name={this.state.name} updateName={e => this.updateName(e)} />
      </div>
    );
  }
}
