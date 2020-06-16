import React, { useReducer } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_TODO":
      return state.filter(state => state.id !== action.payload);

    case "ADD_TODO":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 9999),
          title: `Todo Number ${state.length + 1}`,
        },
      ];
    default:
      return state;
  }
};

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  const addtodo = () => {
    return dispatch({ type: "ADD_TODO" });
  };

  const deletetodo = id => {
    return dispatch({ type: "DELETE_TODO", payload: id });
  };

  return (
    <Context.Provider value={{ state, addtodo, deletetodo }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
