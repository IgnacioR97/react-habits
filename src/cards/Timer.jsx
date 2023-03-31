import { useState, useEffect } from "react";
import { RxClock } from "react-icons/rx";

const Timer = () => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [defaultTime, setDefaultTime] = useState(10);
  const [extraTime, setExtraTime] = useState(0);
  const [totalTime, setTotalTime] = useState((defaultTime + extraTime) * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    const progressBar = document.querySelector(".circular-progress");
    const valueContainer = document.querySelector(".value-container");

    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setElapsedTime((prevElapsedTime) => {
          const updatedElapsedTime = prevElapsedTime + 1;
          const minutesRemaining = Math.floor(
            (totalTime - updatedElapsedTime) / 60
          );
          const secondsRemaining = (totalTime - updatedElapsedTime) % 60;
          valueContainer.textContent = `${minutesRemaining
            .toString()
            .padStart(2, "0")}:${secondsRemaining.toString().padStart(2, "0")}`;
          progressBar.style.background = `conic-gradient(#d3d3d3 ${
            ((totalTime - updatedElapsedTime) / totalTime) * 360
          }deg, #7AB5F8 ${
            ((totalTime - updatedElapsedTime) / totalTime) * 360
          }deg)`;
          if (updatedElapsedTime === totalTime) {
            clearInterval(intervalId);
            console.log("done");
          }
          return updatedElapsedTime;
        });
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [totalTime, isRunning]);

  const handleStartClick = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const handleAddTime = () => {
    setExtraTime((prevExtraTime) => prevExtraTime + 5 * 60);
    setTotalTime((prevTotalTime) => prevTotalTime + 5 * 60);
  };

  const handleStopTime = () => {
    setIsRunning(false);
  };

  return (
    <div className="card timer-card">
      <div className="timer-buttons">
        {isRunning || (
          <button onClick={handleStartClick} className="btn btn-start">
            Start
          </button>
        )}
        {isRunning && (
          <>
            <button onClick={handleStopTime} className="btn">
              Pause
            </button>
            <button onClick={handleAddTime} className="btn btn-5min">
              <RxClock className="clock-icon" /> Add 5 min
            </button>
          </>
        )}
      </div>
      <div className="timer-flex">
        <div className="circular-progress">
          <div className="value-container">{Math.floor(totalTime / 60)}:00</div>
          <p className="text">Remaining</p>
        </div>
      </div>
      <div className="duration-left">
        <p className="duration-amount">1/3</p>
        <p className="duration-text">Completed Today</p>
      </div>
    </div>
  );
};

export default Timer;
