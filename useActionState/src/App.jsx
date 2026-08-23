import { useActionState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [message,formAction,pending] = useActionState(submitfeedback,"")
     //update state with side effects using Actions. form/action ke result ko state mein store aur manage karne ke liye use hota hai.
    //  message     → value returned by submitfeedback
   //  formAction  → function given to <form action>
  //  pending     → true while action is running
 // usage => result/message , validation errors , loading/pending state, server response, previous state


 async  function submitfeedback(prevState,formData){
    const name=formData.get("name");
    const feedback = formData.get("feedback");
    await new Promise((resolve)=> setTimeout(resolve ,3000));

    if(name && feedback ){
      return `${name} your feedback : ${feedback}`
    }else{
      return "Plese fill all detail"
    }
  }

  return (
    <>
     <form action={formAction}>
       <input type="text" name="name" placeholder="Name"/>
       <br></br>
       <br/>
       <textarea name="feedback" placeholder="Enter Message"/>
       <br></br>
       <br/>
       <button type="submit" disabled={pending}>Submit</button>
       <br></br>
       <br/>
       <p>{message}</p>
     </form>
    </>
  )
}

export default App
