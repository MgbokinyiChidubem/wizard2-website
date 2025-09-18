import React from "react";

import style from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  

  
  return (
    <div className={style.input}>
      <label htmlFor={props.items.id}>{props.items.label}</label>
      <input
      ref={ref}
       {...props.items}
      />
    </div>
  );
});

export default Input;
