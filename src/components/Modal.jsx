import React from "react";

const Modal = ({ children, onClose }) => {
  return (
    <React.Fragment>
      <div
        className="fixed w-full h-screen bg-[rgba(0,0,0,0.6)] z-[1] left-0 top-0"
        onClick={onClose}
      />
      <dialog
        open
        className="shadow-[0_2px_8px_rgba(0,0,0,0.2)] overflow-hidden z-[1] p-0 rounded-md border-[none]"
      >
        {children}
      </dialog>
    </React.Fragment>
  );
};

export default Modal;
