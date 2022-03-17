import React, { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const LandingPage: FC = () => {
  return <Container>Hello World</Container>;
};

export default LandingPage;
