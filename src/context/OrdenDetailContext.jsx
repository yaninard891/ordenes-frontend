import React, { createContext, useContext, useReducer } from "react";
import { detailReducer, detailInitialState, DETAIL_ACTIONS } from "./reducers/DetailReducer.js";

const DetailContext = createContext(null);

export function OrderDetailProvider({ children }) {
  const [state, dispatch] = useReducer(detailReducer, detailInitialState);

  const value = {
    selectedId: state.selectedId,
    open: state.open,
    openDetail: (id) => dispatch({ type: DETAIL_ACTIONS.OPEN, payload: id }),
    closeDetail: () => dispatch({ type: DETAIL_ACTIONS.CLOSE }),
  };

  return <DetailContext.Provider value={value}>{children}</DetailContext.Provider>;
}

export function useOrderDetailContext() {
  const ctx = useContext(DetailContext);
  if (!ctx) throw new Error("useOrderDetailContext must be used within DetailProvider");
  return ctx;
}
