import { useState } from "react";
import TipsModal from "../components/TipsModal";

const Tips = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="card card-tips">
      <h2 className="tips-header">Become More Productive</h2>
      <p className="tips-info">
        Here are some simple tips to highly increase your productivity with
        ease.
      </p>
      <div className="btn-container">
        <button
          className="tips-btn btn-hover"
          onClick={() => setOpenModal(true)}
        >
          view tips
        </button>
      </div>
      {openModal && <TipsModal setOpenModal={setOpenModal} />}
    </div>
  );
};
export default Tips;
