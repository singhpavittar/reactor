// ====================================
// CONSTANTS
// ====================================

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET_COUNTER = "RESET_COUNTER";

// ====================================
// SYNC & ASYNC ACTIONS
// ====================================

// Increment
const increment = () => {
  return {
    type : INCREMENT,
    payload : 1
  };
};

// Decrement
const decrement = () => {
  return {
    type : DECREMENT,
    payload : -1
  };
};

// Reset counter
const resetcounter = () => {
  return {
    type : RESET_COUNTER
  };
};

// ====================================
// INITIAL STATE
// ====================================

const initialState = 0;

// ====================================
// REDUCER : Default Export
// ====================================

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + action.payload;
    case DECREMENT:
      return state + action.payload;
    case RESET_COUNTER:
      return 0;
    default:
      return state;
  }
};

// ====================================
// STATE & DISPATCH MAPPING
// ====================================

export const mapDispatchToProps = (dispatch) => {
  return {
    increment : () => dispatch(increment()),
    decrement : () => dispatch(decrement()),
    resetcounter : () => dispatch(resetcounter())
  };
};

export const mapStateToProps = (state) => {
  return {
    home: state.home
  };
};
