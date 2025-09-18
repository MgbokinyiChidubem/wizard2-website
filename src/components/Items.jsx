import React,{useContext} from "react";
import classes from "./Items.module.css";

import  FormProvider from "./Context/FormProvider-Auth";
import FormContext from "./Context/Form-context";
import MealItemForm from "./MealItemForm";




function Items(props) {
const ctx = useContext(FormContext);

const onaddcart = (amount) => {
  // console.log(amount);

  const newamount = {

    id: props.id,
    item: props.items,
    amount: amount,
    price: props.price,
  };

  ctx.Additm(newamount);

  
}



  return (
    <div className={classes.meals}>
      <ul>
        <div ></div>
        <div > <h3>{props.items}</h3></div>
        <div className={classes.description}>{props.discribetions}</div>
        <div className={classes.price}>${props.price}</div>
      </ul>
      <FormProvider><MealItemForm onaddcart={onaddcart}/> </FormProvider> 
    </div>
  );
}

export default Items;
