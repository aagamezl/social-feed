import React from 'react';

import styled from 'styled-components';

const Title = styled.span`
  font-size: 32px;
  font-weight: bold;
  display: block;

  &:after {
    content: "";
  }

  @media (min-width: 1281px) {
    &:after {
      content: ":";
    }

    display: inline;
    font-size: 20px;
  }
`;

const SectionContent= styled.div`
  margin-bottom: 15px;
  font-size: 24px;

  @media (min-width: 1281px) {
    margin-bottom: 5px;
    font-size: 18px;
  }
`;

const Section = (props) => {
  return (
    <SectionContent><Title>{props.title}</Title> {props.content}</SectionContent>
  )
}

export default Section
