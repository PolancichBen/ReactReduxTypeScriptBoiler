import React, { useState } from "react";
import MuiModal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { summonFlashMessage } from "../helpers/flashMessage";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  maxHeight: "80%",
  overflowY: "scroll",
  transform: "translate(-50%, -50%)",
  width: "60%",
  minWidth: 275,
  bgcolor: "background.paper",
  border: `2px solid black`,
  borderRadius: "10px",
  boxShadow: 24,
  p: 3,
};

export const useModal = (): [
  () => void, // Open Modal
  (contents: any) => JSX.Element, // Modal
  () => void // Force Close Modal
] => {
  const [isOpen, setIsOpen] = useState(false);

  const forceCloseModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  const Modal = ({
    contents,
    requireResponse = false,
  }: {
    contents: JSX.Element;
    requireResponse?: boolean;
  }): JSX.Element => {
    const closeModal = (
      e: Event,
      reason: "backdropClick" | "escapeKeyDown"
    ) => {
      if (reason && reason === "backdropClick" && requireResponse) {
        summonFlashMessage("Modal Requires Response", "warning");
        return;
      }
      setIsOpen(false);
    };

    return (
      <MuiModal
        open={isOpen}
        disableEscapeKeyDown={requireResponse}
        onClose={closeModal}
      >
        <Box sx={style}>{contents}</Box>
      </MuiModal>
    );
  };

  return [openModal, Modal, forceCloseModal];
};
