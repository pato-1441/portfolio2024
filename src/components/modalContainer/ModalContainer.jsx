import { useState } from "react";
import Modal from "../modal/Modal.jsx";
import { FileText } from "lucide-react";

const ModalContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button
        className="flex w-fit items-center gap-2 transition-all duration-150 sm:text-base font-medium px-4 py-2 rounded-xl text-black bg-white hover:shadow-black hover:shadow-button hover:scale-105 hover:-rotate-2"
        onClick={openModal}
      >
        Currículum
        <FileText size={22} />
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div>
          <h2>Currículum</h2>
          <p>pdf</p>
        </div>
        <button
          className="flex w-fit items-center transition-all duration-150 text-base font-medium px-2 py-1 rounded-lg text-black bg-white border border-white hover:shadow-black hover:shadow-button"
          onClick={closeModal}
        >
          Cerrar Modal
        </button>
      </Modal>
    </div>
  );
};

export default ModalContainer;
