import { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";

export const AddTodo = () => {
    const [text, setText] = useState("");
// Add funtion that will fetch the data from TodoContext
    const { addTodo } = useContext(TodoContext);

    return <form onSubmit={(e) => {
        e.preventDefault();
        addTodo(text);
        setText("");
    }}
        >
        <input
         type="text" 
         value={text} 
         onChange={e => setText(e.target.value)}
        />
        <button>Save</button>
    </form>
}