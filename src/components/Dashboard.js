//Note: these data are constant, but can be changed by implementing API.

import React from 'react';

//Style
import styles from './Dashboard.module.css';

//Icons
import orderIcon from '../Asset/orderIcon.svg';
import stars from '../Asset/stars.svg';
import newUser from '../Asset/newUser.svg';
import view from '../Asset/view.svg';

//Chart
import DashboardAreaspline from './Charts/DashboardAreaspline';

const Dashboard = () => {
  document.title = "Admin Panel - Dashboard";
  

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>داشبورد</h1>
      <div className={styles.nonHeaderContainer}>
        <div className={styles.statesContainer}>
          <div className={styles.firstStateContainer}>
            <div>
              <h2>24</h2>
              <span>سفارشات جدید</span>
            </div>
            <img src={orderIcon} alt=""/>
          </div>
          <div className={styles.secondStateContainer}>
            <div>
              <h2>86%</h2>
              <span>رضایت کاربران</span>
            </div>
            <img src={stars} alt=""/>
          </div>
          <div className={styles.thirdStateContainer}>
            <div>
              <h2>8</h2>
              <span>کاربر جدید امروز</span>
            </div>
            <img src={newUser} alt=""/>
          </div>
          <div className={styles.fourthStateContainer}>
            <div>
              <h2>134</h2>
              <span>بازدید امروز</span>
            </div>
            <img src={view} alt=""/>
          </div>
        </div>
        <div className={styles.chartsContainer}>
          <div className={styles.HighchartContainer}>
            <DashboardAreaspline />
          </div>
          <div className={styles.progressesContainer}>
            <h3 className={styles.progressesHeader}>اهداف</h3>
            <div className={styles.progresses}>
              <div className={styles.progress1}>
                <div>
                  <span>بازدید در ماه</span>
                  <span>1456/3000</span>
                </div>
                <progress value="1456" max="3000"> 1456/3000</progress>
              </div>
              <div className={styles.progress2}>
                <div>
                  <span>سفارش هفتگی</span>
                  <span>182/200</span>
                </div>
                <progress value="182" max="200"> 182/200</progress>
              </div>
              <div className={styles.progress3}>
                <div>
                  <span>کاربر جدید در ماه</span>
                  <span>212/300</span>
                </div>
                <progress value="212" max="300"> 212/300</progress>
              </div>
              <div className={styles.progress4}>
                <div>
                  <span>فروش در ماه</span>
                  <span>7,565,000/10,000,000</span>
                </div>
                <progress value="7565000" max="10000000"> 7565000/10000000</progress>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;