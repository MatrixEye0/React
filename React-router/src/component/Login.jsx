import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../contex.jsx';

export const Login = () => {
  const {login}=useAuth();
  const navigate= useNavigate();
 const move =()=> {
  login();
  navigate("/dashbord")
 }


  const location = useLocation(); //it is a hook used to get information about the current URL/location. provide as object
console.log(location);
console.log(location.pathname)
console.log(location.hash)
console.log(location.search)
console.log(location.mask)
console.log(location.state)

  return (
    <>

    <button onClick={move}>Login</button>

    <p><strong>Pathname : </strong> {location.pathname}</p>
    <p><strong>Hash : </strong> {location.hash}</p>
    <p><strong>Search : </strong>{location.search}</p>
    <p><strong>Mask : </strong>{location.mask}</p>
    <p><strong>State : </strong>{location.state}</p>
    <p><strong>Key : </strong>{location.key}</p>
    </>
  )
}
