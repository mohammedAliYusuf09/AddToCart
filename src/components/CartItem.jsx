import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { CartContext } from "../App";

function CartItem({title, price, image, quantity, id}) {
    const {dispach} = useContext(CartContext);
    function formatNumber(num) {
        return parseFloat(num.toFixed(2));
    }

    const totla = price * quantity;
    const modTotal = parseFloat(totla);

    const handelDecriseItemQuantity = () => {
        dispach(
            {
                type: 'DECRIS',
                payload: {
                    id,
                }
            }
        )
    }
    const handelIncrisItemQuantity = () => {
        dispach(
            {
                type: 'INCRISE',
                payload: {
                    id,
                }
            }
        )
    }
    const deleteCartItem = () => {
        dispach(
            {
                type: 'DELETE',
                payload: {
                    id,
                }
            }
        )
    }
    return (
        <div className="flex gap-4 border-b border-gray-300 py-4 relative">
            <img className="w-[70px] h-[70px] bg-gray-200" src={image} alt={title} />
            <div className="flex flex-col gap-2 justify-center">
                <h4>{title}</h4>
                <div className="flex gap-6">
                    <p>${price}</p>
                    <div className="flex gap-2"><span className="cursor-pointer bg-red-200 w-[20px] px-1 text-center hover:bg-red-300" onClick={handelDecriseItemQuantity}>-</span><span >{quantity}</span><span className="cursor-pointer bg-gray-200 w-[20px] px-1 text-center hover:bg-gray-300" onClick={handelIncrisItemQuantity}>+</span></div>
                    <p>{modTotal} Total</p>
                </div>
            </div>
            <span className="absolute top-2 right-2 bg-red-400 cursor-pointer text-white p-1 rounded-full hover:bg-red-500" onClick={deleteCartItem}><MdDelete /> </span>
        </div>
    )
}

export default CartItem;