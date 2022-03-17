import React, { FC } from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';
import { CloseIcon } from '../atoms/CloseIcon';

const CloseButton = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  background: none;
  border: none;
  width: auto;
  height: 1.5rem;

  :hover {
    cursor: pointer;
  }
`;

const ModalContentSizeDefinitions: Record<string, string> = {
  full: 'auto',
  large: '60rem',
  medium: '45rem',
  small: '30rem',
};

const Wrapper = styled(ReactModal)<{ size: string }>`
  .ReactModal__Body--open {
    overflow-y: scroll;
  }

  margin: 1rem;
  width: ${({ size }) => ModalContentSizeDefinitions[size]};

  @media (min-width: 800px) {
    position: absolute;
    top: 10rem;
    display: flex;
    flex-direction: column;
    left: 50%;
    transform: translate(-50%);
    right: auto;
    bottom: auto;
    outline: 0;
  }
`;

const StyledReactModal = styled(
  ({ className, size, requireResponse, ...props }) => (
    // Wrapper around ReactModal to position the children of the modal
    <Wrapper
      overlayClassName={className}
      size={size}
      shouldCloseOnOverlayClick={!requireResponse}
      closeTimeoutMS={250}
      {...props}
    />
  )
)`
  /* overlay class properties */
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: auto;
  transition: opacity 250ms ease-in-out;
  opacity: 0;
  z-index: 99;
  &[class*='after-open'] {
    opacity: 1;
  }
  &[class*='before-close'] {
    opacity: 0;
  }
`;

interface ModalProps {
  isOpen: boolean;
  close: () => void;
  size?: string;
  contents: any;
  requireResponse?: boolean;
}

// The app element allows you to specify the portion of your app
// that should be hidden (via aria-hidden) to prevent assistive technologies
// such as screenreaders from reading content outside of the content of your modal.
ReactModal.setAppElement('#root');

export const Modal: FC<ModalProps> = ({
  isOpen,
  size = 'full',
  contents,
  requireResponse = false,
  ...props
}) => {
  return (
    <StyledReactModal
      size={size}
      isOpen={isOpen}
      requireResponse={requireResponse}
      onRequestClose={props.close}
      {...props}
    >
      {!requireResponse && (
        <CloseButton onClick={props.close} aria-label="close modal">
          <CloseIcon />
        </CloseButton>
      )}
      {contents(props)}
    </StyledReactModal>
  );
};
