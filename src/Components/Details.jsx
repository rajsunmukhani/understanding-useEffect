import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Details = () => {
    const {id} = useParams();
  return (
    <div>
        <h1>Details</h1>
        <h2 className='font-extrabold text-blue-600'>{id}</h2>
        <Link to='/users' className='text-red-500'>Back</Link>
    </div>
  )
}

export default Details