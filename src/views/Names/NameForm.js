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
    props.onSubmit(babyName)
  }


  return (
    <div>
      <Box align="center" >
        <Form>
          <Box pad="xsmall"  >
            <TextInput
              placeholder="name"
              name='given_name'
              value={ babyName.given_name }
              onChange={ handleOnChange }
            />
          </Box>

          <Box pad="small" align="center">
            <Button  pad="medium" type='submit' primary label='Add' onClick={ handleSubmit } />
          </Box>
        </Form>
      </Box>
    </div>
  )

}

export default NameForm
