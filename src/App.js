/* eslint-disable no-console */
import React, { useState } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import sayHello from './actionCreators/index';

const mapStateToProps = (state) => ({ greating: state.testReducer });
const mapDispatchToProps = (dispatch) => ({
  sayHelloer: (e) => dispatch(sayHello(e)),
});

const Button = ({ onClick }) => <button onClick={onClick}>Display</button>;

const App = ({ greating, sayHelloer }) => {
  const [state, setstate] = useState('');
  const handleClick = () => sayHelloer(state);
  const handleChange = (e) => setstate(e.target.value);
  return (
    <div>
      <h1>{greating}</h1>
      <input onChange={handleChange} value={state} />
      <Button onClick={handleClick} />
    </div>
  );
};

Button.propTypes = {
  onClick: propTypes.func.isRequired,
};
App.propTypes = {
  greating: propTypes.string.isRequired,
  sayHelloer: propTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
