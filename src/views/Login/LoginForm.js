import React, { useState } from 'react'
import { Form, Button, TextInput, Box } from 'grommet'

const LoginForm = (props) => {

  const [ user, setUser ] = useState({
    userName: '',
    password: '',
  })

  const handleOnChange = e => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }
  const handleSubmit = () => {
    props.onSubmit(user)
  }
  return (
    <div>
      <Box align="center" >
        <Form>
          <Box pad="xsmall" background="dark-1" >
            <TextInput
              placeholder="username"
              name='userName'
              value={ user.userName }
              onChange={ handleOnChange }
            />
          </Box>
          <Box pad="xsmall" background="dark-1">
            <TextInput
              placeholder="password"
              name='password'
              type='password'
              value={ user.password }
              onChange={ handleOnChange }
            />
          </Box>
          <Box pad="small" align="center">
            <Button  pad="medium" type='submit' primary label='Submit' onClick={handleSubmit} />
          </Box>
        </Form>
      </Box>
    </div>
  )
}

export default LoginForm
