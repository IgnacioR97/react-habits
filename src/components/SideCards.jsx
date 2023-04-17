import { RxUpload } from "react-icons/rx";
import Timer from "../cards/Timer";
import Tips from "../cards/Tips";
import TodoList from "../cards/TodoList";
import { useState } from "react";
import ExportModal from "./ExportModal";

const SideCards = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className="side-cards">
      <div className="cards-flex">
        <button className="export-btn btn-hover" onClick={() => setModal(true)}>
          <RxUpload /> Export
        </button>
      </div>
      <div className="cards">
        <TodoList />
        <Timer />
        <Tips />
      </div>
      {modal && <ExportModal setModal={setModal} />}
    </div>
  );
};
export default SideCards;
