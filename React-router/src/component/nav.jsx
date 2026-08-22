import React from 'react'
import { NavLink } from 'react-router-dom'
import {Search} from './search.jsx'

export const Nav = () => {
// replace a with link in list and to in place of href. they convert in ancor tag in runtime
//In React Router, both Link and NavLink are used for navigation without reloading the entire page.
//Link is used when you simply want to move to another route.
//NavLink does the same navigation as Link, but it also knows whether the link is currently active.
  return (
    <div>
        <nav>
          <NavLink className={(e)=>{return e.isActive?"Red":""}} to="/home"><li>Home</li></NavLink>
          <NavLink className={(e)=>{return e.isActive?"Red":""}}  to="/about"><li>About</li></NavLink>
          <NavLink  className={(e)=>{return e.isActive?"Red":""}} to="/login"><li>Login</li></NavLink>
        </nav>
        <Search/>
    </div>
  )
}
