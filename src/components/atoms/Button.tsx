import React from 'react';
import styled from 'styled-components';

export const Button = styled.button<
  React.ComponentProps<'button'> & React.HTMLAttributes<HTMLButtonElement>
>`
  transition: all 0.25s ease-in-out;
  padding: 8px 35px;
  border-radius: 25px;
  cursor: ${({ disabled }) => !disabled && 'pointer'};
  border: none;
  background-color: transparent;

  :hover {
    ${({ disabled }) =>
      !disabled &&
      `
      transform: scale(1.04, 1.02);
      box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.4);
      `}
  }
`;
