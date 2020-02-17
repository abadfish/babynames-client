import React, { useState, useEffect } from 'react'
import { Form, Button, TextInput, Box, Text, RadioButtonGroup } from 'grommet'

const SignupForm = (props) => {

  const [ baby, setBaby ] = useState({
    nickname: '',
    due_date: '',
    invite_code: ''
  })

  const [ user, setUser ] = useState({
    username: '',
    password: '',
    role: '',
    email: '',
    name: '',
    relationship: '',
    userBaby: {},
  })
console.log(user)
console.log(baby)
  // const [ babyForm, openBabyForm ] = useState(false)
  // const [ babyChooser, openBabyChooser ] = useState(false)

  const handleOnChange = e => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const handleSetRole = e => {
    setUser({ ...user, role: e.target.value })
  }

  const handleAddBaby = e => {
    setUser({
      ...user,
      userBaby: baby,
    })
  }

  const handleSetNickname = e => {
    setBaby({ ...baby, nickname: e.target.value })
  }
  const handleInvite = e => {
    setBaby({ ...baby, invite_code: e.target.value })
  }
  useEffect(() => {
    if (baby.invite_code !== '') {
      handleAddBaby()
    }
  },[baby.invite_code])

  const handleSetRelationship = e => {
    setUser({ ...user, relationship: e.target.value })
  }

  const handleSubmit = () => {
    console.log(user)
    props.onSubmit(user)
  }
// write a confirm passwords match function
  return (
    <div className='form-sizer'>
        <Form>
          <Box pad="xsmall" background="dark-1">
            <TextInput
              placeholder="name"
              name='name'
              value={ user.name }
              onChange={ handleOnChange }
            />
          </Box>
          <Box pad="xsmall" background="dark-1">
            <TextInput
              placeholder="email"
              name='email'
              value={ user.email }
              onChange={ handleOnChange }
            />
          </Box>
          <Box pad="xsmall" background="dark-1">
            <TextInput
              placeholder="username"
              name='username'
              value={ user.username }
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
          <Box alignSelf='center' background="dark-1">
            <Text size='medium' color='accent-3' margin='small' alignSelf='center'>Are you:
            <RadioButtonGroup
              margin='medium'
              name='role'
              options={['expecting', 'invited']}
              value={ user.role }
              onChange={ handleSetRole }
            />
            </Text>
          </Box>
          { user.role === 'expecting' ?
          <Box background="dark-1">
            <Text color='accent-3'>Add a baby:</Text>
            <TextInput
              placeholder="nickname"
              name='nickname'
              value={ baby.nickname }
              onChange={ handleSetNickname }
            />
            <Button pad="xsmall" primary label='Add Baby' onClick={ handleAddBaby } />
          </Box>
          :
          user.role === 'invited' ?
          <div>
            <Box pad="xsmall" background="dark-1">
              <Text color='accent-3'>Enter invite code:</Text>
              <TextInput
                placeholder="invite code"
                name='invite_code'
                value={ baby.invite_code }
                onChange={ handleInvite }
              />
            </Box>
            <Box pad="xsmall" background="dark-1">
              <TextInput
                placeholder="relationship"
                name='relationship'
                value={ user.relationship }
                onChange={ handleSetRelationship }
              />
            </Box>
          </div>
          :
          null
          }
          <Box pad="small" align="center" background="dark-1">
            <Button  pad="medium" type='submit' primary label='Submit' onClick={handleSubmit} />
          </Box>
        </Form>
    </div>

  )

}

export default SignupForm