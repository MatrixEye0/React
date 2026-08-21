import React from 'react'
import { useContext } from 'react'
import { counterContex } from '../contex/contex'

export const Component = () => {// if i want props here so we need drill until component not reach. so this problem overcome with help of useContext
 const counter = useContext(counterContex)// useContext contex se data leta hai.
    return (
    <div>{counter}</div>
  )
}
