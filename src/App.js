import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log('useEffectが実行されました');
  }, [count]);

  return (
    <div className='App'>
      <h1>Learn useEffect</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
      <h2>Count2: {count2}</h2>
      <button onClick={() => setCount2((prevCount) => prevCount + 1)}>+</button>
    </div>
  );
}

export default App;
