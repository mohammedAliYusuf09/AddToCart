import { createContext, useReducer } from "react"
import Header from "./components/Header"
import ProductList from "./components/ProductList"
import useFetch from "./assets/lib/useFetch";
export const CartContext = createContext(null);

function reducer(state, action) {
  switch (action.type) {
    case 'ADDTOCART':
      const id = action.payload.id;
      const isPresent = state.some(item=> item.id === id);
      if(!isPresent) {
        return [...state, action.payload]
      }else{
        return state;
      }
    case 'DELETE' : 
    return state.filter((item)=> item.id !== action.payload.id);
    case 'DECRIS' : 
    return state.map((item) => {
      if (item.id === action.payload.id && item.quantity > 1) {
        // Decrease the quantity by 1 if the item matches and quantity > 1
        return { ...item, quantity: item.quantity - 1 };
      }
      return item; // Otherwise, return the item as is
    });
    case 'INCRISE' : 
    return state.map((item) => {
      if (item.id === action.payload.id) {
        // Increase the quantity by 1 if the item matches
        return { ...item, quantity: item.quantity + 1 };
      }
      return item; // Otherwise, return the item as is
    });

    default:
      return state;
  }

}

function App() {
  const [state, dispach] = useReducer(reducer, []);
  const data = useFetch();
  
  return (
    <CartContext.Provider value={{state, dispach, data}}>
      <Header/>
      <ProductList/>
    </CartContext.Provider>
  )
}

export default App
