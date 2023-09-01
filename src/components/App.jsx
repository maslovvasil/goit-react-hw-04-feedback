import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Statistics from './Statistics';
import Notification from './Notification';

const App = () => {
  const [btnGood, setBtnGood] = useState(0);
  const [btnNeutral, setBtnNeutral] = useState(0);
  const [btnBad, setBtnBad] = useState(0);
  const buttons = {
    good: btnGood,
    neutral: btnNeutral,
    bad: btnBad,
  };

  const handleClick = type => {
    switch (type) {
      case 'good':
        setBtnGood(btnGood + 1);
        break;
      case 'neutral':
        setBtnNeutral(btnNeutral + 1);
        break;
      case 'bad':
        setBtnBad(btnBad + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    const categories = [btnGood, btnNeutral, btnBad];
    return categories.reduce((acc, item) => acc + item, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return (
      countTotalFeedback() > 0 &&
      Math.floor((btnGood / countTotalFeedback()) * 100)
    );
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions buttons={buttons} handleClick={handleClick} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() <= 0 ? (
          <Notification message="There is no Feedback" />
        ) : (
          <Statistics
            buttons={buttons}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </>
  );
};

export default App;