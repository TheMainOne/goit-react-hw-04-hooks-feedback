import React from "react";
import propTypes from "prop-types";
import { Button, Wrapper } from "./FeedbackButtons.styled";

const Buttons = ({ options, onLeaveFeedback }) => {
  return (
    <Wrapper>
      {options.map((option) => (
        <Button
          key={option}
          value={option}
          type="button"
          onClick={onLeaveFeedback}
        >
          {option}
        </Button>
      ))}
    </Wrapper>
  );
};

// Buttons.propTypes = {
//   options: propTypes.arrayOf(propTypes.string).isRequired,
//   onLeaveFeedback: propTypes.func.isRequired,
// };

export default Buttons;
