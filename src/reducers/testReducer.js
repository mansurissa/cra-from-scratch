const testReducer = (state = 'Hello', action) => {
  switch (action.type) {
    case 'TEST':
      return { state: action.payload };
    default:
      return state;
  }
};

export default testReducer;
