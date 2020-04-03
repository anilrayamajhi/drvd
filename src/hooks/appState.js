import React, { createContext, useContext, useReducer } from "react";

// Input value is shared between multiple component
// Created a store to avoid prop drills
// Composition could be the better for this use case
// However, chose Context thinking scalability
const InputContext = createContext(),
  reducer = (state, action) => {
    switch (action.type) {
      case "INPUT_SUBMIT":
        return {
          ...state,
          value: parseInt(action.payload),
        };
      default:
        return state;
    }
  };

function StoreProvider({ initialState = { value: 100 }, children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <InputContext.Provider value={{ state, dispatch }} children={children} />
  );
}

const useStore = () => useContext(InputContext);

export { StoreProvider, useStore };
