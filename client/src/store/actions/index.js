const userLoggedInChange = (value) => {
  return {
    type: 'USER_LOGGED_IN_CHANGE',
    payload: value
  }
}

const userLoggedInTokenChange = (token) => {
  return {
    type: 'USER_LOGGED_IN_TOKEN_CHANGE',
    payload: token
  }
}

const userSetData = (user) => {
  return {
    type: 'USER_SET_DATA',
    payload: user
  }
}

export {
  userLoggedInChange,
  userLoggedInTokenChange,
  userSetData
}

