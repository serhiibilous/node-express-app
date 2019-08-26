import React from 'react'
import {Redirect, Route} from 'react-router-dom'

export const PublicRoute = ({component: Component, ...rest}) => {
  return <Route
    {...rest}
    render={
      props =>
        localStorage.getItem('aut-token') ? (
          <Redirect
            to={{
              pathname: '/profile',
              state: {form: props.location}
            }}
          />
        ) : (
          <Component {...props} />
        )
    }
  />
}
