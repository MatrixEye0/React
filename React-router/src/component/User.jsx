import React from 'react'
import { useParams } from 'react-router-dom'

export const User = () => {
    const pram = useParams() //useParams in React Router. It is used to get dynamic values from the URL.
  return (
    <div>I am user {pram.name}</div>
  )
}
