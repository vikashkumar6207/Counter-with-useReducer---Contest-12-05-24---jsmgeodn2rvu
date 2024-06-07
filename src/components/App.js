import React, { useReducer } from 'react';
import { counterReducer } from '../reducers/counterReducer';
import '../styles/App.css';





const App = () => {
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(counterReducer, initialState);

  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const handleDecrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  return (
    <div id="main">
      <span id="counter">{state.count}</span>
      <button id="increment-btn" onClick={handleIncrement}>
        Increment
      </button>
      <button id="decrement-btn" onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
};

export default App;