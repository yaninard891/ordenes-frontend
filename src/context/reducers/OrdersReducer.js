
export const ordersInitialState = { orders: [] };

export const ORDERS_ACTIONS = {
  SET: "SET_ORDERS",
  ADD: "ADD_ORDER",
  UPDATE: "UPDATE_ORDER",
  REMOVE: "REMOVE_ORDER",
};

export function ordersReducer(state, action) {
  switch (action.type) {
    case ORDERS_ACTIONS.SET:
      return { ...state, orders: action.payload || [] };

    case ORDERS_ACTIONS.ADD:
      return { ...state, orders: [...state.orders, action.payload] };

    case ORDERS_ACTIONS.UPDATE: {
      const { _id, patch } = action.payload;
      return {
        ...state,
        orders: state.orders.map((o) =>
          o._id === _id ? { ...o, ...patch } : o
        ),
      };
    }

    case ORDERS_ACTIONS.REMOVE:
      return {
        ...state,
        orders: state.orders.filter((o) => o._id !== action.payload),
      };

    default:
      return state;
  }
}
