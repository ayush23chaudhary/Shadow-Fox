import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import Login from './components/Login';
import Sort from './components/Sort';
import Cart from './components/Cart';
import Account from './components/Account';

import './styles.css';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const [sortOption, setSortOption] = useState('name');

  // Define your products here
  const products = [
    { id: 1, name: 'Wheat Flour- 5kg', price:229, imageUrl: '/images/products/Product1.jpg' },
    { id: 2, name: 'Rice- 5kg', price:279 , imageUrl: '/images/products/Product2.jpeg' },
    { id: 3, name: 'Pulses- 1kg', price:99, imageUrl: '/images/products/pulses.jpeg' },
    {id: 4, name: 'Chocolates', price: 49, imageUrl: '/images/products/choco.jpg' },
    {id: 5, name: 'Daily Needs', price: 99, imageUrl: '/images/products/daily.jpg' },
    {id: 6, name: 'Bucket & Mugs', price: 149, imageUrl: '/images/products/bucket.jpg' },
    {id: 7, name: 'Cleaners', price: 79, imageUrl: '/images/products/cleaners.jpeg' },
    {id: 8, name: 'Home Decor', price: 249, imageUrl: '/images/products/home.jpg' },
    // Add more products as needed
  ];
  const handleSortChange = (option) => {
    setSortOption(option);
  };

  // Sort products based on the selected option
  const sortedProducts = [...products].sort((a, b) => {
    if (sortOption === 'price') {
      return a.price - b.price;
    } else if (sortOption === 'name') {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });
  

  return (
    <div>
      <Header 
        onLogin={() => setShowLogin(true)} 
        onCart={() => setShowCart(true)} 
        onAccount={() => setShowAccount(true)} 
      />
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
      {showCart && <Cart onClose={() => setShowCart(false)} />} 
      {showAccount && <Account onClose={() => setShowAccount(false)} />} 
      {/* Integrate Sort Component */}
      <Sort onSortChange={handleSortChange} />
      
      {/* Pass the products array to ProductList */}
      <ProductList products={sortedProducts} />

      <Footer />
    </div>
  );
};

export default App;
