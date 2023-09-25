import TodoItem from "./ToDoItem";
import { useContext } from "react";
import { TodoContext } from "./Contexts/ToDoContext";

const TodoLists = () => {
  const { todos } = useContext(TodoContext);
  return (
    <ul>
      {!!todos.length &&
        todos.map((todo) => <TodoItem todo={todo} key={todo.id} />)}
    </ul>
  );
};

export default TodoLists;

