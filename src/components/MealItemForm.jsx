import React, {  useRef}  from "react";

import classes from "./MealItemForm.module.css";

import FormContext from "./Context/Form-context";

import Input from "../UI/Input";

function MealItemForm(props) {
const inputRef =  useRef();
  



const submitHandler = (event) => {  

    event.preventDefault();

    
    const enteredAmount = inputRef.current.value;
    
    console.log(enteredAmount);
    
    const enteredAmountNumber = +enteredAmount; 

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      return;

}
console.log(enteredAmountNumber);

  props.onaddcart(enteredAmountNumber);

};
  return (
    <React.Fragment>
      <form className={classes.form} onSubmit={submitHandler}>
        <Input
         ref =  { inputRef }
          items={{
          
            label: "Amount",
            id: "amount",
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button type="submit">+ Add</button>
      </form>
    </React.Fragment>
  );
    };

export default MealItemForm;
