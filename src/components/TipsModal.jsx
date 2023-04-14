import { useState } from "react";
import tips from "../tips";
import { RxArrowLeft, RxArrowRight } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";

const TipsModal = ({ setOpenModal }) => {
  const [currentNum, setCurrentNum] = useState(0);
  const { tip } = tips[currentNum];

  const closeModal = () => {
    setOpenModal(false);
  };

  const increaseNum = () => {
    let newNum = currentNum + 1;
    if (newNum > tips.length - 1) {
      setCurrentNum(0);
    } else {
      setCurrentNum(newNum);
    }
  };

  const decreaseNum = () => {
    let newNum = currentNum - 1;
    if (newNum === -1) {
      setCurrentNum(tips.length - 1);
    } else {
      setCurrentNum(newNum);
    }
  };

  return (
    <>
      <div className="background" onClick={closeModal}></div>
      <div className="modal">
        <div>
          <h4>{tip}</h4>
          <div className="buttons">
            <button className="btn-left" onClick={decreaseNum}>
              <RxArrowLeft className="modal-icon" />
            </button>
            <div className="selectors">
              {tips.map((tip, index) => {
                return (
                  <div
                    key={index}
                    className={`selector ${
                      index === currentNum ? "active" : ""
                    }`}
                    onClick={() => setCurrentNum(index)}
                  ></div>
                );
              })}
            </div>
            <button className="btn-right" onClick={increaseNum}>
              <RxArrowRight className="modal-icon" />
            </button>
          </div>
          <button className="close-btn" onClick={closeModal}>
            <MdOutlineClose />
          </button>
        </div>
      </div>
    </>
  );
};
export default TipsModal;
