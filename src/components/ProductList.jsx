import { useContext } from "react";
import ProductItem from "./ProductItem";
import { CartContext } from "../App";

function ProductList() {
    const {data} = useContext(CartContext);
    if (data) {
        return (
            <div className="w-[900px] mx-auto mt-4">
                <div className="grid grid-cols-4 gap-4">
                    {data.map(pro=> <ProductItem key={pro.id} id={pro.id} title={pro.title} price={pro.price} image={pro.images[0]}/>)}
                </div>
            </div>
        )
    }
    return (
       <h4>Loading Products...</h4>
    )
}

export default ProductList;