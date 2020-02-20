import React from 'react'
import { Heading, Box, Text } from 'grommet'
import NameTable from './NameTable'

const Names = (props) => {

  const names = props.baby.names

  const filteredNames = names ? names.filter(n => n.status !== 'pending' || n.status !== 'rejected') : []

  return (
    <Box elevation="large">
      <Box>
        <Box background='brand' pad='small'>
          <Text
            size='large'
            alignSelf='center'
            color='#fff'
            weight='bold'
          >What are we going to name this kid?
          </Text>
        </Box>
        { names && names.length > 0 ?
          <NameTable
            names={ props.user.role === 'expecting' ? names : filteredNames }
            babyId={ props.baby.id }
          />
          :
          <Text
            alignSelf='center'
            color='accent-3'
            weight='bold'
            size='large'
            margin='medium'
          >Start suggesting!
          </Text>
        }
      </Box>
    </Box>
  )
}

export default Names
