import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Box from './component/contain';
import Input from './component/input';
import { useState } from 'react';

function App(){

//  let textShow = useState("Hello Universe");// useState array has two element  inside ()we pass initial value. initial value is arr[0]
//  let textStateVal = textShow[0];
//  let setTextState = textShow[1];  // they continue change value.

//  console.log(`${textStateVal}`)
//  console.log(setTextState);

// easy way to write useState.----------

//let [textStateVal,setTextState]=useState("Hello Universe")

let [textStateVal,setTextState]=useState(["MERN Stack + NextJS + Redis + API's + Typescript","Java + Spring Boot + Kafka","Data Structure & Algorithms","C/C++ , Rust + Go","Python + AI/ML","DBMS + OS + Computer Network + System Design","LInux + Git & Github + AWS + CI/CD + Docker + Kubernites"])
const addItem = (value) => {
    if(value.trim() === "") return;
    let addstate = [...textStateVal, value];
    setTextState(addstate);
}

  return (
    <>
       <Box></Box>
       <Input addItem={addItem}></Input>
       <ul className="list-group">
          {textStateVal.map((item,index)=>( <li className="list-group-item" key={index}> {item} </li>
          ))}
       </ul>
    </>
  );
}

export default App;