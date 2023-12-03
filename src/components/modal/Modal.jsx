import { XCircle } from "lucide-react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="text-black fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-5/6 sm:w-fit sm:h-3/4 flex justify-center items-center rounded-xl shadow-black drop-shadow-lg z-20">
      <div className="flex flex-col w-full h-full py-16 px-10 bg-white rounded-lg items-center justify-between">
        <button
          className="absolute top-5 right-5 sm:top-10 sm:right-10 cursor-pointer text-base text-black"
          onClick={onClose}
        >
          <XCircle />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
