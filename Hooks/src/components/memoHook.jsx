import { useMemo, useState } from "react"

const arr = Array(1000000).fill(0).map((_,i)=>{
    return{
        index:i,
        isMagical:  i===500000
    }
})
function Memo(){
    const [count , setcount]=useState(0)
    const [number,setNumber]=useState(arr)

    const magical = useMemo(()=>{ // if i not use memo here they compute  this large calculation every time when it render so we use memo it calculate when it happen or dependence hapenn.
        number.find(item=>item.isMagical===true,[])
    },)
    return(
          <div>
            <h1>Count: {count}</h1>
            <button className="bg-amber-200 " onClick={() => setcount(count + 1)}> Count </button>
            <h2>Magical Number:</h2>
            <p>  Index: {magical?.index} </p>
            <p> Is Magical: {magical?.isMagical ? "Yes" : "No"} </p>
        </div>
    );
}
export default Memo;