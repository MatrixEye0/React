import './App.css';
import { Button, LoginButton, Boot } from "./button";
import Fragment from './fragments';
import ListbyArr from './map';
import Props from './props';

function App(){
  let icc = ["Aus","IND","SA","NZ","Eng"]
  
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
         <ListbyArr></ListbyArr>
         <Props tm ={icc}></Props> {/*arr pass value here  tm is became prop*/}
  </div>
}
export default App;