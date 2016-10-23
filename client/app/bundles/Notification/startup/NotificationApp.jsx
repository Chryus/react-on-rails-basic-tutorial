import React from 'react';
import ReactOnRails from 'react-on-rails';

import Notification from '../containers/Notification';

const NotificationApp = (props) => (
  <Notification {...props} />
);

// This is how react_on_rails can see the HelloWorldApp in the browser.
ReactOnRails.register({ NotificationApp });
