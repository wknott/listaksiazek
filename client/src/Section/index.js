import React from "react";
import { StyledSection, SectionHeader } from "./styled";

const Section = ({ title, children }) => (
  <StyledSection>
    <SectionHeader>{title}</SectionHeader>
    {children}
  </StyledSection>
)

export default Section;