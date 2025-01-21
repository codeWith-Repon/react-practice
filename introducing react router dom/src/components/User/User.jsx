import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
   const {id} = useParams()
  return (
    <div className='text-center bg-green-200 p-4 text-3xl font-semibold'>User: {id}</div>
  )
}

export default User