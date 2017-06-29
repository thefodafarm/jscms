import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Dashboard for {this.props.siteTitle}</h2>
      </div>
    );
  }
}

export default App;
