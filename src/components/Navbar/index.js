import React from 'react'
import { Header, Button, Box, Anchor } from 'grommet'
import '../../index.css'

const Navbar = (props) => {
  console.log(props)
  return (
    <Header background='brand' pad='small'>
      <Button className='nav-logo'>Anything But Bob</Button>
      {
        props.isAuthenticated ?
        <Box direction='row' gap='medium'>
          <Anchor label='Home' href='/' />
          <Anchor label='Profile' href='/profile' />
          <Anchor label='Logout' href='#' onClick={ props.logout } />
        </Box>
        :
        <Box direction='row' gap='medium'>
          <Anchor label='Login' href='/login' />
        </Box>
      }
      
    </Header>
  )
}

export default Navbar
