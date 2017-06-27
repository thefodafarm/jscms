import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route 
} from 'react-router-dom'

import Header from '../components/Header'

import Dashboard from './Dashboard'



class App extends Component {
  render() {
    return (
      <Router>
        <div className="Router">
          <div className="Navbar">
            <Header />
          </div>
          <div className="Wrapper">
            <Route exact path="/" component={Dashboard} />
          </div>
        </div>
      </Router>

    );
  }
}

export default App;
