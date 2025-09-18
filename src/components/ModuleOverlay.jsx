import React, { useContext } from "react";

import Module from "../UI/Module";

import CartInput from "./CartInput";

import FormContext from "./Context/Form-context";

import style from "./ModuleOverlay.module.css";

function ModuleOverlay(props) {
  const ctx = useContext(FormContext);

  const moduleitem = {
    totalAmount: ctx.totalAmount.toFixed(2),
  };
  return (
<React.Fragment>

  
<Module onClose={props.onClose}>

   <div className={style['cart-items']}>
      {ctx.items.map((item) => (
        <CartInput
          title={item.item}
          amount={item.amount}
          price={item.price}
          id={item.id}
          key={item.id}
          
        />
      ))}

      <div>
        <h2>Total Amount</h2>
        <h2 className={style.total}>${moduleitem.totalAmount}</h2>
      </div>
      <div className={style.actions}>
        <button className={style["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={style.button}>Order</button>
      </div>
      </div>
    </Module>

  
    

</React.Fragment>
 
  );
}

export default ModuleOverlay;
