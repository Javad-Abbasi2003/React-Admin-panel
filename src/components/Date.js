import React, { Component } from 'react';

import styles from './Date.module.css';


class ClassDate extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      days: ["یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنج شنبه", "جمعه", "شنبه"]
    }
  }
  componentDidMount () {
    setInterval(
      ()=> this.tick(),
      1000
    )
  }
  tick = () => {
    this.setState({
      date: new Date()
    })
  };

  dataCreator = () => {
    const day = this.state.days[this.state.date.getDay()];
    const Hour = this.state.date.getHours();
    const Min = (this.state.date.getMinutes()<10?'0':'') + this.state.date.getMinutes();
    const Seconds = (this.state.date.getSeconds())
    const clock = `${Hour}:${Min}`;
    const persianDate = this.state.date.toLocaleDateString('fa-IR-u-nu-latn');
    return {day: day, clock: clock, persianDate: persianDate, Seconds: Seconds}
  }

  render() {
    const data = this.dataCreator()
    return (
      <div className={styles.container}>
        <div className={styles.secondsDiv} style={{width: `${data.Seconds / 60 * 220}px`}}></div>
        <span className={styles.day}>{data.day}</span>
        <span className={styles.date}>{data.persianDate}</span>
        <span className={styles.clock}>{data.clock}</span>
      </div>
    );
  }
}

export default ClassDate;