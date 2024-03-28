import { createContext } from "react";
import { Todo } from "../models/Todo";

// This is the most "annoying" part of TypeScript:
// To define the type of the context, we need to use an interface.
export interface ITodoContext {
    todos: Todo[];
    // In these functions we are not returning anything, so we use 'void'.
    addTodo: (text: string) => void;
    toggleTodo: (id: number) => void;
    removeTodo: (id: number) => void;
}

export const TodoContext = createContext<ITodoContext>({
    todos: [],
    // addTodo is a function that does nothing yet, that we will use later.
    addTodo: () => {},
    toggleTodo: () => {},
    removeTodo: () => {}
});