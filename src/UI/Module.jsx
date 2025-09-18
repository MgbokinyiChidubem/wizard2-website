import React from "react";
import classes from "./Module.module.css";

function Module(props) {
  return (
    <div onClick={props.onClose} className={classes.backdrop}>
      <div className={classes.modal}> {props.children} </div>
    </div>
  );
}
export default Module;
