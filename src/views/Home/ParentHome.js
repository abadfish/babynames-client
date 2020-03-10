import React, { useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Main, Heading, Box, Button, Layer } from 'grommet'
import { Add } from 'grommet-icons'
import Names from '../Names'
import NameForm from '../Names/NameForm'
import { fetchBaby } from '../../state/Babies/actions'
import { createName } from '../../state/Names/actions'

const ParentHome = (props) => {
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
    <Main pad="medium" style={{ marginBottom: '2rem'}}>
      <Heading alignSelf='center' level='2' pad='small'>
        Hi { props.user.name }!
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
          icon={ <Add color='accent-3' /> }
          onClick={ () => setShowForm(true) }
        />
      </Box>
      {showForm && (
        <Layer
          onEsc={() => setShowForm(false)}
          onClickOutside={() => setShowForm(false)}
        >
          <Box pad='medium' background='dark-1'>
            <NameForm onSubmit={ handleAddName } />
            <Box>
              <Button
                label="close"
                primary
                color='accent-3'
                onClick={() => setShowForm(false)}
              />
            </Box>
          </Box>
        </Layer>
      )}
      <Names baby={ baby } user={ props.user }/>
    </Main>
  )
}

export default ParentHome
// border={{ color: 'accent-3', size: 'small' }}
// <Text>What to name { user.babies[0].nickname }?</Text>

// { props.user.babies.length > 1 ?
//
//
// }
// <Text onClick={ () => chooseBaby(props.user.babies[0]) }>What to name { props.user.babies[0].nickname }?</Text>
// for more than one baby
// const [ focusBaby, setFocusBaby ] = useState({})
// const chooseBaby = useCallback((b) => {
//   dispatch(fetchBaby(b.id))
// })
// vv also for more than one baby
// const listBabies = props.user.babies ?
//   props.user.babies.map(b => (
//     <Text>{ b.nickname }</Text>
//   ))
//   :
//   null
