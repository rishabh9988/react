import React from 'react';
import './Header.css';

const styles = {
  headerMainDiv: 'header-main-div',
  iconDiv: 'icon-div',
  searchBarDiv: 'search-bar-div',
  userIconDiv: 'user-icon-div',
  inputStyle: 'input-style',
  iconStyle: 'icon-style',
};

const Header = (): JSX.Element => {
  return (
    <div className={styles.headerMainDiv}>
      <div className={styles.iconDiv}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/147/147590.png"
          alt="User Icon"
          className={styles.iconStyle}
        />
      </div>
      <div className={styles.searchBarDiv}>
        <input
          className={styles.inputStyle}
          type="text"
          placeholder="Search..."
        />
      </div>
      <div className={styles.iconDiv}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/147/147590.png"
          alt="User Icon"
          className={styles.iconStyle}
        />
      </div>
    </div>
  );
};

export default Header;
