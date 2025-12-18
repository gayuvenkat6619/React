let initialState = {
  count: 0,
  name: "Credo Academy",
};
 
export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_INCREASE":
      return {
        ...state,
        count: state.count + 1,
      };
    case "SET_DECREASE":
      return {
        ...state,
        count: state.count - 1,
      };
    case "SET_RESET":
      return {
        ...state,
        count: 0,
      };
    case "SET_NAME":
      return {
        ...state,
        name: action.payload,
      };
 
    default:
      return state;
  }
};
 