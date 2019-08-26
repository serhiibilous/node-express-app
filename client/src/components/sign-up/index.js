import React, {Component, Fragment} from 'react'
import {userSetData, userLoggedInChange, userLoggedInTokenChange} from "../../store/actions"
import {connect} from "react-redux"
import {Redirect} from "react-router-dom"

class SignUp extends Component {
  state = {
    name: 'Serhii Bilous',
    email: 'serhiybilouss@gmail.com',
    password: 'SerhiiBilous'
  }

  renderUserLoggedIn = () => {
    if (this.props.userLoggedIn) {
      return <Redirect to='/profile'/>
    }
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
    fetch('/users',
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state)
      })
      .then(res => {
        if (res.status !== 201) {
          console.log(res.statusText)
        } else {
          return res.json()
        }
      })
      .then(data => {
        console.log(data)
        this.props.userSetData(data.user)
        this.props.userLoggedInChange(true)
        this.props.userLoggedInTokenChange(data.token)
        localStorage.setItem('aut-token', data.token)
        this.renderUserLoggedIn()
      })
  }

  render() {
    const {name, email, password} = this.state

    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <input value={name} name="email" type="text" onChange={this.handleChange}/>
          <input value={email} name="email" type="text" onChange={this.handleChange}/>
          <input value={password} name="password" type="password" onChange={this.handleChange}/>
          <div>
            <button>Send</button>
          </div>
        </form>
        {}
      </Fragment>
    )
  }
}

const mapStateToProps = ({userLoggedIn}) => {
  return {userLoggedIn}
}

const mapDispatchToProps = {userSetData, userLoggedInChange, userLoggedInTokenChange}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)