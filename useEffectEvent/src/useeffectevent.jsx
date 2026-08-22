import React, { useEffect, useEffectEvent, useState } from 'react'

//useEffectEvent is used when you have an Effect (useEffect) that should run based on one thing, but inside that Effect you need the latest value of another thing.
//Problem: formData changes, but the Effect has [], so the Effect doesn't re-run. This can cause the callback to use an old/stale value.
//But now every time formData changes, the interval is destroyed and created again.

// Using a timer with latest values . Using an event listener with latest values. Avoid reconnecting to external systems. Using Effect Events in custom Hooks
// it give latest value to effect without re-rendering
export const EffectEventHook = () => {
 const [formData,setForm]=useState({name:"",email:""})

 const setData = useEffectEvent(()=>{
        console.log(formData)
 })

 useEffect(()=>{
     const id =  setInterval(()=>{
        setData();
      },20000)

       return () => clearInterval(id)
 },[])
// yaha ek bar effect chaega because  []ye pass kara hai no depedence but ek bar chalne se latest value nhi dega so depedence pass karni hogi . par depedence se ye re render hoga unessecary time use hoga . useEffectEvent overcome this problem
  return (
    <div>
        <input type="text" placeholder='Name' value={formData.name} onChange={(e)=>setForm({...formData, name: e.target.value})}/>
        <br></br>
        <input type="text" placeholder="Email" value={formData.email} onChange={(e)=>setForm({...formData, email: e.target.value})}/>
    </div>
  )
}
