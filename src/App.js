import React, { Component } from "react";
import "./App.css";
import Section from "./components/Section";
import Statistics from "./components/Statistics";
import FeedbackOptions from "./components/FeedbackOptions";
import Notification from "./components/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increaseValue = (e) => {
    this.setState((prevState) => ({
      [e.target.dataset.value]: prevState[e.target.dataset.value] + 1,
    }));

    console.log(e.target.dataset.value);
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    return Math.round(
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)) *
        100
    );
  }

  render() {
    const { good, neutral, bad } = this.state;
    const valueKeys = Object.keys(this.state);

    return (
      <>
        <div className="container">
          <h1>Feedback</h1>
        </div>

        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            option={valueKeys}
            onLeaveFeedback={this.increaseValue}
          />
        </Section>

        <Section title={"Statistics:"}>
          {this.countTotalFeedback() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
