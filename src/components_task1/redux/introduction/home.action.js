export const handleIncrease = () => {
  return {
    type: "SET_INCREASE",
  };
};
 
export const handleDecrease = () => {
  return {
    type: "SET_DECREASE",
  };
};
 
export const handleReset = () => {
  return {
    type: "SET_RESET",
  };
};
 
export const handleSetName = (name) => {
  return {
    type: "SET_NAME",
    payload: name,
  };
};