// ====================================
// CONSTANTS
// ====================================

const LOGIN = "LOGIN";

// ====================================
// SYNC & ASYNC ACTIONS
// ====================================

// Increment
const login = (token) => {
  return {
    type : LOGIN,
    payload : token
  };
};


// ====================================
// INITIAL STATE
// ====================================

const initialState = {
  accessToken : ''
};

// ====================================
// REDUCER : Default Export
// ====================================

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return Object.assign({},state, {accessToken : action.payload});
    default:
      return state;
  }
};

// ====================================
// STATE & DISPATCH MAPPING
// ====================================

export const mapDispatchToProps = (dispatch) => {
  return {
    login : (payload) => dispatch(login(payload))
  };
};

export const mapStateToProps = (state) => {
  return {
    
  };
};
