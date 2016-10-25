// HelloWorldWidget is an arbitrary name for any "dumb" component. We do not recommend suffixing
// all your dump component names with Widget.

// I call components encapsulated React components that are driven solely by props and don't
// talk to Redux. Same as “dumb components”. They should stay the same regardless of your router, data fetching library, etc.

import React, { PropTypes } from 'react';

// Simple example of a React "dumb" component
export default class HelloWorldWidget extends React.Component {
  static propTypes = {
    // If you have lots of data or action properties, you should consider grouping them by
    // passing two properties: "data" and "actions".
    updateName: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
  };

  // React will automatically provide us with the event `e`
  handleChange(e) {
    const name = e.target.value;
    this.props.updateName(name);
  }

  render() {
    const { name } = this.props;
    return (
      <div className="container">
        <h3>
          Hello, {name}!
        </h3>
        <hr />
        <form className="form-horizontal">
          <label>
            Say hello to:
          </label>
          <input
            type="text"
            value={name}
            onChange={e => this.handleChange(e)}
          />
        </form>
      </div>
    );
  }
}
