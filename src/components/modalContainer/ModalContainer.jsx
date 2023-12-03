import { useState } from "react";
import Modal from "../modal/Modal.jsx";

const ModalContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    console.log("test open modal");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log("test close modal");
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Currículum</button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Currículum</h2>
        <p>pdf.</p>
        <button onClick={closeModal}>Cerrar Modal</button>
      </Modal>
    </div>
  );
};

export default ModalContainer;
