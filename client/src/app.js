import React, {Component, Fragment} from 'react'
import {BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom"
import {connect} from "react-redux"

//Pages
import Home from './pages/static/home'
import About from './pages/static/about'
import Users from './pages/static/users'
import LoginPage from './pages/static/login'
import SignUpPage from './pages/static/sign-up'
import Profile from './pages/private/profile'

// Helpers
import {PrivateRoute} from './helpers/private-route'
import {PublicRoute} from './helpers/public-route'
import {userLoggedInChange, userLoggedInTokenChange} from "./store/actions";

class App extends Component {

  redirectToLogin = () => <Redirect to="/home"/>

  userLogout = () => {
    fetch('/users/logout').then(res => {
      if (res.status === 200) {
        this.props.userLoggedInChange(false)
        this.props.userLoggedInTokenChange(null)
        localStorage.removeItem('aut-token')
        this.redirectToLogin()
      }
    })
  }

  render() {
    const {userLoggedIn} = this.props
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home Page</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
              {!userLoggedIn &&
              <Fragment>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/sign-up">Sign Up</Link>
                </li>
              </Fragment>}
              {
                userLoggedIn &&
                <Fragment>
                  <li><Link to="/profile">Profile</Link></li>
                  <li>
                    <button onClick={this.userLogout}>Logout</button>
                  </li>
                </Fragment>
              }
            </ul>
          </nav>
          <hr/>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/users" component={Users}/>

          <PublicRoute path="/login" component={LoginPage}/>
          <PublicRoute path="/sign-up" component={SignUpPage}/>

          <PrivateRoute exact path="/profile" component={Profile}/>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = ({userLoggedIn}) => {
  return {userLoggedIn}
}

const mapDispatchToProps = {userLoggedInChange, userLoggedInTokenChange}

export default connect(mapStateToProps, mapDispatchToProps)(App)
