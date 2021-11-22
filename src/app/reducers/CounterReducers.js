const initialState = { count: 0, payload: {} };

export function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "DATOS":
      return {
        ...state,
        payload: action.payload
      };

    default:
      return state;
  }
}
