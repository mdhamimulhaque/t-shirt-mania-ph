import React from 'react';
import "./Cart.css";

const Cart = ({ cart }) => {
    return (
        <div>
            <h2>Order Summery</h2>
            <h4>Order Items : {cart.length}</h4>
            {
                cart.map(tShirt => {
                    return (
                        <div className='cart_items_box' key={tShirt._id}>
                            <h4>{tShirt.name}</h4>
                            <button className='remove_Item'>X</button>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Cart;