import React, { Component } from 'react';

class Dashboard extends Component {
  constructor(props){
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete(id) {
    return (e) => {
      e.preventDefault()
      this.props.deletePage(id)
    }
  }

  render() {
  	const pages = this.props.pages.map((page, i) => {
  		return (
        <div key={i}>
        <h2>{page.title}</h2>
        <a href={`/admin/edit-page/${i}`}>Edit</a>
        <button onClick={this.handleDelete(i)}>Delete</button>
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

export default Dashboard;
