import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


const Profile = (props) => {
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch()
  // })
  return (
    <div>{props.currentUser.name}</div>
  )
}

export default Profile
