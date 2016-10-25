import React, { PropTypes } from 'react';
import NotificationList from '../components/NotificationList';

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
    this.setupSubscription(this);
  }

  updateNotificationList(notification) {
    var notification = JSON.parse(notification);
    var newNotifications = JSON.parse(this.state.notifications).concat(notification);
    this.setState({notifications: JSON.stringify(newNotifications)});
  }

  render() {
    return (
      <div>
        <NotificationList notifications={this.state.notifications} updateNotificationList={e => this.updateNotificationList(e)} />
      </div>
    );
  }

  setupSubscription(outerScope) {
    console.log("CALLED SETUP Subscription")

    App.notifications = App.cable.subscriptions.create("NotificationsChannel", {
      connected: function() {
        console.log("CONNECTED")
        // Called when the subscription is ready for use on the server
        // Timeout here is needed to make sure Subscription
        // is setup properly, before we do any actions.
        //setTimeout(() => this.perform('subscribed', {}), 1000);
        
      },

      disconnected: function() {
        // Called when the subscription has been terminated by the server
      },

      received: function(data) {
        outerScope.updateNotificationList(data.notification);
      },

      //updateNotificationList: this.updateNotificationList
    });
  }
}