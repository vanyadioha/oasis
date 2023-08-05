export const navMenuReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_STATE":
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
};
