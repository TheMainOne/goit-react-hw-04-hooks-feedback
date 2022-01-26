import React, { useState } from "react";
import Section from "../Section/Section";
import List from "../Statistics/Statistics";
import Buttons from "../FeedbackButtons/FeedbackButtons";
import Notification from "../Notification/Notification";
import SecondTitle from "../SecondTitle/SecondTitle";
import GlobalStyle from "./App.styled";

const App = () => {

  const [goodFeedback, setGoodFeedback] = useState(0);
  const [neutralFeedback, setNeutralFeedback] = useState(0);
  const [badFeedback, setbadFeedback] = useState(0);


  const onLeaveFeedback = (event) => {
    const name = event.target.value;
    console.log(name);
    // this.setState((prevState) => {
    //   return {
    //     [name]: (prevState[name] += 1),
    //   };
    // });
  };

  const countTotalFeedbacks = () => {
    const totalFeedbacks = { goodFeedback } + { neutralFeedback } + {badFeedback};

    return totalFeedbacks;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedbacks = countTotalFeedbacks();

    return Math.round(({goodFeedback} / totalFeedbacks) * 100 || 0);
  };


    // const feedbackOptions = [...goodFeedback, ...neutralFeedback, ...badFeedback];
    const totalFeedbacks = countTotalFeedbacks();
    const positivePercent = countPositiveFeedbackPercentage();

    return (
      <>
        <GlobalStyle />
        <Section
          title={"Please leave feedback"}
          totalFeedbacks={totalFeedbacks}
        >
          <Buttons
            // options={feedbackOptions}
            onLeaveFeedback={onLeaveFeedback}
          />
          <SecondTitle />
          {totalFeedbacks > 0 ? (
            <List
              good={goodFeedback}
              neutral={neutralFeedback}
              bad={badFeedback}
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

export default App;


// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = (event) => {
//     const name = event.target.value;
//     this.setState((prevState) => {
//       return {
//         [name]: (prevState[name] += 1),
//       };
//     });
//   };

//   countTotalFeedbacks = () => {
//     const { good, neutral, bad } = this.state;
//     const totalFeedbacks = good + neutral + bad;

//     return totalFeedbacks;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     const totalFeedbacks = this.countTotalFeedbacks();

//     return Math.round((good / totalFeedbacks) * 100 || 0);
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const feedbackOptions = Object.keys(this.state);
//     const totalFeedbacks = this.countTotalFeedbacks();
//     const positivePercent = this.countPositiveFeedbackPercentage();

//     return (
//       <>
//         <GlobalStyle />
//         <Section
//           title={"Please leave feedback"}
//           totalFeedbacks={totalFeedbacks}
//         >
//           <Buttons
//             options={feedbackOptions}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//           <SecondTitle />
//           {totalFeedbacks > 0 ? (
//             <List
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={totalFeedbacks}
//               positivePercentage={positivePercent}
//             />
//           ) : (
//             <Notification message={"There is no feedback"} />
//           )}
//         </Section>
//       </>
//     );
//   }
// }