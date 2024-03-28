import { useContext } from "react"
import { TodoContext } from "../contexts/TodoContext"

export const Todos = () => {
        const { todos, toggleTodo, removeTodo } = useContext(TodoContext)
    
    return <>
    Todos: {todos.length}
    <ul>
        {todos.map(todo => 
        <li key={todo.id} className={todo.completed ? "completed" : ""}>
            <span 
            onClick={() => {
                toggleTodo(todo.id);
            }}
            >
                {todo.text}
                </span><span> </span>
            <button onClick={() => {
                removeTodo(todo.id)}}>X</button>
                        </li>)}
    </ul>
    </>
};