import React from "react";
import propTypes from "prop-types";
import { SectionStyles, SectionTitle } from "./Section.styled";

const Section = ({ title, children }) => {
  return (
    <SectionStyles>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionStyles>
  );
};

Section.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.arrayOf(propTypes.object).isRequired,
};

export default Section;
