import React, { useReducer } from 'react'

export const Form = () => {
 function reducer(state,action){
     return{
        ...state,[action.name]:action.value
     }
 }

  const[formData,dispatch]=useReducer(reducer,{
    user:"",
    pass:""
  })

  function handel(e){
     dispatch({
        name:e.target.name,
        value: e.target.value
     })
  }
  return(
    <form>
        <input type="text" name="user" value={formData.user} placeholder='Enter name' onChange={handel}/> 
        <input type="text" name="pass" value={formData.pass} placeholder='Password' onChange={handel}/> 
        <p> {formData.user} - {formData.pass}</p>
    </form>
  );
}
