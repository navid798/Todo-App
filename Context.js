import React, { useReducer } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { title: `Todo Post Number ${state.length + 1}` }];
    default:
      return state;
  }
};

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  const addtodo = () => {
    dispatch({ type: "ADD_TODO" });
  };

  return (
    <Context.Provider value={{ state, addtodo }}>{children}</Context.Provider>
  );
};

export default Context;
