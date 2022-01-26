import React, { Component } from "react";
import Section from "../Section/Section";
import List from "../Statistics/Statistics";
import Buttons from "../FeedbackButtons/FeedbackButtons";
import Notification from "../Notification/Notification";
import SecondTitle from "../SecondTitle/SecondTitle";
import GlobalStyle from "./App.styled";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (event) => {
    const name = event.target.value;
    this.setState((prevState) => {
      return {
        [name]: (prevState[name] += 1),
      };
    });
  };

  countTotalFeedbacks = () => {
    const { good, neutral, bad } = this.state;
    const totalFeedbacks = good + neutral + bad;

    return totalFeedbacks;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedbacks = this.countTotalFeedbacks();

    return Math.round((good / totalFeedbacks) * 100 || 0);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const feedbackOptions = Object.keys(this.state);
    const totalFeedbacks = this.countTotalFeedbacks();
    const positivePercent = this.countPositiveFeedbackPercentage();

    return (
      <>
        <GlobalStyle />
        <Section
          title={"Please leave feedback"}
          totalFeedbacks={totalFeedbacks}
        >
          <Buttons
            options={feedbackOptions}
            onLeaveFeedback={this.onLeaveFeedback}
          />
          <SecondTitle />
          {totalFeedbacks > 0 ? (
            <List
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedbacks}
              positivePercentage={positivePercent}
            />
          ) : (
            <Notification message={"There is no feedback"} />
          )}
        </Section>
      </>
    );
  }
}

export default App;
