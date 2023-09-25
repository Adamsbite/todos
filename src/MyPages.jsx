import { useContext } from "react";
import { TodoContext } from "./Contexts/ToDoContext";

function MyPages () {
    const {handleAll, handleCompleted, handleUncompleted } = useContext(TodoContext)
    return (
        <div className="mandy" >
            <h3 className="btn" onClick={handleAll}> All</h3>
            <h3 className="btn" onClick={handleCompleted}> Completed</h3>
            <h3 className="btn" onClick= {handleUncompleted}> Uncompleted</h3>
        </div>
    )
}
export default MyPages;