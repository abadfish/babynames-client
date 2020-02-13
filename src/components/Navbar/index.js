import React from 'react'
import { Header, Button, Box, Anchor } from 'grommet'

const Navbar = (props) => {

  return (
    <Header background='brand' pad='small'>
      <Button/>
      <Box direction='row' gap='medium'>
        <Anchor label='Home' href='#' />
        <Anchor label='Profile' href='#' />
        <Anchor label='Logout' href='#' />
      </Box>
    </Header>
  )
}

export default Navbar
