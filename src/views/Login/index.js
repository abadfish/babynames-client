import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Main, Heading, Box, Text } from 'grommet'
import Loader from 'react-loader-spinner'
import { login } from '../../state/Auth/actions';
import LoginForm from './LoginForm';

const Login = () => {
  const dispatch = useDispatch()
  const makingRequestToApi = useSelector(state => state.appTransactions.makingRequestToAPI)
  console.log(makingRequestToApi)
  const errors = useSelector(state => state.auth.errors)
  console.log(errors)
  const handleLogin = useCallback((user) => {
    dispatch(login(user))
  })

  return (
    <Main pad='large'>
      <Heading className='login-heading' a11yTitle='BabyNamer' alignSelf='center' color='brand'>Anything But Bob</Heading>
      { makingRequestToApi ?
        <Box alignSelf='center'>
          <Loader
            type='Puff'
            color='#6FFFB0'
            height={100}
            width={100}
          />
        </Box>
        :
        <Box alignSelf='center'>
          <LoginForm onSubmit={ handleLogin } />
          {
            errors ?
              errors.password ?
              errors.password.map((e, i) => (
                <Text key={i} color='status-error'>{e}</Text>
              ))
              :
              errors.username ?
              errors.username.map((e, i) => (
                <Text key={i} color='status-error'>{e}</Text>
              ))
              :
              null
            :
            null
          }
          <Box alignSelf='center'>
            <Text color='brand' margin='small'>New to Anything But Bob?
            Create an account <NavLink style={{ color: '#6FFFB0' }} to='/signup'>here.</NavLink></Text>
          </Box>
        </Box>
      }
    </Main>
  )
}
export default Login
