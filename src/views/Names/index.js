import React from 'react'
import { Heading, Box } from 'grommet'
import NameTable from './NameTable'

const Names = (props) => {

  const names = props.baby.names

  const filteredNames = names ? names.filter(n => n.status !== 'pending' || n.status !== 'rejected') : []

  return (
    <Box elevation="large">
      <Box>
        <Box background='brand'>
          <Heading
            alignSelf='center'
            color='#fff'
            level='4'>
              What are we going to name this kid??
          </Heading>
        </Box>
        { names ?
          <NameTable
            names={ props.user.role === 'expecting' ? names : filteredNames }
            babyId={ props.baby.id }
          />
          :
          null
        }
      </Box>
    </Box>
  )
}

export default Names
