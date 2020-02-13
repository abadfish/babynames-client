import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Main, Heading, Box, Text } from 'grommet'
import { login } from '../../state/Auth/actions';
import LoginForm from './LoginForm';

const Login = () => {
  const dispatch = useDispatch()
  const handleLogin = useCallback((user) => {
    dispatch(login(user))
  })

  return (
    <Main pad='large'>
      <Heading className='login-heading' a11yTitle='BabyNamer' alignSelf='center' color='brand'>Anything But Bob</Heading>
      <LoginForm onSubmit={ handleLogin } />
      <Box alignSelf='center'>
        <Text size='small' color='brand' margin='small'>New to Anything But Bob?
        Create an account <NavLink style={{ color: '#6FFFB0' }} to='/signup'>here.</NavLink></Text>
      </Box>
    </Main>
  )
}
export default Login
