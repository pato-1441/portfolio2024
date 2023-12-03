const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-slate-50 flex justify-center items-center">
      <div className="bg-white p-20 rounded-lg">
        <button
          className="absolute top-10 right-10 cursor-pointer text-base text-black"
          onClick={onClose}
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
