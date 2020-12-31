import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import sayHello from './actionCreators';

const App = () => {
  const greating = useSelector((state) => state.testReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{greating}</h1>
      <button onClick={() => dispatch(sayHello())}>Exagrete</button>
    </div>
  );
};

export default App;
