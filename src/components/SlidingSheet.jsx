import React, { useContext, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { CartContext } from "../App";
import CartItem from "./CartItem";

const SlidingSheet = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {state} = useContext(CartContext);

  let sub;
  if(state) {
    sub = state.reduce((acu, item)=> {
      return acu = Math.round(acu + item.price * item.quantity)
    },0)
  }

  function formatNumber(num) {
    return parseFloat(num.toFixed(2));
  }
  sub = formatNumber(sub);

  const handelOrder = () =>{
    alert('ANASE ORDER DIDE');
  }
  
  
  
  return (
    <div className="relative">
      <div
        className="px-4 py-2 flex text-xl bg-green-600 text-white rounded-lg cursor-pointer hover:bg-green-700"
        onClick={() => setIsOpen(true)}
      >
        <FaCartShopping /> <span>{state.length}</span>
      </div>

      <div
        className={`fixed top-0 right-0 min-h-full w-96 bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full">
        <div className="h-[10vh] flex justify-between items-center border-b border-gray-300">
          <h2 className="text-lg font-semibold">Cart</h2>
          <button
            className="text-gray-500 hover:text-gray-800"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
        </div>

        <div className="h-[45vh] px-4 overflow-auto">
          {
          state.length === 0 
          ?
          <p>Add Some products to cart</p> 
          : 
          state.map(pro=> 
          <CartItem 
          key={pro.id} 
          id={pro.id} 
          title={pro.title} 
          price={pro.price} 
          image={pro.image} 
          quantity={pro.quantity}/> )
          }
        </div>
        {
          state && 
        <div className="h-[45vh]"> 
          <div className="p-4 m-4 bg-gray-200">
            <h2 className="text-xl border-b border-gray-300 pb-3">Order Summary</h2>
            <div className="flex justify-between mt-4 mb-1"><p className="text-lg text-green-800">Subtotal</p> <span className="text-gray-700">{sub}</span></div>
            <div className="flex justify-between mb-1"><p className="text-lg text-green-800">Sheping</p> <span className="text-gray-700">Free</span></div>
            <div className="flex justify-between text-xl"><h2>Total</h2> <h2>{sub}</h2></div>
          </div> 
          <div className="flex">
            <button className="w-full text-white bg-green-600 mt-2 mx-4 py-4" onClick={handelOrder}>CHECKOUT</button>
          </div>
        </div>
        }
        </div>
        
      </div>
    </div>
  );
};

export default SlidingSheet;