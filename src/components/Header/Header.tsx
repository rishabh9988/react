import React from 'react';
import './Header.css';

const styles = {
  headerMainDiv: 'header-main-div',
  iconDiv: 'icon-div',
  iconStyle: 'icon-style',
  navDiv: 'nav-div',
};

const Header: React.FC = (): Element => {
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
      </div>
    </div>
  );
};

export default Header;
