import React, { FC } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';

import { useAppDispatch } from '../../store';
import { setIsSignUpAndInModalOpen } from '../../store/site';

const Container = styled.div`
  display: flex;
  background-color: gray;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 60px;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
`;

interface GlobalHeaderProps {
  signedIn: boolean;
}

const GlobalHeader: FC<GlobalHeaderProps> = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return <Container></Container>;
};

export default GlobalHeader;
