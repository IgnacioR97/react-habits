const ExportModal = ({ setModal }) => {
  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      <div className="background" onClick={closeModal}></div>
      <div className="modal modal--export">
        <div className="modal-container">
          <input type="text" className="modal-title" />
        </div>
      </div>
    </>
  );
};
export default ExportModal;
