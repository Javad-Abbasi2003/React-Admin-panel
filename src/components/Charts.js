import React from 'react';

//charts
import Pie from './Charts/Pie'
import Areaspline from './Charts/Areaspline';
import Gauge from './Charts/Gauge'
import Pyramid from './Charts/Pyramid'

import styles from './Charts.module.css'

const Charts = () => {
  document.title = "Admin Panel - Charts";
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>چارت ها</h1>
      <div className={styles.chartsContainer}>
        <div className={styles.PieChartContainer}>
          <Pie />
        </div>
        <div className={styles.GaugeChartContainer}>
          <Gauge />
        </div>
        <div className={styles.PyramidChartContainer}>
          <Pyramid />
        </div>
        <div className={styles.AreaChartContainer}>
          <Areaspline />
        </div>
      </div>
    </div>
  );
};

export default Charts;