import React from "react";

// Create the context first
const FormContext = React.createContext({
  Additm: () => {},
  totalAmount: 0,
  AddCart: "",
 
  
  items: [],
  updateItemAmount: (id, newAmount)=>{}
});


export default FormContext;
