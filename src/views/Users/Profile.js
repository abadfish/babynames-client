import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Main, Box, Heading, Text, Button } from 'grommet'
import { Edit } from 'grommet-icons'
import moment from 'moment'

const Profile = (props) => {
  console.log(props.currentUser)
  const user = props.currentUser
  const baby = props.currentUser.babies[0]
  debugger
  // const [editUser, setEditUser] = useState(false)
  // const [editEmail, setEditEmail] = useState(false)
  // const [editRelation, setEditRelation] = useState(false)
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch()
  // })
  const voters = baby ? baby.users.map((u, i) => (
    <div key={i}>
      <Text>{u.name}</Text><br />
    </div>
  )) : null

  return (
    <Main margin={{ 'bottom': 'medium'}}>
      <Heading
        alignSelf='center'
        color='accent-1'
        level={3}
      >What's good, {user.name}?
      </Heading>
      <Box
        alignSelf='center'
        pad={{"horizontal": "medium"}}
        round={true}
        background='brand'
        width="90%">
        <Box className='profile' pad='medium'>
          <Heading level={3} color='accent-1'>Personal Info</Heading>
          <Box direction='row' >
            <Text className='user' color='accent-3' margin={{'bottom': 'small'}}>username: </Text>
            <Text className='info' color='accent-3' margin={{'bottom': 'small'}}>{ user.username }</Text>
          </Box>
          <Box direction='row' >
            <Text className='user' color='accent-3' margin={{'bottom': 'small'}}>email:</Text>
            <Text className='info' color='accent-3' margin={{'bottom': 'small'}}>{ user.email}</Text>
          </Box>
          <Box direction='row' >
            <Text className='user' color='accent-3' margin={{'bottom': 'small'}}>role: </Text>
            <Text className='info' color='accent-3' margin={{'bottom': 'small'}}>{ user.role }</Text>
          </Box>
          <Box direction='row' >
            <Text className='user' color='accent-3' margin={{'bottom': 'small'}}>relationship: </Text>
            <Text className='info' color='accent-3' margin={{'bottom': 'small'}}>{ user.relationship }</Text>
          </Box>
        </Box>

        <Box pad='medium'>
          <Heading level={3} color='accent-1'>Baby Info</Heading>
          <Box direction='row' >
            <Text className='user' color='accent-3' margin={{'bottom': 'small'}}>nickname: </Text>
            <Text className='info' color='accent-3' margin={{'bottom': 'small'}}>{ baby.nickname }</Text>
          </Box>
          <Box direction='row' >
            <Text className='user' color='accent-3' margin={{'bottom': 'small'}}>invite code: </Text>
            <Text className='info' color='accent-3' margin={{'bottom': 'small'}}>{ baby.invite_code }</Text>
          </Box>
          <Box direction='row' >
            <Text className='user' color='accent-3' margin={{'bottom': 'small'}}>due date: </Text>
            <Text className='info' color='accent-3' margin={{'bottom': 'small'}}>{ moment(baby.due_date).format("MMM Do, YYYY") }</Text>
          </Box>
          <Box direction='row' >
            <Text className='user' color='accent-3' margin={{'bottom': 'small'}}>invited voters: </Text>
            <Text className='info' color='accent-3' margin={{'bottom': 'small'}}>{voters}</Text>
          </Box>
        </Box>
      </Box>
    </Main>
  )
}

export default Profile

// Goes at line 46
// <Box pad="medium" className='edit'>
//   <Button icon={ <Edit color='accent-3' size='small'/> } />
//   <Button icon={ <Edit color='accent-3' size='small'/> } />
//   <Button icon={ <Edit color='accent-3' size='small'/> } />
//   <Button icon={ <Edit color='accent-3' size='small'/> } />
// </Box>
