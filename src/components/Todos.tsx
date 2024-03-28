import { useContext } from "react"
import { TodoContext } from "../contexts/TodoContext"

export const Todos = () => {
        const { todos } = useContext(TodoContext)
    
    return <>
    Todos: {todos.length}

    <ul>
        {todos.map(todo => 
        <li key={todo.id} className={todo.completed ? "completed" : ""}>
            {todo.text}
            </li>)}
    </ul>
    </>
};