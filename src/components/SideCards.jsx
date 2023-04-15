import { RxUpload } from "react-icons/rx";
import Timer from "../cards/Timer";
import Tips from "../cards/Tips";
import TodoList from "../cards/TodoList";

const SideCards = () => {
  return (
    <div className="side-cards">
      <div className="cards-flex">
        <button className="export-btn btn-hover">
          <RxUpload /> Export
        </button>
      </div>
      <div className="cards">
        <TodoList />
        <Timer />
        <Tips />
      </div>
    </div>
  );
};
export default SideCards;
