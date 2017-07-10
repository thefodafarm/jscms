import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import axios from 'axios'

import Header from '../components/Header'
import Auth from '../components/Auth'

import Dashboard from './Dashboard'
import AddEditPage from './AddEditPage'
import Login from './Login'

const instance = axios.create({baseURL: 'http://localhost:1337'})



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [],
      loggedIn: false
    }

    this.createPage = this.createPage.bind(this)
    this.getPages = this.getPages.bind(this)
    this.editPage = this.editPage.bind(this)
    this.deletePage = this.deletePage.bind(this)
  }

  componentDidMount() {
    this.getPages()
  }

  getPages() {
    instance.get('/admin/listPages').then((response) => {
          this.setState({"pages": response.data})
    }).catch((error) => {console.log(error)})
  }

  createPage(page) {
    instance.post('/admin/createPage',page).then((response) => {
      this.getPages();
      //TODO: Create my own history object as props, then use router to push route.
      window.location.replace('/')
    }).catch((error) => {
      console.log(error)
    })
  }

  editPage(id, page) {
    instance.put(`/admin/editPage/${id}`,page).then((response) => {
      this.getPages();
      window.location.replace('/')
    }).catch((error) => {
      console.log(error)
    })
  }

  deletePage(id) {
    instance.delete(`/admin/deletePage/${id}`).then((response) => {
      this.getPages();
    }).catch((error) => {
      console.log(error)
    })
  }


  render() {
    return (
      <Router>
        <div className="Router">
          <div className="Navbar">
            <Header />
          </div>
          <div className="Wrapper">
            <Route exact path="/" render={ (props) => (
              <Auth loggedIn={this.state.loggedIn}>
                <Dashboard {...props} deletePage={this.deletePage} pages={this.state.pages} />
              </Auth>
            )} />
            <Route path="/admin/new-page" render={ (props) => (
              <Auth loggedIn={this.state.loggedIn}>
                <AddEditPage {...props} createPage={this.createPage} />
              </Auth>
            )} />
            <Route path="/admin/edit-page/:id" render={ (props) => (
              <Auth loggedIn={this.state.loggedIn}>
              <AddEditPage {...props} pages={this.state.pages} editPage={this.editPage} />
              </Auth>
            )} />
            <Route path="/admin/login" render={(props) => (
              <Login {...props} />
            )} />
          </div>
        </div>
      </Router>

    );
  }
}

export default App;
