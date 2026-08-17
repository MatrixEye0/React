import "bootstrap/dist/css/bootstrap.min.css";

export default function ListbArr() {
    let arr = ["PBKS 🏆🏆🏆🏆🏆🏆🏆🏆🏆 Champions ", "DC ", "LSG ", "MI", "CSK", "SRH", "RR", "RCB", "KKR", "GT"];
     // conditional rendering ------------------------------------------------------------------

     if (arr.length===0){
        return <h3>Empty</h3>
     }
    return (
        <>
            <h1>IPL Teams</h1>
            {/*ternary operator*/}
            { arr.length===0 ? <h3>Empty</h3>:<h3>Teams Preasent</h3>}
            
            <ul className="list-group">
                {/* key is used by React internally and is not shown in Inspect. assign unique key for optimized re-renders*/}
                {arr.map((item) => (
                    <li key={item} className="list-group-item list-group-item-action"> {item} </li>
                ))}
            </ul>
        </>
    );
}