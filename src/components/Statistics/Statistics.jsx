import React from "react";
import propTypes from "prop-types";
import { ListStyled, ListItem } from "./Statistics.styled";

const List = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ListStyled>
      <ListItem><span>Good: </span><span>{good}</span></ListItem>
      <ListItem><span>Neutral: </span><span>{neutral}</span></ListItem>
      <ListItem><span>Bad: </span><span>{bad}</span></ListItem>
      <ListItem><span>Total: </span><span>{total}</span></ListItem>
      <ListItem><span>Positive feedback: </span><span>{positivePercentage}%</span></ListItem>
    </ListStyled>
  );
};

List.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.number.isRequired,
};

export default List;
