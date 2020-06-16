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
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    default:
      return state;
  }
};

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, [
    { title: "initial Todo", content: "initial content" },
  ]);

  const addtodo = ({ title, content }) => {
    return dispatch({ type: "ADD_TODO", payload: { title, content } });
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
