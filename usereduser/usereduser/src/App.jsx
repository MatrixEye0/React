import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Usereduser } from './component/usereduser'
import { Form } from './component/form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Usereduser/>
     <Form/>
    </>
  )
}

export default App
