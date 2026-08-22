import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

export const Test = () => {
    useEffect(()=>{
        console.log("hello useEffect")
        //  setheight(box.current.clientHeight)
        // const el = box.current
        // const w =el.offsetWidth;
        // el.style.transform= `translateX(${w}px)`
    },[])

    const box =useRef(null)
    const chat=useRef(null)
    const[height,setheight]=useState(0)

     useLayoutEffect(()=>{
        console.log("hello useLayoutEffect") // run before rendering html. use for measure dom effect , tackle flickering animation page load hone se phele chala do. when you want in chat page load and you se last chat first.
        setheight(box.current.clientHeight)
        const el = box.current
        const w =el.offsetWidth;
        el.style.transform= `translateX(${w}px)` // animate before rendering
        chat.current.scrollTop=chat.current.scrollHeight; // now they automtic show last chat first before rendering
    },[])

  return (
    <div>
        <div ref={box} style={{width:"100vw", padding:"50px", background:"lightblue", transition:"10s"}}>Layout check current html dom before rendering</div>
        <p>Height : {height}</p>
        <div ref={chat}  style={{height:"200px",border:"1px solid #ccf" ,overflowY:"scroll" , padding:"10px", fontFamily:"cursive"}}>
            <p>Hello</p>
            <p>Hi</p>
            <p>rom rom</p>
            <p> jndj</p>
            <p>Sab</p>
            <p>badiya</p>
            <p>Hello</p>
            <p>Hi</p>
            <p>rom rom</p>
            <p> jndj</p>
            <p>Sab</p>
            <p>badiya</p>
            <p>Hello</p>
            <p>Hi</p>
            <p>rom rom</p>
            <p> jndj</p>
            <p>Sab</p>
            <p>badiya</p>
            <p>Hello</p>
            <p>Hi</p>
            <p>rom rom</p>
            <p> jndj</p>
            <p>Sab</p>
            <p>badiya</p>
            <p>Ok bye!!  love you baby 😘😘❤️💏</p>
        </div>
    </div>
  )
}
