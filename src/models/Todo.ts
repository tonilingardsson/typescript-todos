export class Todo {
    id: number;
    completed: boolean;
  constructor(
    // Defining the properties of the class as public allows us to access them in the TodoList component
    // and in the TodoItem component. We don't need to write this.id = id, this.text = text, etc.
    // in the constructor. We don't want to have id and completed in the constructor for this project.
    // public id: number,
    public text: string,
    // public completed: boolean
  ) {
    this.id = Date.now();
    this.completed = false;
  }
}