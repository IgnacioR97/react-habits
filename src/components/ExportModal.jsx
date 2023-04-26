import { MdOutlineClose } from "react-icons/md";
import { BiTrash } from "react-icons/bi";
import { useGlobalContext } from "../context";

const ExportModal = ({ setModal }) => {
  const { title, setTitle } = useGlobalContext();
  const closeModal = () => {
    setModal(false);
  };

  const data = [
    {
      id: 0,
      title: "Mr.Clark Science project",
    },
    {
      id: 1,
      title: "New John Wick but I don't know how to save the economy",
    },
    {
      id: 2,
      title: "Fortnite lol",
    },
    {
      id: 3,
      title: "New Chapter",
    },
  ];

  const history = [
    {
      id: 0,
      title: "Tuesday, April 25, 8:39",
      changes: "Hello this is the difference in files, I hope you like it.",
    },
    {
      id: 1,
      title: "Sunday, April 23, 12:19",
      changes: "I added and changed some stuff, I hope you like it.",
    },
    {
      id: 2,
      title: "Tuesday, April 25, 8:39",
      changes: "Hello this is the difference in files, I hope you like it.",
    },
    {
      id: 3,
      title: "Sunday, April 23, 12:19",
      changes: "I added and changed some stuff, I hope you like it.",
    },
    {
      id: 4,
      title: "Tuesday, April 25, 8:39",
      changes: "Hello this is the difference in files, I hope you like it.",
    },
    {
      id: 5,
      title: "Sunday, April 23, 12:19",
      changes: "I added and changed some stuff, I hope you like it.",
    },
  ];

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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button className="export-btn btn-hover">Save</button>
        </div>
        <div className="modal-export--main">
          <div className="cards">
            <h2>Your Files</h2>
            <ul className="export-list">
              {data.map((item) => {
                const { id, title } = item;
                return (
                  <li className="export-item" key={id}>
                    <h5 className="export-item--title">
                      {title.slice(0, 20)}...
                    </h5>
                    <button className="export-remove">
                      <BiTrash className="export-icon" />
                    </button>
                    <div className="export-text--block"></div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="history">
            {/* <h2 className="history-title">Edit History</h2> */}
            <div className="history-cards">
              {history.map((item) => {
                const { id, title, changes } = item;
                return (
                  <div className="history-card" key={id}>
                    <h3>{title}</h3>
                    <p>{changes}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <button className="close-btn btn-hover" onClick={closeModal}>
          <MdOutlineClose />
        </button>
      </div>
    </>
  );
};
export default ExportModal;
