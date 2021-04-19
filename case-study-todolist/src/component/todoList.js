import React from "react";

import Todo from "./toDo";

const TodoList = (props) => {
  const todoList = props.todos.map((todo, index) => {
    return (
      <Todo content={todo} key={index} id={index} onDelete={props.onDelete} />
    );
  });
  return <div className="list-wrapper">{todoList}</div>;
};
export default TodoList;
