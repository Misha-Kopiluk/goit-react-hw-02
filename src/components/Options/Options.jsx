import styles from "./Options.module.css";

const Options = ({ updateFeedback, totalFeedback, resetFeedbacks }) => {
  return (
    <div className={styles.wrapper}>
      <button
        className={styles.btn}
        onClick={() => updateFeedback("good")}
        type="button"
      >
        Good
      </button>
      <button
        className={styles.button}
        onClick={() => updateFeedback("neutral")}
        type="button"
      >
        Neutral
      </button>
      <button
        className={styles.button}
        onClick={() => updateFeedback("bad")}
        type="button"
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button
          className={styles.button}
          onClick={resetFeedbacks}
          type="button"
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
