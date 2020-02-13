import React, { useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Layer, Button, Box } from 'grommet'
import './table.css'
import Name from './Name'
import { fetchName, updateName } from '../../state/Names/actions'


const NameTable = (props) => {
  const names = props.names
  const dispatch = useDispatch()
  const columns = ['Name', 'Status', 'Rating', 'Votes', 'Notes']

  const updateBabyName = useCallback((babyName) => {
    dispatch(updateName(props.babyId, babyName))
  })

  return (
    <div className='table-container'>

      <div className='table-row'>
        { columns.map((c, i) => (
          <div id='heading' className='table-cell' key={ i }>{ c.toUpperCase() }</div>
        ))
        }

      </div>
      { names ?
        names.map((n, i) => (
          <Name name={ n } key={ n.id } updateBabyName={ updateBabyName } />
        ))
        :
        null
      }
    </div>
  )
}
export default NameTable
