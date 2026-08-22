import { useSearchParams } from "react-router-dom";

//useSearchParam => read query param (data after? in url is query param). set query param.in location they give whole query param single but in this we get query param in parts like we want .
 // use for filter and search.

export function Search() {
  const [searchParams, setSearchParams] = useSearchParams();

  const search = searchParams.get("search") || "";

  const handleSearch = (e) => {
    setSearchParams({ search: e.target.value });
  };

  return (
    <>
     <div  style={{padding:"20px"}}>
        <input
        value={search}
        onChange={handleSearch}
        placeholder="Search..." />

      <h2>Searching for: {search}</h2>
      </div>
    </>
  );
}

// other example 
//  const Home = () => {
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
