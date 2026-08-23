import { useOptimistic, useState } from "react";

export default function Use(){
    const[task,setTask] = useState([]);

    // ueOptimistic => jab data api se ata hai to time lagta hai and tabak khuch ui update nhi hota jo userr experiance khrab karta hai
    // is hooks ki help se data jitni der me aye ye phele hi ui update kardeta hai taki user expriance khrab na ho.
    const [fastTask, setFastTask] = useOptimistic(
     task,
    (previous, newTask) => [...previous, newTask]  );
     // parameter in hook const[a,seta]=useOptimistic(value, reducer?)
    //  value: The value returned when there are no pending Actions.
   //   optional reducer(currentState, action): The reducer function that specifies how the optimistic state gets updated. It must be pure, should take the current state and reducer action arguments, and should return the next optimistic state.
  // useOptimistic returns an array with exactly two values:
  // use when we want to show like follower in a sec when we click .

    async function add(formData){
      const newTask={
        id: Date.now(),
        title:formData.get("text"),}
      setFastTask(newTask);
      await new Promise((res)=>setTimeout(res,3000))
      const  response = await fetch("https://jsonplaceholder.typicode.com/posts",{
        method:"POST",
        body:JSON.stringify(newTask),
        headers: {
            "Content-Type": "application/json"
        }
      });
      const data = await response.json();
      setTask((previous)=>[...previous,{...data,title:newTask.title}]);
    }

    return(
        <>
        <form action={add}>
            <input name="text" type="text" placeholder="Enter"/>
            <button type="submit">Add Task</button>
        </form>
        <ul>
           {fastTask.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
        </ul>
        </>
    )
}