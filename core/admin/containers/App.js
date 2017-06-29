import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import axios from 'axios'

import Header from '../components/Header'

import Dashboard from './Dashboard'

const instance = axios.create({baseURL: 'http://localhost:1337'})



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "siteTitle": "NULL"
    }
    this.getCurrentSiteTitle()
  }

  getCurrentSiteTitle() {
    instance.get('/')
      .then((response) => { this.setState({"siteTitle": response.data})})
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
              <Dashboard siteTitle={this.state.siteTitle} />
            ) } />
          </div>
        </div>
      </Router>

    );
  }
}

export default App;
