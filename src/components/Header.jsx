import React from 'react';
import './Header.css'
const Logo = "https://img.icons8.com/fluent/48/000000/money-circulation.png"

function Header(props) {
    return (
        <div className="Header">
            
            <ul>
                <li><img src={Logo} alt="Logo" /></li>
            </ul>
        </div>
    )
}
export default Header