import React, { useState } from "react";
import "./App.css";
import Section from "./components/Section";
import Statistics from "./components/Statistics";
import FeedbackOptions from "./components/FeedbackOptions";
import Notification from "./components/Notification";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function countTotalFeedback() {
    return good + neutral + bad;
  }

  function countPositiveFeedbackPercentage() {
    return Math.round((good / (good + neutral + bad)) * 100);
  }

  return (
    <>
      <div className="container">
        <h1>Feedback</h1>
      </div>

      <Section title={"Please leave feedback"}>
        <FeedbackOptions
          onGoodClick={() => setGood(good + 1)}
          onNeutralClick={() => setNeutral(neutral + 1)}
          onBadClick={() => setBad(bad + 1)}
        />
      </Section>

      <Section title={"Statistics:"}>
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </>
  );
}

export default App;
