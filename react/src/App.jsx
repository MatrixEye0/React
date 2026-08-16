import './App.css';
import { Button, LoginButton, Boot } from "./button";

function App(){

  let name ="JAGJIT SINGH"
  let number=()=>{
    return 22;
  }
  return <div>
    <h1> {name} you are best Developer ❤️ {number()}</h1>
         <Button> </Button>
         <LoginButton></LoginButton>
         <Boot> </Boot>
  </div>
}
export default App;