import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router';

const Container = styled.div``;

const RouteComponent = (Component: any, path: string, ...rest: any[]) => {
  return (
    // <Route path={path}>
    <React.Fragment>
      <Container>
        <Component {...rest} />
      </Container>
    </React.Fragment>
  );
};

export default RouteComponent;
