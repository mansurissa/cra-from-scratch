const testReducer = (state = 'Hello', action) => {
  switch (action.type) {
    case 'TEST':
      return action.payload;
    default:
      return state;
  }
};

export default testReducer;
