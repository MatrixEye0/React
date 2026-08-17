import './App.css';
import { Button, LoginButton, Boot } from "./button";
import Fragment from './fragments';

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
         <Fragment> </Fragment>
  </div>
}
export default App;