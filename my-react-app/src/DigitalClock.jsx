import { useState, useEffect } from "react";

function DigitalClock() {
  const [currentTime, setCurrentTime] = useState({
    hours: padZero(new Date().getHours() % 12 || 12),
    minutes: padZero(new Date().getMinutes()),
    seconds: padZero(new Date().getSeconds()),
    meridiem: new Date().getHours() >= 12 ? "PM" : "AM",
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime({
        hours: padZero(new Date().getHours() % 12 || 12),
        minutes: padZero(new Date().getMinutes()),
        seconds: padZero(new Date().getSeconds()),
        meridiem: new Date().getHours() >= 12 ? "PM" : "AM",
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function padZero(number) {
    return number < 10 ? "0" + number : number;
  }

  return (
    <>
      <div className="clock-container">
        <div className="clock">
          <span>{`${currentTime.hours} :
             ${currentTime.minutes} :
              ${currentTime.seconds} 
              ${currentTime.meridiem}`}</span>
        </div>
        <p></p>
      </div>
    </>
  );
}

export default DigitalClock;
