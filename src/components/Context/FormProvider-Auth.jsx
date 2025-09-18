import React, { useState, useCallback } from "react";
import FormContext from "./Form-context";

export const FormProvider = ({ children }) => {
  const [enterCart, setEnterCart] = useState(0);
  const [items, setItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);


  const onClickHandler = useCallback((event) => {
    console.log("Adding item:", event);
    
    if (event.amount <= 0 || event.amount > 5) {
      console.warn("Invalid amount:", event.amount);
      return;
    }

    setItems((prevItems) => {
      const itemIndex = prevItems.findIndex((item) => item.id === event.id);
      let updatedItems;

      if (itemIndex !== -1) {
        // Item exists, update amount
        const existingItem = prevItems[itemIndex];
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount + event.amount,
        };
        
        updatedItems = [...prevItems];
        updatedItems[itemIndex] = updatedItem;
      } else {
        // New item, add to array
        updatedItems = [...prevItems, event];
      }

      return updatedItems;
    });

    // Update total amount and cart count
    const itemTotal = event.price * event.amount;
    setTotalAmount((prev) => prev + itemTotal);
    setEnterCart((prev) => prev + event.amount);
  }, []);

  const onUpdateAmountHandler = useCallback((id, newAmount) => {
    setItems((prevItems) => {
      const itemIndex = prevItems.findIndex((item) => item.id === id);
      
      if (itemIndex === -1) return prevItems;

      const existingItem = prevItems[itemIndex];
      
      if (newAmount === 0) {
        // Remove item if amount is 0
        return prevItems.filter((item) => item.id !== id);
      }

      // Update item amount
      const updatedItem = { ...existingItem, amount: newAmount };
      const updatedItems = [...prevItems];
      updatedItems[itemIndex] = updatedItem;

      return updatedItems;
    });

    // Recalculate totals based on current items state
    setItems((currentItems) => {
      const totalItems = currentItems.reduce((sum, item) => sum + item.amount, 0);
      const totalPrice = currentItems.reduce((sum, item) => sum + (item.price * item.amount), 0);
      
      setEnterCart(totalItems);
      setTotalAmount(totalPrice);
      
      return currentItems;
    });
  }, []);


 

  const contextValue = {
    Additm: onClickHandler,
    updateItemAmount: onUpdateAmountHandler,
    totalAmount: totalAmount,
    AddCart: enterCart,
    items: items,
      
  };

  return (
    <FormContext.Provider value={contextValue}>
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;














// import React, { useState, useCallback } from "react";
// import FormContext from "./Form-context";




// export const FormProvider = ({ children }) => {
//   const [enterCart, setenterCart] = useState(0);

//   const [items, setitems] = useState([]);
//   const [totalAmount, settotalAmount] = useState(0);

// //const[updateAmount, setupdateAmount]=useState(items.amoumt)



//   const onClickHandler = useCallback( (event) => {
//     console.log(event);
//     console.log(event.amount);


//     const itemindex = items.findIndex((item) => item.id === event.id);

//     console.log(itemindex);

//     let updatedItems;
   

//     if (itemindex !== -1) {
//       const existingitem = items[itemindex];

    
      
    
// const updatedItem = {
//         ...existingitem,
//         amount: existingitem.amount + event.amount,
//       };
//  updatedItems = [...items];
//       updatedItems[itemindex] = updatedItem;

//       console.log(updatedItems);


//       }

//       //items[itemindex].amount = items[itemindex].amount + event.amount;
      
     
//      else {
//       updatedItems = items.concat(event);
//     }

//     const totalAmount1 = +event.price * event.amount;
//     console.log(totalAmount1);
//     if (event.amount <= 0 || event.amount > 5) {
//       return;
//     } else {
//       const text = [event.amount];
//       console.log(text);
//       setenterCart((prev) => prev + event.amount);

//       settotalAmount((prev) => prev + totalAmount1);

//       setitems(updatedItems);

//       console.log(enterCart);
//       console.log(totalAmount);

      
//     }
//   };








// const onUpdateAmountHandler = (id, newAmount) => {
//     setitems((prevItems) => {
//       const itemindex = prevItems.findIndex((item) => item.id === id);
//       if (!itemindex === -1) return prevItems;

//       const existingitem = prevItems[itemindex];


// let updatedItems;

// if(newAmount === 0){

//   updatedItems = prevItems.filter((item)=> item.id == id);

// }else{

//  const updatedItem = { ...existingitem, amount: newAmount };
//       const updatedItems = [...prevItems];
//       updatedItems[itemindex] = updatedItem;

// }





//       // If amount is 0, remove item
//       // if (prevItems[itemindex].amount === 0 ) {
//       //   const filtered= prevItems.filter((item) => item.id !== id);
//       // setenterCart((prev)=> prev -existingitem.amount);
//       // settotalAmount((prev)=> prev - existingitem.price * existingitem.amount )
      
      
//       // return filtered;
//       // }



// const totalItems = updatedItems.reduce((sum, i)=> sum + i.amount, 0)
// const totalPrice = updatedItems.reduce((sum, i)=> sum + i.price * i.amount, 0 );
      
// setenterCart(totalItems);
// settotalAmount(totalPrice);

// return updatedItems;
//     });
//   };
  




  


  






  

//   const contextValue = {
//     Additm: onClickHandler,
//     updateItemAmount:onUpdateAmountHandler,
//     totalAmount: totalAmount,
//     AddCart: enterCart,

//     items: items
//   };

//   return (
//     <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
//   );
// };

// export default FormProvider;
