import React, { useState } from 'react'
import { Main, Heading, Header, Box, Text, Button } from 'grommet'
import NameTable from './NameTable'

const Names = (props) => {

  const names = props.baby.names
  const [view, setView] = useState("Names")

  const finalists = names ?
    names.filter(n => (
      n.status === 'finalist'
    )).map(n => (<Text>{ n.given_name }</Text>))
    :
    null

  const pending = names ?
    names.filter(n => (
      n.status === 'pending'
    )).map((n, i)=> (<Text key={ i }>{ n.given_name }</Text>))
    :
    null

  const sideList = ["Names", "Relatives", "Invitees"]
  const changeView = s => {
    setView(s)
  }
  const filteredNames = names ? names.filter(n => n.status !== 'pending') : []

  return (
    <Box elevation="large">
      <Box>
        <Box background='brand'>
          <Heading alignSelf='center' color='#fff' level='4'>What are we going to name this kid??</Heading>
        </Box>
        { names ?
          <NameTable names={ props.user.role === 'expecting' ? names : filteredNames } babyId={ props.baby.id } />
          :
          null
        }
      </Box>
    </Box>
  )
}

export default Names
