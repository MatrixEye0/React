import { memo, useDeferredValue, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [text, setText] = useState(0)
  const deffer=useDeferredValue(text) 
  // useDeferredValue is a React Hook used when you have a value that changes frequently, but you don't want an expensive part of the UI to update immediately.
  //seDeferredValue gives React permission to update a value later when the UI is busy.
  // 10,000 products -> Every time you type one character: -> User types "c" -> search changes -> 10,000 products re-render -> UI can become slow
  // With useDeferredValue: -> User types "c" -> search changes immediately ⚡ -> React keeps input responsive -> Product list can update later 
// use of defferdvalue ==>  Search results ,Large lists, Expensive UI rendering , Large data/table displays , Filtering/sorting large datasets

// useDeferredValue -> You already have a value and want to make using that value less urgent:
// useTransition ->You control the state update:

  function handel(e){
    const value=e.target.value;
    setText(value);
  }
  useEffect(()=>{
    console.log("deffered done",deffer)
  },[deffer])

  return (
    <>
      <input onInput={handel} placeholder="search"/>
      {[...new Array(5000)].map((_, i)=> { return <MemoizedSearchText key={i} text={deffer}/> })}
    </>
  );
}

 function SearchText({text}){
    let i=0;
    while(i<1000000){
      i++;
    }
    return <h2> Search : {text}</h2>
  }
const MemoizedSearchText=memo(SearchText);
export default App
