import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Main, Box, Heading, Text, Button } from 'grommet'
import { Edit } from 'grommet-icons'
import moment from 'moment'

const Profile = (props) => {
  console.log(props.currentUser)
  const user = props.currentUser
  const baby = props.currentUser.babies[0]
  // const [editUser, setEditUser] = useState(false)
  // const [editEmail, setEditEmail] = useState(false)
  // const [editRelation, setEditRelation] = useState(false)
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch()
  // })

  return (
    <Main>
      <Heading
        alignSelf='center'
        color='accent-1'
        level={3}
      >What's good, {user.name}?
      </Heading>
      <Box

        alignSelf='center'
        pad="medium"
        round={true}
        background='brand'>
        <Heading level={3} color='accent-1'>Personal Info</Heading>
        <Box direction='row' className='profile'>

          <Box pad="medium" className='user'>
            <Text color='accent-3' margin={{'bottom': 'small'}}>username: </Text>
            <Text color='accent-3' margin={{'bottom': 'small'}}>email:</Text>
            <Text color='accent-3' margin={{'bottom': 'small'}}>role: </Text>
            <Text color='accent-3' margin={{'bottom': 'small'}}>relationship: </Text>
          </Box>
          <Box pad="medium" className='info'>
            <Text color='accent-3' margin={{'bottom': 'small'}}>{ user.username }</Text>
            <Text color='accent-3' margin={{'bottom': 'small'}}>{ user.email}</Text>
            <Text color='accent-3' margin={{'bottom': 'small'}}>{ user.role }</Text>
            <Text color='accent-3' margin={{'bottom': 'small'}}>{ user.relationship }</Text>
          </Box>
        </Box>
        <Heading level={3} color='accent-1'>Baby Info</Heading>
        <Box direction='row'>

          <Box pad="medium" className='user'>
            <Text margin={{'bottom': 'small'}}>nickname: </Text>
            <Text margin={{'bottom': 'small'}}>invite code: </Text>
            <Text margin={{'bottom': 'small'}}>due date: </Text>
          </Box>
          <Box pad="medium" className='info'>
            <Text margin={{'bottom': 'small'}}>{ baby.nickname }</Text>
            <Text margin={{'bottom': 'small'}}>{ baby.invite_code }</Text>
            <Text margin={{'bottom': 'small'}}>{ moment(baby.due_date).format("MMM Do, YYYY") }</Text>
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
