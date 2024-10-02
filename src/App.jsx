import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import { useEffect, useState } from "react";

function App() {
  const [feedbacks, setFeedbacks] = useState(() => {
    const value = localStorage.getItem("feedbacks");
    const parse = JSON.parse(value) ?? {
      good: 0,
      neutral: 0,
      bad: 0,
    };

    return parse;
  });

  useEffect(() => {
    const stringifiedValue = JSON.stringify(feedbacks);
    localStorage.setItem("feedbacks", stringifiedValue);
  }, [feedbacks]);

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  const positiveFeedback = Math.round((feedbacks.good / totalFeedback) * 100);

  const updateFeedback = (feedbackType) => {
    setFeedbacks({ ...feedbacks, [feedbackType]: feedbacks[feedbackType] + 1 });
  };

  const resetFeedbacks = () => {
    setFeedbacks({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedbacks={resetFeedbacks}
      />
      {totalFeedback === 0 && <Notification />}
      {totalFeedback > 0 && (
        <Feedback
          feedbacks={feedbacks}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </div>
  );
}

export default App;
