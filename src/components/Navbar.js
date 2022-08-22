import React from 'react';
import { Link } from 'react-router-dom';

import Date from "./Date";

//Assets
import Bell from '../Asset/bell.svg';
import Chat from '../Asset/chat.svg';

//Styles
import styles from './Navbar.module.css'

const Navbar = () => {

  return (
    <div className={styles.container}>
      <div className={styles.linksDiv}>
        <Link to="#">خانه</Link>
        <Link to="#">فروشگاه</Link>
        <Link to="#">پشتیبانی</Link>
      </div>
      <div className={styles.iconsDiv}>
        <div className={styles.date}>
          <Date />
        </div>
        <div className={styles.chatDiv}>
          <img src={Chat} alt="chat" style={{width: "20px"}} />
          <span>3</span>
        </div>
        <div className={styles.bellDiv}>
          <img src={Bell} alt="bell" style={{width: "20px"}} />
          <span>1</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;