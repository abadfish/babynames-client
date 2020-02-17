import React, { useState, useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Box, Button, Layer } from 'grommet'
import { Like, Dislike, Edit } from 'grommet-icons'
import './table.css'
import { updateNameRating, createNameRating } from '../../state/Auth/actions'
import Helpers from './helpers'
import NoteForm from './NoteForm'

// this component makes changes to the rating and votes in state and makes an api call that modifies the babiesName and the currentUser's user_name_votes. The API call returns the currentUser only, not the name record (for now; this may change).

const Name = (props) => {
  const n = props.name

  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.auth.currentUser)
  const userVotes = currentUser.user_name_votes
  const [name, setName] = useState(n)
  const [nameRecord, setNameRecord] = useState({
    name,
    vote: ''
  })
  // console.log(currentUser)

  const [showNoteForm, setShowNoteForm] = useState(false)

  // vv this is for showing alert dialog
  const [showVoteChange, setShowVoteChange] = useState(false)

  const questionVoteChange = () => {
    alert(`Are you sure you want to change your vote?`)
  }

  // API CALLS
  const addNote = useCallback(() => {
    props.updateBabyName(name)
  })
  const createRating = useCallback(() => {
    dispatch(createNameRating(currentUser, nameRecord))
  })
  const updateRating = useCallback(() => {
    dispatch(updateNameRating(currentUser, nameRecord))
  })
  // END API CALLS

  const handleUpvote = () => {
    setNameRecord({ ...nameRecord, vote: 'upvote' })
  }
  const handleDownvote = () => {
    setNameRecord({ ...nameRecord, vote: 'downvote' })
  }

  useEffect(() => {
    if (nameRecord.vote !== '') {
      reconcileUser(nameRecord.vote, nameRecord.name.id)
    }
    setNameRecord({ ...nameRecord, vote: '' })
  }, [nameRecord.vote])


  const reconcileUser = (vote, nId) => {
    if (Helpers.exists(userVotes, nId) === true && vote === 'downvote') {
      if (Helpers.containsDownvote(userVotes, nId) === true) {
        alert(`Already ${vote}d`)
      } else if (Helpers.containsUpvote(userVotes, nId)) {
        questionVoteChange()
        rate(vote, 0)
        updateRating()
      }
    } else if (Helpers.exists(userVotes, nId) === true && vote === 'upvote') {
      if (Helpers.containsUpvote(userVotes, nId) === true) {
        alert(`Already ${vote}d`)
      } else if (Helpers.containsDownvote(userVotes, nId)) {
        questionVoteChange()
        rate(vote, 0)
        updateRating()
      }
    } else if (Helpers.exists(userVotes, nId) === false) {
      rate(vote, 1)
      createRating()
    } else {
      console.log("none of the conditions are true")
    }
  }

  const rate = (vote, increment) => {
    let change
    increment === 1 ? change = 1 : change = 2
    vote === 'upvote' ?
      setName({
        ...name,
        rating: name.rating += change,
        votes: name.votes += increment
      })
      :
      setName({
        ...name,
        rating: name.rating -= change,
        votes: name.votes += increment,
      })
  }

// PARENT-ONLY FUNCTIONS
  const openNoteForm = () => {
    setShowNoteForm(true)
  }
  const onChangeStatus = e => {
    setName({...name, status: e.target.value })
  }
  useEffect(() => {
    props.updateBabyName(name)
  }, [name.status])
// END PARENT-ONLY FUNCTIONS


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
            <option value='rejected'>winner</option>
          </select>
        </div>
        :
        <div className='table-cell'>{ n.status }</div>
      }

      <div className='table-cell'>
        <Button
          className='vote-button'
          onClick={ handleUpvote } icon={ <Like color='accent-4' size='medium'/> } />
          { n.rating }
        <Button
          className='vote-button' id='down' onClick={ handleDownvote } icon={ <Dislike color='status-critical' size='medium'/> } />
      </div>
      <div className='table-cell'>{ n.votes }</div>

      { currentUser.role === 'expecting' ?
        <div
          className='table-cell notes'
          onClick={ openNoteForm }>
          {
            n.notes ? n.notes :
            <Button className='note-button' icon={ <Edit color='accent-3' size='medium'/> } />
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
