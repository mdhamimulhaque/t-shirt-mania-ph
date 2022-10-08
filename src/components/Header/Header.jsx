import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';


const Header = () => {
    const navItems = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "Orders", path: "/orders" },
        { id: 3, name: "About", path: "/about" },
    ]
    return (
        <header>
            <div className="logo">
                <h2>T-shirt Mania-ph</h2>
            </div>
            <nav className='nav_wrapper'>
                {
                    navItems.map(navItem =>
                        <Link to={navItem.path} key={navItem.id} >
                            {navItem.name}
                        </Link>

                    )
                }
            </nav>
        </header >
    );
};

export default Header;