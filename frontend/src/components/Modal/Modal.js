import './modal.css';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button type="button" className="close-btn px-4 py-2 bg-red-500 rounded-lg" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};
export default Modal;