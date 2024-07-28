import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Login from '../Login/Login';

const styles = {
  headerMainDiv: 'header-main-div',
  iconDiv: 'icon-div',
  iconStyle: 'icon-style',
  navDiv: 'nav-div',
  loginBtn: 'login-btn',
};

const Header: React.FC = (): Element => {
  const [loginState, setLoginState] = useState<boolean>(false);
  return (
    <div className={styles.headerMainDiv}>
      <div className={styles.iconDiv}>
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/008/687/818/small/food-delivery-logo-free-vector.jpg"
          alt="App Logo"
          className={styles.iconStyle}
        />
      </div>
      <div className={styles.navDiv}>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/">Cart</Link>
          <Link to="/restaurants/:resId"></Link>
        </ul>
        <button
          className={styles.loginBtn}
          onClick={() => setLoginState(!loginState)}
        >
          {loginState ? 'LOGOUT' : 'LOGIN'}
        </button>
      </div>
    </div>
  );
};

export default Header;
