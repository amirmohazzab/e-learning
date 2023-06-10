import { getBasket } from "../actions/cart";

const data = getBasket();

export const cartReducer = (state = {

  cartItems : [],
  totalAmount :  0,
  totalQTY :  0,
  
}, action) => {

    switch (action.type) {
      case "GET_CART":
        return {
          cartItems: [...action.payload.cartItems],
          totalAmount: action.payload.totalAmount,
          totalQTY: action.payload.totalQTY,
        };
      case "ADD_CART":
        return {
          cartItems: [...action.payload.cartItems],
          totalAmount: action.payload.totalAmount,
          totalQTY: action.payload.totalQTY,
        };
      case "DELETE_CART":
        return {
          cartItems: [...action.payload.cartItems],
          totalAmount: action.payload.totalAmount,
          totalQTY: action.payload.totalQTY,
        };
      case "DELETE_MULTI_CART":
        return {
          cartItems: [...action.payload.cartItems],
          totalAmount: action.payload.totalAmount,
          totalQTY: action.payload.totalQTY,
        };
      case "CLEAR_CART":
        return {
          cartItems: [],
          totalAmount: 0,
          totalQTY: 0,
        };
      default:
        return state;
    }
  };

//  export const cartReducer = (cart=[], action) => {
//      if(action.type === "ADD"){
//          let tempcart = cart.filter((item) => item._id === action.payload._id);
//          if(tempcart < 1){
//               return [...cart, action.payload ];
//          }else{
//               alert("existed in the Basket")
//               return cart;
//          }
//      }
//      if(action.type === "REMOVE"){
//          return cart.filter((item)=> item._id !== action.payload._id);
//     }
//     if(action.type === "INCREASE"){
//          let tempcart = cart.map((item)=>{
//               if(item._id === action.payload._id){
//                    return {...item, quantity: item.quantity + 1}
//               }
//               return item;
//          })
//          return tempcart;
//     }
//     if(action.type === "DECREASE"){
//          let tempcart = cart.map((item)=>{
//               if(item._id === action.payload._id){
//                    return {...item, quantity: item.quantity - 1}
//               }
//               return item;
//          })
//          return tempcart;
//     }
 
//      return cart;
//  }