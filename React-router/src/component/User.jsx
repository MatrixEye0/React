import React from 'react'
import { useParams } from 'react-router-dom'

export const User = () => {
    const pram = useParams() //useParams in React Router. It is used to get dynamic values from the URL.
  return (
    <div>I am user {pram.name}</div>
  )
}
//useSearchParam => read query param (data after? in url is query param). set query param.in location they give whole query param single but in this we get query param in parts like we want .
 // use for filter and search.
 
// const Home = () => {
//   const [searchParams, setSearchParams] = useSearchParams();

//   // Get value from URL
//   const name = searchParams.get("name");

//   const changeName = () => {
//     setSearchParams({ name: "Jagjit", age: "22" });
//   };
 //          const category = searchParam.get("category")
//   return (
//     <div>
//       <h1>Name: {name}</h1>

//       <button onClick={changeName}>
//         Change URL
//       </button>
//       <h2>category: {category} <h2/> they show category from quer param
//     </div>
//   );
// };

// export default Home;
