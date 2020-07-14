import React, { useState } from 'react';
import './App.css';

function App() {
  // const result = useState(0);
  // const count = result[0];
  // const setCount = result[1];

  const [ count, setCount ] = useState(0);

  return (
    <>
      <div className="App">
        현재 카운트는 {count}입니다.
      </div>
      <button onClick={() => setCount(count + 1)}>클릭하시면 카운트가 증가해요!</button>
    </>
  );
}

export default App;
