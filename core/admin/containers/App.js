import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import axios from 'axios'

import Header from '../components/Header'

import Dashboard from './Dashboard'
import EditPage from './EditPage'

const instance = axios.create({baseURL: 'http://localhost:1337'})



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "pages": []
    }
    this.getPages()
  }

  getPages() {
    instance.get('/admin/listPages')
      .then(
        (response) => {
          this.setState(
            {
              "pages": response.data
            }
          )
        })
      .catch((error) => {console.log(error)})
  }

  render() {
    return (
      <Router>
        <div className="Router">
          <div className="Navbar">
            <Header />
          </div>
          <div className="Wrapper">
            <Route exact path="/" render={ () => (
              <Dashboard pages={this.state.pages} />
            )} />
            <Route path="/admin/new-page" render={ () => (
              <EditPage />
            )} />
            <Route path="/admin/edit-page/:id" render={ () => (
              <EditPage />
            )} />
          </div>
        </div>
      </Router>

    );
  }
}

export default App;
