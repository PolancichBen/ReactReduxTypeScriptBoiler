import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-self: flex-end;
  width: 100%;
  height: 100px;
  border: 1px solid black;
`;

const GlobalFooter = () => {
  return <Container>Footer Global</Container>;
};

export default GlobalFooter;
