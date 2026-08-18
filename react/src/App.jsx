import './App.css';
import { Button, LoginButton, Boot } from "./button";
import Fragment from './fragments';
import ListbyArr from './map';
import Props from './props';
import Container from './components/container';

function App(){
  let icc = ["Australia","India","South Africa","New Zeland","England"]
  
  let name ="JAGJIT SINGH"
  let number=()=>{
    return 22;
  }

  // <>...</> is a React Fragment. It allows multiple elements to be returned without creating another <div>.

  return(
       
    <>
         <Container>
        <h1> {name} you are best Developer ❤️ {number()}</h1> 
         <Button> </Button>
         <LoginButton></LoginButton>
          </Container>
          <Container>
            <Boot> </Boot>
         <Fragment> </Fragment>
             </Container>
         
         <Container>
          <ListbyArr></ListbyArr>
          </Container>

          <Container>
             <Props tm ={icc}></Props> {/*arr pass value here  tm is became prop*/}
           </Container>
    </>
  );
    
}
export default App;