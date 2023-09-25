import TodoItem from "./ToDoItem";
import React, { useContext } from "react";
import { TodoContext } from "./Contexts/ToDoContext";

const Uncompleted = () => {
  const { todos } = useContext(TodoContext);
  return (
    <ul>
      {!!todos.length &&
        todos.filter(todo => todo.completed===false).map((todo) => <TodoItem todo={todo} key={todo.id} />)}
    </ul>
  );
};

export default Uncompleted;


