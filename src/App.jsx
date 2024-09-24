import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
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

  return (
    <>
      <div>
        <div>{date.toLocaleTimeString()}</div>
      </div>
    </>
  );
}

export default App;
