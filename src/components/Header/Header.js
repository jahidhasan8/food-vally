
import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header-container'>
            <h1>Food Vally</h1>
           <div className='header'>
           <a href="/order">Order</a>
            <a href="/inventory">Inventory</a>
            <a href="/category">Category</a>
            <a href="/about">About</a>
           </div>
        </div>
    );
};

export default Header;