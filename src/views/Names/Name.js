import React, { useState, useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Main, Heading, Header, Box, Text, Button, Select, Layer } from 'grommet'
import { Like, Dislike, Edit } from 'grommet-icons'
import './table.css'
import { updateNameRating, createNameRating } from '../../state/Auth/actions'
import { exists, containsDownvote, containsUpvote } from './helpers'
import NoteForm from './NoteForm'


const Name = (props) => {
  const n = props.name

  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.auth.currentUser)
  const [user, setUser] = useState(currentUser)
  const [name, setName] = useState(n)
  const [nameRecord, setNameRecord] = useState({
    name,
    vote: ''
  })
  const [showNoteForm, setShowNoteForm] = useState(false)

  const openNoteForm = () => {
    setShowNoteForm(true)
  }
  const addNote = useCallback(() => {
    props.updateBabyName(name)
  })
  const createRating = useCallback(() => {
    dispatch(createNameRating(user, nameRecord))
  })
  const updateRating = useCallback(() => {
    dispatch(updateNameRating(user, nameRecord))
  })

  const onChangeStatus = e => {
    setName({...name, status: e.target.value })
  }
  useEffect(() => {
    props.updateBabyName(name)
  }, [name.status])

  const handleVoting = (vote) => {
    rateName(vote)
  }
  useEffect(() => {
    if (nameRecord.vote !== '') {
      reconcileUser(nameRecord.vote)
    }
    setNameRecord({ ...nameRecord, vote: '' })
  }, [nameRecord.vote])

  const rateName = (vote) => {
    setNameRecord({ ...nameRecord, vote: vote })
  }

  const reconcileUser = vote => {
    if (exists(user.user_name_votes, n.id) === true && vote === 'downvote') {
      if (containsDownvote(user.user_name_votes, n.id)) {
        alert(`Already ${vote}d`)
      } else if (containsUpvote(user.user_name_votes, n.id)) {
        updateRating()
        rate(vote, 0)
      }
    } else if (exists(user.user_name_votes, n.id) === true && vote === 'upvote') {
      if (containsUpvote(user.user_name_votes, n.id)) {
        alert(`Already ${vote}d`)
      } else if (containsDownvote(user.user_name_votes, n.id)) {
        updateRating()
        rate(vote, 0)
      }
    } else if (exists(user.user_name_votes, n.id) === false) {
      createRating()
      rate(vote, 1)
    } else {
      console.log("none of the conditions are true")
    }
  }

  const rate = (vote, increment) => {
    vote === 'upvote' ?
      setName({
        ...name,
        rating: name.rating += 1,
        votes: name.votes += increment
      })
      :
      setName({
        ...name,
        rating: name.rating -= 1,
        votes: name.votes += increment,
      })
  }

  return (
    <div className='table-row' >
    {showNoteForm && (
      <Layer
        onEsc={() => setShowNoteForm(false)}
        onClickOutside={() => setShowNoteForm(false)}
      >
        <Box pad='medium'>
          <NoteForm name={ name } onSubmit={ addNote } setName={ setName }/>
          <Button
            color='neutral-2'
            label="close"
            onClick={() => setShowNoteForm(false)}
          />
        </Box>
      </Layer>
    )}
      <div className='table-cell name'>{ n.given_name }</div>

      {currentUser.role === 'expecting' ?
        <div className='table-cell'>
          <select
            className='selector'
            name="status"
            placeholder={ n.status }
            value={ nameRecord.status !== '' ?  nameRecord.status : n.status }
            onChange={ onChangeStatus }
          >
            <option value={n.status}>{n.status}</option>
            <option value='pending'>pending</option>
            <option value='contender'>contender</option>
            <option value='finalist'>finalist</option>
            <option value='rejected'>rejected</option>
          </select>
        </div>
        :
        <div className='table-cell'>{ n.status }</div>
      }

      <div className='table-cell'>
        <Button
          className='vote-button'
          onClick={ () => handleVoting('upvote') } icon={ <Like color='accent-4' size='medium'/> } />
          { n.rating }
        <Button
          className='vote-button' id='down' onClick={ () => handleVoting('downvote') } icon={ <Dislike color='status-critical' size='medium'/> } />
      </div>
      <div className='table-cell'>{ n.votes }</div>

      { currentUser.role === 'expecting' ?
        <div
          className='table-cell notes'
          onClick={ openNoteForm }>
          {
            n.notes ? n.notes :
            <Button className='note-button' icon={ <Edit color='accent-3' size='medium'/> }>Add a note
            </Button>
          }
        </div>
        :
        <div className='table-cell notes'>{ n.notes }</div>
      }
    </div>
  )
}

export default Name



// const fetchNameRecord = useCallback((n) => {
//   setNameRecord(n)
//   dispatch(fetchName(props.babyId, n.id))
// })
