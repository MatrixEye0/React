import input from "./input.module.css";

const Input = ({addItem}) => {

 // this is good method to handel event when you pass in other function and call in onchange

// add input and show in display by state concept in react.
// state ------------------------------------------------------------------------------------------------------------------------------------------------------------
// 1.data that change over time.it is local and private component . it change because component to re-render.
// 2. for function use useState hook .function star with use called hooks .hook only used inside component .parent pass state down to children via props.
// 3. lifting state up: share state b/w components by moving it to their closest common ansestor.
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------

  const handel = (event) => {
    if(event.key === "Enter"){
      addItem(event.target.value);
      event.target.value = "";
    }
  };

  const buttonAdd = () => {
    const inputValue = document.getElementById("name").value;
    addItem(inputValue);
    document.getElementById("name").value = "";
  };

  return (
    <>
      <div className={input.inputBox}>
        <div className={input.inputRow}>
          <input type="text" id="name" placeholder="Your name..." onKeyDown={handel}  />
          <button type="button" onClick={buttonAdd}> Add </button>
        </div>
      </div>
    </>
  );
};

export default Input;