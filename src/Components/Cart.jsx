import React from "react";
import { useDispatch, useSelector } from  "react-redux";
import "../style.css";
import "../index.js";

export default function Cart() {
     const selector = useSelector(state => state);
     const dispatch = useDispatch();

    const cartProducts = selector.cartProducts;

    function incrementProduct(id) {
        dispatch({type:"INCREMENT_PRODUCT", payload: {id, increment: 1}})
    }
    function decremntProduct(id, inCart) {
        inCart <=1  ?removeItem(id) : 
        dispatch({type:"DECREMENT_PRODUCT", payload: {id, increment: 1}})
    }
    function removeItem(id){
        dispatch({type:"REMOVE_FROM_CART", payload: id})
    }

    return (
        <div className="cart">
            {cartProducts.length > 0 ? cartProducts.map(item =>
            <div className="cartItem">
                <div className="cartItemImg">
                    <img src={item.image} alt=""/>
                </div>

                <div className="cartItemInfo">
                    <h3>{item.color}</h3>
                </div>

                <div className="cartItemmQuantity">
                    <button onClick={() => decremntProduct(item.id, item.inCart)}>-</button>
                    <span>{item.inCart}</span>
                    <button onClick={() => incrementProduct(item.id) }>+</button>
                </div>

                <div className="cartItemPrice">
                    <h3>R{item.price}</h3>
                    <span>Cost: R{item.price * item.inCart}</span>
                </div>

                <div className="removeCartItem">
                    <button onClick={() => removeItem(item.id)}>
                   <img src="https://img.icons8.com/bubbles/344/mac-os.png" alt="delete"/>
                   
                    </button>
                </div>                        
            </div>
                ) : <h2>Cart is Empty</h2>}
                
                
        </div>
        
    )
}