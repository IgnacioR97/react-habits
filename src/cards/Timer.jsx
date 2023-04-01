import { useState, useEffect, useRef } from "react";
import { RxClock } from "react-icons/rx";

const Timer = () => {
  const time = [
    { id: 1, time: 15 },
    { id: 2, time: 20 },
    { id: 3, time: 25 },
    { id: 4, time: 30 },
    { id: 5, time: 45 },
  ];

  const [elapsedTime, setElapsedTime] = useState(0);
  const [defaultTime, setDefaultTime] = useState(45);
  const [extraTime, setExtraTime] = useState(0);
  const [totalTime, setTotalTime] = useState((defaultTime + extraTime) * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [displayTime, setDisplayTime] = useState(`${defaultTime}:00`);
  const progressBar = useRef(null);

  useEffect(() => {
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

  const handleTimeItemClick = (item) => {
    setDefaultTime(item.time);
    setTotalTime(item.time * 60);
    setElapsedTime(0);
    setDisplayTime(`${item.time}:00`);
    progressBar.current.style.backgroundColor = "#ffa500";
  };

  return (
    <div className="card timer-card">
      <div className="timer-buttons">
        {isRunning || (
          <>
            <button onClick={handleStartClick} className="btn btn-start">
              Start
            </button>
            <button className="btn btn-time">
              <RxClock className="clock-icon clock-v2" />
              <div className="clock-container">
                <ul className="clock-list">
                  {time.map((item) => {
                    return (
                      <li
                        key={item.id}
                        className={`${
                          defaultTime === item.time
                            ? "clock-item active"
                            : "clock-item"
                        }`}
                        onClick={() => handleTimeItemClick(item)}
                      >
                        {item.time}min
                      </li>
                    );
                  })}
                </ul>
              </div>
            </button>
          </>
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
        <div className="circular-progress" ref={progressBar}>
          <div className="value-container">{displayTime}</div>
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
