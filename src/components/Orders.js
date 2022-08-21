import React from 'react';
import { Link } from 'react-router-dom'

import { ordersArray } from "../Asset/ordersArray"

import styles from "./Orders.module.css"

const Orders = () => {
  console.log(ordersArray)
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>سفارشات</h1>
      <div className={styles.ordersContainer}>
        <div className={styles.ordersTitlesContainer}>
          <span>کد سفارش</span>
          <span>تاریخ</span>
          <span className={styles.ordersTitlesTime}>ساعت</span>
          <span>وضعیت</span>
          <span className={styles.ordersTitlesPrice}>قیمت</span>
          <span>پیگیری</span>
        </div>
        <div className={styles.ordersArrayContainer}>
          {
            ordersArray.map(order => <div key={order.id}  className={styles.order}>
              <span className={styles.orderId}>#{order.id}</span>
              <span className={styles.orderDate}>{order.date}</span>
              <span className={styles.orderTime}>{order.time}</span>
              <span className={styles.orderStatus}>{order.status}</span>
              <div className={styles.orderPriceContainer}>
                <span  className={styles.orderPrice}>{order.price.toLocaleString()}</span>
                <span className={styles.orderPriceToman}>تومان</span>
              </div>
              <Link to="#" className={styles.orderLink}>جزئیات</Link>
            </div>)
          }
        </div>
      </div>
    </div>
  );
};

export default Orders;