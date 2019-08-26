import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {userLoggedInChange, userLoggedInTokenChange} from "../../store/actions";

class Login extends Component {
  state = {
    email: 's.bilous@astoundcommerce.com',
    password: 'S@bilous1'
  }

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch('/users/login',
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state)
      })
      .then(res => {
        if (res.status !== 200) {
          console.log(res.statusText)
        } else {
          return res.json()
        }
      })
      .then(data => {
        const token = data.token
        this.props.userLoggedInChange(true)
        this.props.userLoggedInTokenChange(token)
        localStorage.setItem('aut-token', token)
      })
  }

  render() {
    const {email, password} = this.state

    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <input value={email} name="email" type="text" onChange={this.handleChange}/>
          <input value={password} name="password" type="password" onChange={this.handleChange}/>
          <div>
            <button>Send</button>
          </div>
        </form>
      </Fragment>
    )
  }
}

const mapDispatchToProps = {userLoggedInChange, userLoggedInTokenChange}

export default connect(null, mapDispatchToProps)(Login)