import React, { useState, useEffect } from 'react'
import { Form, Button, TextInput, Box, Text, RadioButtonGroup, Calendar } from 'grommet'

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
  const [ isBabyFormOpen, setIsBabyFormOpen ] = useState(false)
  // const [ babyChooser, openBabyChooser ] = useState(false)
  const [isUserComplete, setIsUserComplete] = useState(false)

  const handleOnChange = e => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  const handleSetRole = e => {
    setIsBabyFormOpen(true)
    setUser({ ...user, role: e.target.value })
  }

  const handleAddBaby = e => {
    setIsBabyFormOpen(false)
    setUser({
      ...user,
      userBaby: baby,
    })
    setIsUserComplete(true)
  }

  const handleSetNickname = e => {
    setBaby({ ...baby, nickname: e.target.value })
  }
  const handleSetDueDate = e => {
    setBaby({ ...baby, due_date: e })
  }
  const handleInvite = e => {
    setBaby({ ...baby, invite_code: e.target.value })
  }
  // useEffect(() => {
  //   if (baby.invite_code !== '') {
  //     handleAddBaby()
  //   }
  // },[baby.invite_code])

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
          <Box pad="xsmall" background="#282a2e">
            <TextInput
              placeholder="name"
              name='name'
              value={ user.name }
              onChange={ handleOnChange }
            />
          </Box>
          <Box pad="xsmall" background="#282a2e">
            <TextInput
              placeholder="email"
              name='email'
              value={ user.email }
              onChange={ handleOnChange }
            />
          </Box>
          <Box pad="xsmall" background="#282a2e">
            <TextInput
              placeholder="username"
              name='username'
              value={ user.username }
              onChange={ handleOnChange }
            />
          </Box>
          <Box pad="xsmall" background="#282a2e">
            <TextInput
              placeholder="password"
              name='password'
              type='password'
              value={ user.password }
              onChange={ handleOnChange }
            />
          </Box>
          <Box alignSelf='center' background="#282a2e">
            <Text size='medium' color='accent-3' margin='small' alignSelf='center' weight='bold'>Are you:
            <RadioButtonGroup
              margin='small'
              name='role'
              options={['expecting', 'invited']}
              value={ user.role }
              onChange={ handleSetRole }
            />
            </Text>
          </Box>
          { user.role === 'expecting' && isBabyFormOpen ?
          <Box background="#282a2e" style={{ textAlign: 'center'}}>
            <Text alignSelf='center' color='accent-3' weight='bold'>Add a baby:</Text>
            <TextInput
              style={{ margin: '15px'}}
              placeholder="nickname"
              name='nickname'
              value={ baby.nickname }
              onChange={ handleSetNickname }
            />
            <Text color='accent-3' weight='bold'>Due Date: </Text>
            <Calendar
              alignSelf='center'
              size="medium"
              date={(new Date()).toISOString()}
              onSelect={(date) => {handleSetDueDate(date)}}
            />
            <Button border='brand' margin='small' pad="xsmall" primary label='Add Baby' onClick={ handleAddBaby } />
          </Box>
          :
          user.role === 'invited' && isBabyFormOpen ?
          <div>
            <Box pad="xsmall" background="#282a2e">
              <Text color='accent-3'>Enter invite code:</Text>
              <TextInput
                placeholder="invite code"
                name='invite_code'
                value={ baby.invite_code }
                onChange={ handleInvite }
              />
            </Box>
            <Box pad="xsmall" background="#282a2e">
              <TextInput
                placeholder="relationship"
                name='relationship'
                value={ user.relationship }
                onChange={ handleSetRelationship }
              />
            </Box>
            <Button pad="xsmall" primary label='Add Baby' onClick={ handleAddBaby } />
          </div>
          :
          user.userBaby !== {} && user.role !== '' && !isBabyFormOpen ?
          <Text alignSelf='center' color='accent-3' weight='bold'>Baby added!</Text>
          :
          null
          }
          <Box pad="small" align="center" background="#282a2e">
            { isUserComplete ?
              <Button pad="medium" type='submit' primary color='brand' label='Submit' onClick={handleSubmit} />
              :
              <Button  disabled={true} pad="medium" type='submit' primary color='brand' label='Submit' onClick={handleSubmit} />
            }

          </Box>
        </Form>
    </div>

  )

}

export default SignupForm
