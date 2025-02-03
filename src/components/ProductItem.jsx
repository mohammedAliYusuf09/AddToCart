import { useContext } from "react";
import { CartContext } from "../App";

function ProductItem({title, image, price, id}) {
    const {state, dispach} = useContext(CartContext);

    const addToCart = () => {
        dispach({type: 'ADDTOCART', payload: {
            id,
            title,
            image,
            price,
            quantity : 1
        }});
    }

    const isPresent = state.some(item=> item.id === id);
    console.log(isPresent);
    
    return (
        <div className="flex flex-col gap-2 border border-gray-400 rounded-2xl p-4">
            <img className="h-[200px] border border-gray-300 rounded-2xl" src={image} alt={title} />
            <div className="flex flex-col gap-2"> 
                <h4 className="text-gray-800 min-h-[3rem]">{title}</h4>
                <p className="text-gray-700">${price}</p>
            </div>
            <button className={`rounded cursor-pointer border transition-colors ease-in duration-200 ${isPresent ? 'bg-amber-100 text-gray-800' : 'bg-green-600 text-white'} hover:bg-amber-100 hover:text-gray-800 `} onClick={addToCart}>
                Add To Cart
            </button>
        </div>
    )
}

export default ProductItem;