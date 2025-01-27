import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const {user} = useContext(UserContext)

    if(!user) return <div>Please login first.</div>
  return (
    <div>
        <h3>Welcome {user.username}</h3>
        <p>Your password is {user.password}</p>
    </div>
  )
}

export default Profile