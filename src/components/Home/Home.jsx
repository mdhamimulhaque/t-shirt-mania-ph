import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import TShirt from '../TShirt/TShirt';
import "./Home.css";

const Home = () => {
    const tShirts = useLoaderData()
    return (
        <main className='main_container'>
            <section className="t_shirt_container">
                {
                    tShirts.map(tShirt =>
                        <TShirt
                            key={tShirt.id}
                            tShirt={tShirt}
                        />)
                }

            </section>
            <section className="cart_container">
                <Cart />
            </section>
        </main>
    );
};

export default Home;