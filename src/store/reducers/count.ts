const initialState = 0;
const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "INCREASE":
      return action.count + 1;
    case "DECREASE":
      return action.count - 1;
    default:
      return state;
  }
};
export default reducer;
