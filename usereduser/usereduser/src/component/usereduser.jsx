import React, { useReducer } from 'react'

export const Usereduser = () => {
// reduser use in where multiple function happen other wise they work similar as useStte
    function reduser(state,action){ // same name of function which declare in usereduser. action define which action will be done. 
       switch (action.type){ // jo action.(yaha jo likhoge wahi dispatch me likhna hoga jese type:"incress")
        case "incress":return{count:state.count+1}
        case "decress":return{ count: state.count > 0 ? state.count - 1 : 0 }
        case "reset":return{count:0}
        default :return state;
       }
    }

    const[state,dispatch]=useReducer(reduser,{count:0})// here we give function name and initial argument (which is array or obj only)
    // dispatch pass which function action will be execute in function  like we pass incress so incress case run.
  return (
    <>
    <h1> Count : {state.count}</h1>
      <button onClick={()=>dispatch({type:"incress"})}>Incress +</button>
      <button onClick={()=>dispatch({type:"decress"})}>Decress -</button>
      <button onClick={()=>dispatch({type:"reset"})}>reset</button>
    </>
  )
}
