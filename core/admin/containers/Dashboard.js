import React, { Component } from 'react';

class App extends Component {
  render() {

  	const pages = this.props.pages.map((page, i) => {
  		return (
        <div key={i}>
        <h2>{page.title}</h2>
        <a href={`/admin/edit-page/${i}`}>Edit</a>
        </div>
        )
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
