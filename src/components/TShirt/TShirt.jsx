import React from 'react';
import "./TShirt.css";

const TShirt = ({ tShirt, handleAddToCart }) => {
    const { picture, price, name, gender } = tShirt;
    return (
        <div className='tShirt_box'>
            <img src={picture} alt="" />
            <div className="info_box">
                <h4>{name}</h4>
                <p><strong>Price :</strong> {price}</p>
                <p><small>Gender : {gender}</small></p>
                <button
                    className='add_to_cart_btn'
                    onClick={() => handleAddToCart(tShirt)}
                >Add To Cart</button>
            </div>
        </div>
    );
};

export default TShirt;