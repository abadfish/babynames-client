import React from 'react'
import { Header, Button, Box, Anchor, ResponsiveContext, Menu } from 'grommet'
import '../../index.css'
import { Down } from 'grommet-icons'

const Navbar = (props, context) => {
  console.log(props)
  return (
    <Header background='brand' pad='small'>
    <Button className='nav-logo'>Anything But Bob</Button>

      <ResponsiveContext.Consumer>
        { responsive =>
          responsive === 'small' ?
          <Menu
            items={[
              { icon: <Anchor label='Home' href='/' /> },
              { icon: <Anchor label='Profile' href='/profile' /> },
              { icon: <Anchor label='Logout' href='#' onClick={ props.logout } /> }
            ]}
          />
          :
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
      </ResponsiveContext.Consumer>
    </Header>
  )
}

export default Navbar
