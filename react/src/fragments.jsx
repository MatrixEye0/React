import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

export default function Fragment(){// div lagane se load ke time extra div load karna padega jo website ko slow karega so use fragment which add div but in load time they igrone it.
    return (
 <React.Fragment> {/* use <> </> this also work same as react.fragment*/}
     <h1> Fragments</h1>
    <ul class="list-group">
     <li class="list-group-item list-group-item-action">An item</li>
     <li class="list-group-item list-group-item-action">A second item</li>
     <li class="list-group-item list-group-item-action">A third item</li>
     <li class="list-group-item list-group-item-action">A fourth item</li>
     <li class="list-group-item list-group-item-action">And a fifth one</li>
   </ul>
 </React.Fragment>
    );
}