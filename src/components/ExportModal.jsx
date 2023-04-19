import { MdOutlineClose } from "react-icons/md";

const ExportModal = ({ setModal }) => {
  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      <div className="background" onClick={closeModal}></div>
      <div className="modal modal--export">
        <div className="modal-export--container">
          <input
            type="text"
            className="modal-input form-input"
            placeholder="Title"
            autoComplete="off"
          />
          <button className="export-btn btn-hover">Save</button>
        </div>
        <div className="modal-export--main">
          <h2>Other files</h2>
          <ul className="export-list">
            <li className="export-item">
              <h5 className="export-item--title">Mr.Clark Science project</h5>
              <div className="export-text--block"></div>
            </li>
            <li className="export-item">
              <h5 className="export-item--title">
                New John Wick but I don't know how to save the economy
              </h5>
              <div className="export-text--block"></div>
            </li>
            <li className="export-item">
              <h5 className="export-item--title">Fortnite lol</h5>
              <div className="export-text--block"></div>
            </li>
          </ul>
        </div>
        <button className="close-btn btn-hover" onClick={closeModal}>
          <MdOutlineClose />
        </button>
      </div>
    </>
  );
};
export default ExportModal;
