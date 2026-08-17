import './App.css';
import { Button, LoginButton, Boot } from "./button";
import Fragment from './fragments';
import ListbyArr from './map';
import Props from './props';

function App(){
  let icc = ["Australia","India","South Africa","New Zeland","England","USA","Canada","Neatherland","West Indies","Ireland","France","Germany","Spain","Sri Lanka","Pakistan","Afghanistan","Bangladesh","Nepal","Italy","Brazil","Argentina","Russia","Japan","South Korea","China","Indonesia","Israel","Iran","UAE","Oman","Greece","Portugal","Turkey","Colombia"]
  
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