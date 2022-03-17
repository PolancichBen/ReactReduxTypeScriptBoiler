import React, { useState } from 'react';
import { Modal as ModalComponent } from '../components/molecules/Modal';

export const useModal = (
  props?: unknown
): [() => void, (contents: any) => JSX.Element] => {
  const [isOpen, setIsOpen] = useState(false);

  const triggerModal = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const Modal = ({
    contents,
    requireResponse = false,
  }: {
    contents: any;
    requireResponse?: boolean;
  }): JSX.Element => (
    <ModalComponent
      close={close}
      requireResponse={requireResponse}
      contents={contents}
      isOpen={isOpen}
      {...props}
    />
  );

  return [triggerModal, Modal];
};
