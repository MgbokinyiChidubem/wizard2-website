import React, { useContext, useState } from "react";

import MealItemSummary from "./MealItemSummary";

import ModuleOverlay from "./ModuleOverlay";

import mealsImage from "../images/meals.jpg";

import style from "./Header.module.css";
import FormContext from "./Context/Form-context";

function Header() {
  const ctx = useContext(FormContext);
const [showOverlay, setshowOverlay] = useState(false);
  const handleButtonClick = (event) => {
    event.preventDefault();
   setshowOverlay(true);
  };
const onClosehandler = () => {
  setshowOverlay(false);
}
 

  return (
    <React.Fragment>
      {showOverlay && <ModuleOverlay onClose={onClosehandler}/>}
      <header>
        <div className={style.header}>
          <h1>ReactMeals</h1>
          <div className={style.Header__cart}>
            <span></span>
            <span>Your Cart</span>
            <button
              type="button"
              className={style.Header__button}
              onClick={handleButtonClick}
            >
              {ctx.AddCart}
            </button>
          </div>
        </div>

        <div className={style["main-image"]}>
          <img src={mealsImage} alt="A table full of delicious food!" />
        </div>
        <MealItemSummary />
      </header>
    </React.Fragment>
  );
}

export default Header;
