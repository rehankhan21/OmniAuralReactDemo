const initialState = {
  selectedState: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_STATE":
      return {
        ...state,
        selectedState: action.payload,
      };
    case "DESELECT_STATE":
      return {
        ...state,
        selectedState: null,
      };
    default:
      return state;
  }
};

export default reducer;
