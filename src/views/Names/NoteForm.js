import React from 'react'
import { Form, Button, TextArea, Box, Heading, Text } from 'grommet'

const NoteForm = (props) => {

  const handleOnChange = e => {
    props.setName({ ...props.name, notes: e.target.value })
  }

  const handleSubmit = () => {
    props.onSubmit()
  }

  return (
    <div>
      <Box align="center" >
        <Form>
          <Box pad="xsmall"  >
            <Heading alignSelf='center' level='4'>Add Note to <Text className='name note-name'>{ props.name.given_name }</Text></Heading>
            <TextArea
              placeholder="notes"
              name='notes'
              value={ props.name.notes }
              onChange={ handleOnChange }
            />
          </Box>

          <Box align="center">
            <Button  style={{ width: '100%', marginBottom: '5px' }} pad="medium" type='submit' color='neutral-2' primary label='Add' onClick={ handleSubmit } />
          </Box>
        </Form>
      </Box>
    </div>
  )
}

export default NoteForm
