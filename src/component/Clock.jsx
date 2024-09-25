import { useState, useEffect } from 'react';

function Clock() {
  const [date, setDate] = useState(() => new Date());

  useEffect(() => {
    const time = setInterval(() => tick(), 1000);

    return () => {
      clearInterval(time);
    };
  }, []);

  const tick = () => {
    setDate(new Date());
  };

  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <>
      <div>{formatTime(date)}</div>
    </>
  );
}

export default Clock;
