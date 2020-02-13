import React from 'react'
import ParentHome from './ParentHome'
import RelativeHome from './RelativeHome'

const Home = (props) => {
  // console.log(props)

  return (
    <div className='home-styles'>
      { props.currentUser.role === 'expecting' ?
        <ParentHome user={ props.currentUser }/>
        :
        <RelativeHome user={ props.currentUser }/>
      }
    </div>
  )
}

export default Home
