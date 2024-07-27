import React, { useState } from 'react';
import './Header.css';

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
        <ul>Home</ul>
        <ul>Favourites</ul>
        <ul>Offers</ul>
        <ul>Cart</ul>
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
