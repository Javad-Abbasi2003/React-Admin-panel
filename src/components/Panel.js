import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

//Assets
import Profile from "../Asset/Profile.jpg";
import Dashboard from "../Asset/dashboard.svg";
import Orders from "../Asset/orders.svg";
import Comments from "../Asset/comments.svg";
import Charts from "../Asset/charts.svg";
import LeftArrow from "../Asset/left-arrow.svg";

//Style
import styles from "./Panel.module.css"

const Div = styled.div`
  height: 100%;
  position: fixed;
  right: ${(props) => props.showPanel ? "0" : "-30%"};
  top: 0;
  z-index: 2;
  background-color: #4b4b4b;
  color: #f5f5f5;
  border-left: 1px solid rgb(150, 150, 150);
  box-shadow: -15px 0px 40px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-out;
  opacity: ${(props) => props.showPanel ? "1" : "0"};
`

const Panel = ({showPanel}) => {

  return (
    <Div showPanel={showPanel} >
      <div className={styles.headerContainer}>
        <h2 className={styles.header}>پنل مدیریت</h2>
      </div>
      <div className={styles.userContainer}>
        <img src={Profile} alt="Img"  className={styles.userImage} />
        <h3  className={styles.userName}>جواد عباسی</h3>
      </div>
      <div className={styles.links}>
        <Link to="/" className={styles.linkDiv}>
          <div className={styles.nonArrow}>
            <img className={styles.icons} src={Dashboard} alt="Dash"/>
            <span>داشبورد</span>
          </div>
          <img src={LeftArrow} alt="<" className={styles.arrow}/>
        </Link>
        <Link to="/" className={styles.linkDiv}>
          <div className={styles.nonArrow}>
            <img className={styles.icons} src={Orders} alt="Order"/>
            <span>سفارشات</span>
          </div>
          <img src={LeftArrow} alt="<" className={styles.arrow}/>
        </Link>
        <Link to="/" className={styles.linkDiv}>
          <div className={styles.nonArrow}>
            <img className={styles.icons} src={Comments} alt="Comment"/>
            <span>نظرات</span>
          </div>
          <img src={LeftArrow} alt="<" className={styles.arrow}/>
        </Link>
        <Link to="/" className={styles.linkDiv}>
          <div className={styles.nonArrow}>
            <img className={styles.icons} src={Charts} alt="Chart"/>
            <span>چارت ها</span>
          </div>
          <img src={LeftArrow} alt="<" className={styles.arrow}/>
        </Link>
      </div>
    </Div>
  );
};

export default Panel;