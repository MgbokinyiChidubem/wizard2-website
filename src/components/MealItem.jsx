import React from "react";

import style from './MealItem.module.css';



import Items from "./Items";

const DUMMY__MEALITEM = [
  {
    id: '#z',
    item: "Fried Rice",
    discribetion: "very Delicious and Affordable",
    price: 20.34,
  },
  {
    id: '#x',
    item: "Sushi",
    discribetion: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: '#c',
    item: "Schniitzel",
    discribetion: "A german specialty!",
    price: 16.5,
  },
  {
    id: '#v',
    item: "Barbecue Burger",
    discribetion: "American, raw, meaty",
    price: 12.99,
  },
  {
    id : '#b',
    item: "Green Bowl",
    discribetion: "Healthy...and green...",
    price: 12.99,
  },
];



function MealItem(props) {


const amount =(amount)=>{
console.log(...amount);

props.newcart(...amount);

}




  return (
    
      <div className={style.item}>
      {DUMMY__MEALITEM.map((itm) => (
        <Items
        onaddcart={amount}
        id={itm.id}
          items={itm.item}
          discribetions={itm.discribetion}
          price={itm.price}
        />
      ))}
      </div>
    
  );
}

export default MealItem;
