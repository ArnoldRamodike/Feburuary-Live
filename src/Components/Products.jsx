import React from "react";
import { useDispatch, useSelector } from  "react-redux";
import "../style.css";

export default function Products() {
    const selector = useSelector(state => state);
    const dispatch = useDispatch();

    const products = selector.products;
    console.log(products);
    const cartProducts = selector.cartProducts;

    function addToCart(id) {
        let isInCart = false;
        cartProducts.forEach(el => {
            if (id === el.id ) isInCart = true
        })
        if (!isInCart) {
            dispatch({type: "ADD_TO_CART", payload: products.find((Product) => id === Product.id)} )
        }
        alert("Product added to Cart")
    }

    return (
        <div className="productList">
            {products.map(item => 
                <div className="product" key={item.id}>
                    <img src={item.image} alt=""/>
                    <h3>{item.name}</h3>
                    <span>Color: {item.color}</span>
                    <div className="priceBlock">
                        <span className="productPrice">R{item.price}</span>
                        <button onClick={() => addToCart(item.id)}>Buy</button>
                    </div>
                </div>
                )}
        </div>
    )
}