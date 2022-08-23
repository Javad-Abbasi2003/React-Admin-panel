import React from "react";
import { Link } from 'react-router-dom'

import { commentsArray } from "../Asset/commentsArray"

import styles from "./Comments.module.css";

const Comments = () => {
  document.title = "Admin Panel - Comments";

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>نظرات</h1>
      <div className={styles.commentsContainer}>
        <div className={styles.commentsTitlesContainer}>
          <span className={styles.commentsTitlesUser}>کاربر</span>
          <span className={styles.commentsTitlesDate}>تاریخ</span>
          <span className={styles.commentsTitlescomment}>متن</span>
          <span className={styles.commentsTitlesStatus}>وضعیت</span>
          <span>پیگیری</span>
        </div>
        <div className={styles.commentsArrayContainer}>
          {
            commentsArray.map((comment) => <div key={comment.id} className={styles.comment}>
              <span className={styles.commentName}>{comment.user}</span>
              <span className={styles.commentDate}>{comment.date}</span>
              <span className={styles.commentText}>{comment.text}</span>
              <span className={styles.commentStatus}>{comment.status}</span>
              <Link to="#" className={styles.commentLink}>جزئیات</Link>
            </div>)
          }
        </div>
      </div>
    </div>
  );
};

export default Comments;