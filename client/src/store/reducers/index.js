const authToken = localStorage.getItem('aut-token')

const initialState = {
  userLoggedIn: !!authToken,
  userLoggedInToken: authToken ? authToken : null,
  user: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOGGED_IN_CHANGE':
      return {
        ...state,
        userLoggedIn: action.payload
      }
    case 'USER_LOGGED_IN_TOKEN_CHANGE':
      return {
        ...state,
        userLoggedInToken: action.payload
      }
    case 'USER_SET_DATA':
      return {
        ...state,
        user: action.payload
      }
    default:
      return state
  }
}

export default reducer
