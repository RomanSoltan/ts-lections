import React from "react";
import TodoItem from "./TodoItem";
import { Todo } from "./types";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

interface TodoListProps {
  todos: Todo[];
  deleteTodo: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, deleteTodo }) => {
  const todoList = useSelector((state: RootState) => state.todos.todos);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
      ))}
    </ul>
  );
};
export default TodoList;

// 1. створити store і створити кастомний динамічний тип RootState, налаштувати reducer
// 2. Cтворити slice, де типізувати initialState і action всередині slice
// 3. Використати цей тип для типізації
