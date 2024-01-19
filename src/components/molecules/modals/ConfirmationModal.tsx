import React, { FC } from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button/Button';
import { useResizeDetector } from 'react-resize-detector';

import HorizontalLine from '../../atoms/HorizontalLine';
import { ModalHeader } from '../../atoms/ModalHeader';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextContainer = styled.div`
  margin: 1rem 0;
`;

const ButtonContainer = styled.div<{ column: boolean }>`
  display: flex;
  ${({ column }) => column && 'flex-direction: column;'}
`;

interface ConfirmationModalProps {
  onConfirm?: () => void;
  confirmText?: string;
  confirmTitle?: string;
}

export const ConfirmationModal: FC<ConfirmationModalProps> = ({
  onConfirm,
  confirmText,
  confirmTitle,
}) => {
  const { width, ref } = useResizeDetector();
  const shouldTransition = width && width >= 450;

  return (
    <Container ref={ref}>
      <ModalHeader>{confirmTitle || 'Confirm'}</ModalHeader>
      <HorizontalLine />
      <TextContainer>{confirmText}</TextContainer>
      <ButtonContainer column={!!shouldTransition}>
        <Button
          onClick={onConfirm}
          variant="contained"
          size="large"
          sx={{
            color: 'black',
            backgroundColor: 'white',
            fontWeight: 700,
            fontFamily: 'Montserrat, sans-serif',
            fontStyle: 'italic',
            margin: '10px 0 0 0',
            transition: 'all 0.25s ease-in-out',

            '&:hover': {
              transform: 'scale(1.04, 1.02)',
              boxShadow: '5px 5px 10px rgba(189, 195, 199, 1)',
              backgroundColor: 'white',
            },
          }}
        >
          Confirm
        </Button>
      </ButtonContainer>
    </Container>
  );
};
