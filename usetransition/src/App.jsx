import { useState, useTransition } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
   const [isPending, startTransition] = useTransition(); //useTransition is a React Hook used to mark a state update as non-urgent so React can keep the UI responsive.
   // they disable buttion until handel function happen . handel complete button !disabled.
   // Perform non-blocking updates with Actions
  //   Exposing action prop from components
  // Displaying a pending visual state
//  Preventing unwanted loading indicators
// Building a Suspense-enabled router
// Displaying an error to users with an error boundary


  const handel=()=>{
    startTransition(async()=>{
      await new Promise((resolve)=> setTimeout(resolve,2000));
      console.log("Transition Complete")
    })
  }
  return (
    <>
      <h2>Use Transaction</h2>
      {isPending && <p>Loading.......</p>}
      <button disabled={isPending} onClick={handel}>Click Me</button>
    </>
  )
}

export default App
