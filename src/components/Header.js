import React from 'react';

const Header = ({ onLogin, onCartClick, onAccountClick, cartCount }) => {
  return (
    <header>
    <img src="/images/logo/logo.png" alt="Ez Mart Logo" className="logo" />
    <h1>Ez Mart</h1>
    <nav>
      <ul className="nav-links">
        <li>
          <button onClick={onLogin}>Login</button>
        </li>
        <li>
          <button className="account-btn" onClick={onCartClick}>Cart</button>
        </li>
        <li>
          <button className="account-btn" onClick={onAccountClick}>Account</button>
        </li>
      </ul>
    </nav>
  </header>
);
}


export default Header;