import React from "react";
import propTypes from "prop-types";
import { NotificationStyled } from "./Notification.styled";

const Notification = ({ message }) => {
  return <NotificationStyled>{message}</NotificationStyled>;
};

Notification.propTypes = {
  message: propTypes.string.isRequired,
};

export default Notification;
