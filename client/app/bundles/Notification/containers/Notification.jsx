import React, { PropTypes } from 'react';
import NotificationWidget from '../components/NotificationWidget';

// Simple example of a React "smart" component
export default class Notification extends React.Component {
  static propTypes = {
    notifications: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  constructor(props, context) {
    super(props, context);
    console.log(this.context)

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = { notifications: this.props.notifications };
  }

  updateNotifications(notifications) {
    this.setState({ notifications });
  }

  render() {
    return (
      <div>
        <NotificationWidget notifications={this.state.notifications} updateNotifications={e => this.updateNotifications(e)} />
      </div>
    );
  }
}
