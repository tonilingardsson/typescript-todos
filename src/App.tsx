
import { useState } from 'react';
import './App.css'
import { AddTodo } from './components/AddTodo';
import { Todos } from './components/Todos';
import { ITodoContext, TodoContext } from './contexts/TodoContext'
import { Todo } from './models/Todo';

function App() {
  const [state, setState] = useState<ITodoContext>(
    {
      todos: [],
      addTodo: () => {},
    });

    // We need a starting value for the state.
    state.addTodo = (text: string) => {
      setState({ ...state, todos: [...state.todos, new Todo(text)] });
    };

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