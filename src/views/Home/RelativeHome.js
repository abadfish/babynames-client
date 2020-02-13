import React, { useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Main, Heading, Header, Box, Text, Button, Layer } from 'grommet'
import { Home, Add } from 'grommet-icons'
import Names from '../Names'
import NameForm from '../Names/NameForm'
import { fetchBaby } from '../../state/Babies/actions'
import { createName } from '../../state/Names/actions'


const RelativeHome = (props) => {
  const user = props.user
  const dispatch = useDispatch()
  const baby = useSelector(state => state.babies.baby || {} )
  const [ showForm, setShowForm ] = useState(false)

  useEffect(() => {
    dispatch(fetchBaby(props.user.babies[0].id))
  }, [])

  const handleAddName = useCallback((babyName) => {
    dispatch(createName(babyName, baby.id))
    setShowForm(false)
  })

  return (
    <Main pad="medium">
      <Heading alignSelf='center' level='2'>
        Hi { user.name }!
      </Heading>
      <Box
        alignSelf='center'
        direction="row"
        gap="medium"
        pad='medium'
      >

        <Button
          style={{ color: '#f3f3f3'}}
          label='Add Name'
          icon={ <Add /> }
          onClick={ () => setShowForm(true) }>
        </Button>
      </Box>
      {showForm && (
        <Layer
          onEsc={ () => setShowForm(false) }
          onClickOutside={ () => setShowForm(false) }
        >
          <Box pad='medium'>
            <NameForm onSubmit={ handleAddName } />
            <Button
              label="close"
              onClick={ () => setShowForm(false) }
            />
          </Box>
        </Layer>
      )}
      <Names baby={ baby } user={ user }/>
    </Main>
  )
}

export default RelativeHome
