import "bootstrap/dist/css/bootstrap.min.css";

export default function ListbArr() {
    let arr = ["PBKS 🏆🏆🏆🏆🏆🏆🏆🏆🏆 Champions ", "DC ", "LSG ", "MI", "CSK", "SRH", "RR", "RCB", "KKR", "GT"];

    return (
        <>
            <h1>IPL Teams</h1>
            <ul className="list-group">
                {/* key is used by React internally and is not shown in Inspect. assign unique key for optimized re-renders*/}
                {arr.map((item) => (
                    <li key={item} className="list-group-item list-group-item-action"> {item} </li>
                ))}
            </ul>
        </>
    );
}