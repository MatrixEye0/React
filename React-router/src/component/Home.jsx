import React from 'react'
import {useNavigate} from 'react-router-dom'

export const Home = () => {
  const navigate = useNavigate();// used when you want to navigate from one page/component to another using JavaScript.useful when navigation should happen because of some logic/event.Good for login, logout, submit, conditions
  // by help of link use navigate by just click but in useNavigate when your JavaScript logic should decide when to navigate. like password correct automatic navigate to user page etc.
  const goToAbout = ()=>{
    navigate("/about")// wahi path dalna jo phele data hai about page ka
  }
  return (
   <>
    <div>Home</div>
    <br></br>
    <button onClick={goToAbout}>About</button>
   </>
  );
}
