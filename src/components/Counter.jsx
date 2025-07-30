import React, { useState } from 'react';

export default function Counter({ initial = 0, label = 'Count' }) {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div>
      <h2>{label}: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
