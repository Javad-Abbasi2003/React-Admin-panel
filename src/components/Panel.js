import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

//Component
import Date from "./Date";

//Assets
import Profile from "../Asset/Profile.jpg";
import Dashboard from "../Asset/dashboard.svg";
import Orders from "../Asset/orders.svg";
import Comments from "../Asset/comments.svg";
import Charts from "../Asset/charts.svg";
import LeftArrow from "../Asset/left-arrow.svg";

//Style
import styles from "./Panel.module.css";

const Div = styled.div`
  height: calc(100% + 60px);
  position: fixed;
  right: ${(props) => props.showPanel ? "0" : "-350px"};
  top: 0;
  z-index: 2;
  background-color: #4b4b4b;
  color: #f5f5f5;
  border-left: 1px solid rgb(150, 150, 150);
  box-shadow: -15px 0px 40px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-out;
  opacity: ${(props) => props.showPanel ? "1" : "0"};
`;

const Panel = (props) => {
  const {showPanel, setShowPanel} = props;

  const clickHandler = () => {
    setShowPanel(false);
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Div showPanel={showPanel} >
      <div className={styles.headerContainer}>
        <h2 className={styles.header}>پنل مدیریت</h2>
      </div>
      <div className={styles.linksDiv}>
        <Link to="#" onClick={clickHandler}>خانه</Link>
        <Link to="#" onClick={clickHandler}>فروشگاه</Link>
        <Link to="#" onClick={clickHandler}>پشتیبانی</Link>
      </div>
      <div className={styles.userContainer}>
        <img src={Profile} alt="Img" className={styles.userImage} />
        <h3 className={styles.userName}>جواد عباسی</h3>
      </div>
      <div className={styles.links}>
        <Link to="/" className={styles.linkDiv} onClick={clickHandler}>
          <div className={styles.nonArrow}>
            <img className={styles.icons} src={Dashboard} alt="Dash"/>
            <span>داشبورد</span>
          </div>
          <img src={LeftArrow} alt="<" className={styles.arrow}/>
        </Link>
        <Link to="/orders" className={styles.linkDiv} onClick={clickHandler}>
          <div className={styles.nonArrow}>
            <img className={styles.icons} src={Orders} alt="Order"/>
            <span>سفارشات</span>
          </div>
          <img src={LeftArrow} alt="<" className={styles.arrow}/>
        </Link>
        <Link to="/comments" className={styles.linkDiv} onClick={clickHandler}>
          <div className={styles.nonArrow}>
            <img className={styles.icons} src={Comments} alt="Comment"/>
            <span>نظرات</span>
          </div>
          <img src={LeftArrow} alt="<" className={styles.arrow}/>
        </Link>
        <Link to="/charts" className={styles.linkDiv} onClick={clickHandler}>
          <div className={styles.nonArrow}>
            <img className={styles.icons} src={Charts} alt="Chart"/>
            <span>چارت ها</span>
          </div>
          <img src={LeftArrow} alt="<" className={styles.arrow}/>
        </Link>
      </div>
      <div className={styles.date}>
        <Date />
      </div>
    </Div>
  );
};

export default Panel;