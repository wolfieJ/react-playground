import React,  { useState } from 'react';
import './App.css';

const App = () => {
  const [count, updateCount] = useState({count1: 10, count2: 20});
  const { count1, count2 } = count;
  const incrementOnClick = () => updateCount(currentState => ({...currentState, count1: currentState.count1 + 1, count2: currentState.count2 + 10}));
  const decrementOnClick = () => updateCount(currentState => ({...currentState, count1: currentState.count1 - 1, count2: currentState.count2 - 10}));

  return (    
  <>
    <button onClick={() => incrementOnClick()}>Increment + </button>
    <button onClick={() => decrementOnClick()}>Decrement - </button>
    <div className="CountersSpacing">
      <div>Count 1: {count1}</div>
      <div>Count 2: {count2}</div>
    </div>
  </>)
}

export default App;
