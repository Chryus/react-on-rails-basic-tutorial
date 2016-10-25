// NotificationWidget is an arbitrary notifications for any "dumb" component. We do not recommend suffixing
// all your dump component notificationss with Widget.

import React, { PropTypes } from 'react';

// Simple example of a React "dumb" component
export default class NotificationWidget extends React.Component {
  static propTypes = {
    // If you have lots of data or action properties, you should consider grouping them by
    // passing two properties: "data" and "actions".
    updateNotificationList: PropTypes.func.isRequired,
    notifications: PropTypes.string.isRequired,
  };

  //React will automatically provide us with the event `e`
  handleChange(e) {
    const notifications = e.target.value;
    this.props.updateNotificationList(notifications);
  }

  render() {
    const { notifications } = this.props;
    var parsedNotifications = JSON.parse(notifications);
    
    return (
      <ul className="container">
        {parsedNotifications.map(function(value){
          return <li key={value.id}>{value.template}</li>;
        })}
        <hr />
        <form className="form-horizontal">
          <label>
            Say hello to:
          </label>
          <input
            type="text"
            value={notifications}
            onChange={e => this.handleChange(e)}
          />
        </form>
      </ul>
    );
  }
}