import { useState } from "react";
import "./App.css";
import { AddTodo } from "./components/AddTodo";
import { Todos } from "./components/Todos";
import { ITodoContext, TodoContext } from "./contexts/TodoContext";
import { Todo } from "./models/Todo";

function App() {
  const [state, setState] = useState<ITodoContext>({
    todos: [new Todo("Todo 1")],
    addTodo: () => {},
    toggleTodo: () => {},
    removeTodo: () => {},
  });

  // We need a starting value for the state.
  state.addTodo = (text: string) => {
    setState({ ...state, todos: [...state.todos, new Todo(text)] });
  };

  // Change the style of the todos when they are completed
  state.toggleTodo = (id: number) => {
    setState({
      ...state,
      todos: state.todos.map((todo) => {
        if (todo.id === id) return { ...todo, completed: !todo.completed };
        else return todo;
      }),
    });
  };

// Remove old todos
state.removeTodo = (id: number) => {
  setState({
    ...state,
    todos: state.todos.filter((todo) => todo.id !== id),
  });
}

  return (
    <>
      <TodoContext.Provider value={state}>
        <AddTodo />
        <Todos />
      </TodoContext.Provider>
    </>
  );
}

export default App;
