import TodoInput from "./ToDoInput";
import TodoLists from "./ToDoLists";
import "./App.css";
import MyPages from "./MyPages";
import Completed from "./Completed";
import Uncompleted from "./Uncompleted";
import {TodoContext} from "./Contexts/ToDoContext";
import { useContext } from "react";



const App = () => {
 const {isCompleted, isUncompleted, isAll } = useContext(TodoContext)

  return (
  <div className="App">
    <TodoInput />
    <MyPages/>
    <div>
      {isAll && <TodoLists />}
      {isCompleted && <Completed/>}
      {isUncompleted && <Uncompleted/>}
    </div>
  </div>
)};

export default App;
