import React, { Component } from 'react';

class App extends Component {
  render() {

  	const pages = this.props.pages.map((page) => {
  		return (<h2 key={page.id}>{page.title}</h2>)
  	});

    return (
      <div>
      	<h2>Dashboard</h2>
      	{pages}
      </div>
    );
  }
}

export default App;
