//const Team = (props) =>// props pick the value i pass in teams.jsx and give this value to <li>. if we write ({props}) like this so this allow destucturing in item
   
const Team =({arr})=>{
return (
        <li  className="list-group-item list-group-item-action"> {arr} </li>
    );
};
export default Team;