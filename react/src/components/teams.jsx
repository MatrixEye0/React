import "bootstrap/dist/css/bootstrap.min.css";
import Team from "./liteam";

const Teams = ({tm}) =>{
    return (
        <>
            <h1>ICC Teams</h1>
                <ul className="list-group">
                    {/*this pass value of arr to item and item pass it to props in liteam.jsx . arr take value from array pass in app.jsx*/}
                {tm.map((item) => (
                     <Team key={item} arr={item} />
                ))}
            </ul>
        </>
    );
};

export default Teams;

