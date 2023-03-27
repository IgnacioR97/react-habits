import { RxUpload } from "react-icons/rx";
import Timer from "../cards/Timer";
import TodoList from "../cards/TodoList";

const SideCards = () => {
  return (
    <div className="side-cards">
      <div className="cards-flex">
        <button className="export-btn">
          <RxUpload /> Export
        </button>
      </div>
      <div className="cards">
        <TodoList />
        <Timer />
      </div>
    </div>
  );
};
export default SideCards;
