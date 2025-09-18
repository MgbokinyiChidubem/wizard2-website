import React, { useContext } from 'react';

import Card from '../UI/Card';

import FormProvider from './Context/FormProvider-Auth';

import classes from './CartInput.module.css';
import FormContext from './Context/Form-context';





function CartInput (props){

    const ctx = useContext(FormContext);
    console.log(ctx.items);




const onAddHandler = () => {

  ctx.updateItemAmount(props.id, props.amount + 1);

}



const onRemoveHandler = () => {

    if(props.amount > 0){
ctx.updateItemAmount(props.id, props.amount - 1);
    }else{
        return;
    }


}


const classes1 = `${classes.title} ${props.className  || ''}`;

console.log(props.title);
 return( 
      <Card>

<div className={classes1}>{props.title}</div>
<div className={classes.price}>${props.price}</div>
<div className={classes.amount}>x {props.amount}</div>

<div>
    <button type="button" className={classes.addbtn} onClick={onAddHandler}>+</button>
    <button type="button" className={classes.removebtn} onClick={onRemoveHandler}>-</button>
</div>

    </Card>
)
}

export default CartInput;