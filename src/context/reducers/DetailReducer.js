

export const detailInitialState = {
  selectedId: null,
  open: false,
};

export const DETAIL_ACTIONS = {
  OPEN: "OPEN",
  CLOSE: "CLOSE",
};

export function detailReducer(state, action) {
  switch (action.type) {
    case DETAIL_ACTIONS.OPEN:
      return { ...state, selectedId: action.payload, open: true };
    case DETAIL_ACTIONS.CLOSE:
      return { ...state, open: false };
    default:
      return state;
  }
}
