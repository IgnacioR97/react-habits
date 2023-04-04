import { useState, useEffect, useRef } from "react";
import { RxClock } from "react-icons/rx";

const Timer = () => {
  const [mode, setMode] = useState("light-theme");

  useEffect(() => {
    document.documentElement.className = mode;
  }, [mode]);

  const time = [
    { id: 1, time: 15 },
    { id: 2, time: 20 },
    { id: 3, time: 25 },
    { id: 4, time: 30 },
    { id: 5, time: 45 },
    { id: 6, time: 0.1 },
  ];

  const [elapsedTime, setElapsedTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [defaultTime, setDefaultTime] = useState(45);
  const [extraTime, setExtraTime] = useState(0);
  const [totalTime, setTotalTime] = useState((defaultTime + extraTime) * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreakTime, setIsBreakTime] = useState(false);
  const [displayTime, setDisplayTime] = useState(`${defaultTime}:00`);
  const progressBarRef = useRef(null);
  const [completedToday, setCompletedToday] = useState(0);

  useEffect(() => {
    setTotalTime((defaultTime + extraTime) * 60);
    setElapsedTime(0);
    setDisplayTime(`${defaultTime}:00`);
  }, [defaultTime, extraTime]);

  useEffect(() => {
    const progressBar = progressBarRef.current;
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
          if (mode === "light-theme") {
            progressBar.style.background = `conic-gradient(#d3d3d3 ${
              ((totalTime - updatedElapsedTime) / totalTime) * 360
            }deg, #7AB5F8 ${
              ((totalTime - updatedElapsedTime) / totalTime) * 360
            }deg)`;
          } else {
            progressBar.style.background = `conic-gradient(#d3d3d3 ${
              ((totalTime - updatedElapsedTime) / totalTime) * 360
            }deg, #4057af ${
              ((totalTime - updatedElapsedTime) / totalTime) * 360
            }deg)`;
          }

          if (updatedElapsedTime === totalTime) {
            setIsBreakTime(true);
            setIsActive(false);
            setDefaultTime(5);
            setExtraTime(0);
            setTotalTime((defaultTime + extraTime) * 60);
            setDisplayTime(`${defaultTime}:00`);
            setMode("light-theme");
          }
          return updatedElapsedTime;
        });
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [totalTime, isRunning, isBreakTime]);

  useEffect(() => {
    localStorage.setItem("completedToday", completedToday);
  }, [completedToday]);

  const handleStartClick = () => {
    if (isBreakTime) {
      setElapsedTime(0);
      setIsActive(false);
      setDefaultTime(45);
      setExtraTime(0);
      setTotalTime((45 + 0) * 60);
      setIsRunning(false);
      setIsBreakTime(false);
    } else {
      setMode("dark-theme");
      setIsRunning((prevIsRunning) => !prevIsRunning);
      setIsActive(true);
      setTotalTime((defaultTime + extraTime) * 60);
    }
  };

  const handleAddTime = () => {
    setExtraTime((prevExtraTime) => prevExtraTime + 5);
    setTotalTime((prevTotalTime) => prevTotalTime + 5);
  };

  const handleStopTime = () => {
    setMode("light-theme");
    setIsActive(false);
    setIsRunning(false);
  };

  const handleTimeItemClick = (item) => {
    setDefaultTime(item.time);
    setTotalTime(item.time * 60);
    setElapsedTime(0);
    setDisplayTime(`${item.time}:00`);
  };

  return (
    <div className="card timer-card">
      <div className="timer-buttons">
        {isActive || (
          <>
            <button onClick={handleStartClick} className="btn btn-start">
              {isBreakTime ? "Skip Break" : "Start"}
            </button>
            {isBreakTime || (
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
            )}
          </>
        )}
        {isActive && (
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
        <div className="circular-progress" ref={progressBarRef}>
          <div className="value-container">{displayTime}</div>
          <p className="text">Remaining</p>
        </div>
      </div>
      <div className="duration-left">
        <p className="duration-amount">{completedToday}/3</p>
        <p className="duration-text">Completed Today</p>
      </div>
    </div>
  );
};

export default Timer;
