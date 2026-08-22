import { useId, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
 const id = useId(); // it give unique id but not change on rendering . in math random function they change automatic in render thats why we use useId
// connect label and input
  return (
    <>
    <div>
      <label htmlFor={id}>Name:</label>
      <input id={id} type="text" />
      <br></br>
      <h1>{id}</h1>
    </div>
    </>
  )
}

export default App
