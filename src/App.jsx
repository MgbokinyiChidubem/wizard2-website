import React,{useState} from "react";

import MealItem from "./components/MealItem";
import ModuleOverlay from "./components/ModuleOverlay";
import Header from "./components/Header";

import  FormProvider from "./components/Context/FormProvider-Auth";



function App() {
const [amount, setamount]=useState('0');

const Amountupdate = (amount1) => {

  console.log(...amount1);

  setamount(...amount1);

  console.log(amount);
}



  return (
    <React.Fragment>
    <FormProvider>
      <Header UpdateAmount={amount}/>
       
      <main>
        <MealItem newcart={Amountupdate}/>
      </main>

      </FormProvider>
    </React.Fragment>
  );
}

export default App;
