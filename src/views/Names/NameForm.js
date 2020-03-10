import React, { useState } from 'react'
import { Form, Button, TextInput, Box } from 'grommet'

const NameForm = (props) => {
  const [ babyName, setName ] = useState({
    given_name: '',
    rating: 1,
    status: 'pending',
    votes: 1,
  })
  console.log(babyName)

  const handleOnChange = e => {
    const { name, value } = e.target
    setName({ ...babyName, [name]: value })
  }

  const handleSubmit = () => {
    if (babyName.given_name === '') {
      alert('Name field cannot be empty.')
    } else {
      props.onSubmit(babyName)
    }
  }


  return (
    <div>
      <Box align="center" >
        <Form>
          <Box pad="xsmall" margin={{ bottom: 'small' }}>
            <TextInput
              border='accent-3'
              placeholder="name"
              name='given_name'
              value={ babyName.given_name }
              onChange={ handleOnChange }
            />
          </Box>
          <Box align="center">
            <Button
              fill='horizontal'
              pad="medium"
              margin={{ bottom: 'small' }}
              type='submit'
              primary
              label='add'
              onClick={ handleSubmit }
            />
          </Box>
        </Form>
      </Box>
    </div>
  )

}

export default NameForm
