import React, { createContext, useContext, useReducer } from "react";
import {
  ordersReducer,
  ordersInitialState,
  ORDERS_ACTIONS,
} from "./reducers/OrdersReducer";


const OrdersContext = createContext(null);


export function OrdersProvider({ children }) {
  const [state, dispatch] = useReducer(ordersReducer, ordersInitialState);

  const value = {
    orders: state.orders,
    setOrders: (arr) => dispatch({ type: ORDERS_ACTIONS.SET, payload: arr }),
    addOrder: (order) => dispatch({ type: ORDERS_ACTIONS.ADD, payload: order }),
    updateOrder: (_id, patch) =>
      dispatch({ type: ORDERS_ACTIONS.UPDATE, payload: { _id, patch } }),
    removeOrder: (_id) => dispatch({ type: ORDERS_ACTIONS.REMOVE, payload: _id }),
  };

  return <OrdersContext.Provider value={value}>{children}</OrdersContext.Provider>;
}

export function useOrders() {
  const ctx = useContext(OrdersContext);
  if (!ctx) throw new Error("useOrders must be used within OrdersProvider");
  return ctx;
}

