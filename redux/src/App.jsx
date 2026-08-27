import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './features/counter/counterslice'

function App() {
  const count = useSelector((state)=> state.counter.value) // useSelector Redux Store se data read karna.
  const dispatch = useDispatch() // help of useDispatch we call function from slice . Action ko Redux Store tak bhejna.

  function handelIncrementClick(){
       dispatch(increment());
  }
  function handelDecrementClick(){
    dispatch(decrement());
  }

  return (
    <>
       <button onClick={handelIncrementClick}>+</button>
         <p>Count : {count} </p>
        <button onClick={handelDecrementClick}>-</button>
    </>
  )
}

export default App

// slice export to -> store -> main.jsx -> app.jsx
