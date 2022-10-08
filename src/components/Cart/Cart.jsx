import React from 'react';
import "./Cart.css";

const Cart = ({ cart, handleRemoveItem }) => {

    let message;
    if (cart.length === 0) {
        message = <p>No Items...!!!</p>
    }

    return (
        <div>
            <h2>Order Summery</h2>
            <h4>Order Items : {cart.length}</h4>
            {
                message
            }
            {
                cart.map(tShirt => {
                    return (
                        <div className='cart_items_box' key={tShirt._id}>
                            <h4>{tShirt.name}</h4>
                            <button
                                className='remove_Item'
                                onClick={() => handleRemoveItem(tShirt._id)}
                            >
                                X
                            </button>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Cart;