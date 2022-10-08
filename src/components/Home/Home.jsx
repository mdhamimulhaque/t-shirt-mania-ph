import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import "./Home.css";

const Home = () => {
    const tShirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddToCart = (tShirt) => {
        const exists = cart.find(ts => ts._id === tShirt._id);

        if (exists) {
            alert('already added')
        } else {
            const newCart = [...cart, tShirt];
            setCart(newCart);
        }
    }
    return (
        <main className='main_container'>
            <section className="t_shirt_container">
                {
                    tShirts.map(tShirt =>
                        <TShirt
                            key={tShirt._id}
                            tShirt={tShirt}
                            handleAddToCart={handleAddToCart}
                        />)
                }

            </section>
            <section className="cart_container">
                <Cart cart={cart} />
            </section>
        </main>
    );
};

export default Home;