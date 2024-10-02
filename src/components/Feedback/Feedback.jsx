import styles from "./Feedback.module.css";

const Feedback = ({ feedbacks, totalFeedback, positiveFeedback }) => {
  return (
    <ul className={styles.list}>
      <li className={styles.items}>Good: {feedbacks.good}</li>
      <li className={styles.items}>Neutral: {feedbacks.neutral}</li>
      <li className={styles.items}>Bad: {feedbacks.bad}</li>
      <li className={styles.items}>Total: {totalFeedback}</li>
      <li className={styles.items}>Positive: {positiveFeedback}%</li>
    </ul>
  );
};

export default Feedback;
