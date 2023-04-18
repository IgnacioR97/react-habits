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
          <button className="save"></button>
        </div>
      </div>
    </>
  );
};
export default ExportModal;
