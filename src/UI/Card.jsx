import React from "react";

import classes from './Card.module.css';

function Card (props){

  const p  = `${props.className} ${classes.card}`

return(
<React.Fragment>
<div className={p}  >
    {props.children}
</div>

</React.Fragment>

) 

}

export default Card;