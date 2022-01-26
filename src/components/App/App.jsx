import React, { useState } from 'react';
import Section from '../Section/Section';
import List from '../Statistics/Statistics';
import Buttons from '../FeedbackButtons/FeedbackButtons';
import Notification from '../Notification/Notification';
import SecondTitle from '../SecondTitle/SecondTitle';
import GlobalStyle from './App.styled';

const App = () => {
  
  const [good, setGoodFeedback] = useState(0);
  const [neutral, setNeutralFeedback] = useState(0);
  const [bad, setbadFeedback] = useState(0);

  const onLeaveFeedback = event => {
    const name = event.target.value;

    if (name === 'good') {
      setGoodFeedback(prevState => prevState + 1);
    } else if (name === 'neutral') {
      setNeutralFeedback(prevState => prevState + 1);
    } else if (name === 'bad') {
      setbadFeedback(prevState => prevState + 1);
    }
  };

  const countTotalFeedbacks = () => {
    const totalFeedbacks = good + neutral + bad;

    return totalFeedbacks;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedbacks = countTotalFeedbacks();

    return Math.round((good / totalFeedbacks) * 100 || 0);
  };

  const feedbackOptions = ['good', 'neutral', 'bad'];
  const totalFeedbacks = countTotalFeedbacks();
  const positivePercent = countPositiveFeedbackPercentage();

  return (
    <>
      <GlobalStyle />
      <Section title={'Please leave feedback'} totalFeedbacks={totalFeedbacks}>
        <Buttons options={feedbackOptions} onLeaveFeedback={onLeaveFeedback} />
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
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </>
  );
};

export default App;
