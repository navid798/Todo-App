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
    case "EDIT_TODO":
      return [
        ...state,
        {
          id: action.payload.id,
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    default:
      return state;
  }
};

export const Provider = ({ children }) => {
  const [todos, dispatch] = useReducer(reducer, [
    { title: "initial Todo", content: "initial content", id: 1 },
  ]);

  const addtodo = ({ title, content }) => {
    return dispatch({ type: "ADD_TODO", payload: { title, content } });
  };
  const edittodo = ({ title, content, id }) => {
    return dispatch({ type: "EDIT_TODO", payload: { title, content, id } });
  };
  const deletetodo = id => {
    return dispatch({ type: "DELETE_TODO", payload: id });
  };

  return (
    <Context.Provider value={{ todos, addtodo, deletetodo, edittodo }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
