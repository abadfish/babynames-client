import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Main, Heading, Box, Text } from 'grommet'
import { signup } from '../../state/Auth/actions';
import SignupForm from './SignupForm'

const Signup = () => {

  const dispatch = useDispatch()
  const handleSignup = useCallback((user) => {
    dispatch(signup(user))
  })
  return (
    <Main pad='large'>
      <Heading className='login-heading' a11yTitle='BabyNamer' alignSelf='center' color='brand'>Anything But Bob</Heading>
      <SignupForm onSubmit={ handleSignup } />
    </Main>
  )

}

export default Signup
