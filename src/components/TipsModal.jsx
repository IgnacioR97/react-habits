import { useState } from "react";
import tips from "../tips";
import { RxArrowLeft, RxArrowRight } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";

const TipsModal = ({ setOpenModal }) => {
  const [currentNum, setCurrentNum] = useState(0);
  const { tip } = tips[currentNum];

  return (
    <>
      <div className="background" onClick={() => setOpenModal(false)}></div>
      <div className="modal">
        <h4>{tip}</h4>
        <div className="buttons">
          <button
            className="btn-left"
            onClick={() => setCurrentNum(1 - currentNum)}
          >
            <RxArrowLeft />
          </button>
          <button
            className="btn-right"
            onClick={() => setCurrentNum(1 + currentNum)}
          >
            <RxArrowRight />
          </button>
        </div>
        <button className="close-btn" onClick={() => setOpenModal(false)}>
          <MdOutlineClose />
        </button>
      </div>
    </>
  );
};
export default TipsModal;
