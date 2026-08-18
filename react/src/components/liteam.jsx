//const Team = (props) =>// props pick the value i pass in teams.jsx and give this value to <li>. if we write ({props}) like this so this allow destucturing in item

import styles from "./liteam.module.css";
const Team = ({ arr }) => { // className declare like this because we use module.css other wise the treat it ass normall css
    return (
        <li className={`list-group-item list-group-item-action ${styles.list} ${styles.fnt}`}>
            {arr}
        </li>        
    );
};
export default Team;