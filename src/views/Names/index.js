import React, { useEffect, useState } from 'react'
import { Heading, Box, Text } from 'grommet'
import NameTable from './NameTable'

const Names = (props) => {

  const names = props.baby.names ?
    props.baby.names.sort(function(a, b) {
      return b.rating - a.rating
    })
    : []
  // const filteredNames = names ? names.filter(n => n.status !== 'pending' && n.status !== 'rejected') : []
  const filteredNames = names ? names.filter(n => n.status !==  'rejected') : []

  const [daysLeft, setDaysLeft] = useState(0)

  useEffect(() => {
    if (props.baby.due_date !== undefined) {
      setDaysLeft((new Date(props.baby.due_date).getTime() - new Date().getTime()) / (1000 * 3600 * 24))
    }
  }, [props.baby.due_date])
  return (
    <Box elevation="large">
      <Box>
        <Box background='brand' pad='medium'>
          <Text
            size='medium'
            alignSelf='center'
            color='#fff'
            weight='bold'
          >What are we going to name this kid?
          </Text>
          <Text
            size='medium'
            alignSelf='center'
            color='accent-3'
            weight='bold'
          >
          { parseInt((daysLeft))} Days Left to decide...
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
