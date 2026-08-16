import './App.css';
import { Button, LoginButton, age } from "./button";

function App(){

  let name ="JAGJIT SINGH"
  let number=()=>{
    return 22;
  }
  return <div>
    <h1> {name} you are best Developer ❤️ {number()}</h1>
         <Button> </Button>
         <LoginButton></LoginButton>
  </div>
}
export default App;