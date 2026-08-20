import { useRef, useState, useEffect } from "react";

function RefHook() {
    const [count, setCount] = useState(0);
    const a = useRef(0); // in rerender this value not change but when we use useState and useEffect they render every time so count 1 rerender and became 0 again. a value persite due to useRef.
    const inputRef = useRef(); // we access DOM value by use of this. useRef returns an object with a single property:
    const handleClick = () => {
        setCount(count + 1);
    };

    useEffect(() => { // show 5 when count is 4 Because your useEffect runs once when the component first loads, even though count is 0.
        a.current = a.current + 1; // give current value
        console.log("Component rendered:", a.current);

    }, [count]);

    return (
        <div>
            <input ref={inputRef} type="text" />
            <h1>Count: {count}</h1>
            <button className="bg-amber-400  border-2 " onClick={handleClick}>
                Count
            </button>
        </div>
    );
}

export default RefHook;