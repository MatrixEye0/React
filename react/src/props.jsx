import "bootstrap/dist/css/bootstrap.min.css";
import Teams from "./components/teams";

export default function Props({tm}) { // here we take tm from app .jsx
   //  let arr = ["PBKS Champions ", "DC ", "LSG ", "MI", "CSK", "SRH", "RR", "RCB", "KKR", "GT"];
   // A child should not directly change its props.
   // prop used to pass data. single way comunication only parent to child 
   //used for comunication between two or many component
    return (
         <Teams tm={tm}></Teams>
    );
}