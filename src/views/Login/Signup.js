import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Main, Heading, Box, Text } from 'grommet'
import Loader from 'react-loader-spinner'
import { signup } from '../../state/Auth/actions';
import SignupForm from './SignupForm'

const Signup = () => {

  const dispatch = useDispatch()
  const makingRequestToApi = useSelector(state => state.appTransactions.makingRequestToAPI)

  const handleSignup = useCallback((user) => {
    dispatch(signup(user))
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
        <Box>
          <Box alignSelf='center'>
            <Text size='small' color='brand' margin='small'>Already have an account?
            Login <NavLink style={{ color: '#6FFFB0' }} to='/login'>here.</NavLink></Text>
          </Box>
          <SignupForm onSubmit={ handleSignup } />
        </Box>
      }
    </Main>
  )

}

export default Signup
