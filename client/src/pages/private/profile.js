import React, {Fragment} from 'react'
import {connect} from "react-redux"

class Profile extends React.Component {
  state = {
    user: null
  }

  componentDidMount() {
    const token = `Bearer ${this.props.userLoggedInToken}`
    fetch('/users/me',
      {
        method: 'POST',
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": token
        }
      })
      .then(res => {
        if (res.status !== 200) {
          console.log(res.statusText)
        } else {
          return res.json()
        }
      })
      .then(data => {
        this.setState({
          user: data
        })
      })
  }

  render() {
    if (!this.state.user) return <div>Loading user data ...</div>
    const {age, email, name} = this.state.user

    return (
      <Fragment>
        <h1>
          Profile
        </h1>
        <hr/>
        <div>
          age: {age}
        </div>
        <div>
          email: {email}
        </div>
        <div>
          name: {name}
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = ({userLoggedInToken}) => {
  return {userLoggedInToken}
}

export default connect(mapStateToProps)(Profile)
