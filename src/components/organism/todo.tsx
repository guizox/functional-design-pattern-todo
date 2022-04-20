import Button from "../atoms/button";
import LabelInput from "../molecules/label-input";
import { useTodoStateBuilder } from "../../application/use-todo-state-builder";
import TodoList from "../molecules/todo-list";

function Todo() {
  const { error, text, setText, onClick, list, onUpdateTodo } =
    useTodoStateBuilder();

  return (
    <div className="App">
      <LabelInput
        label="todo"
        onChange={(e) => {
          setText(e.target.value);
        }}
        inputProps={{
          value: text,
          style: {
            borderColor: error ? "red" : "white",
          },
        }}
      />
      <Button onClick={onClick}>click me</Button>

      <TodoList list={list} onUpdateTodo={onUpdateTodo} />
    </div>
  );
}

export default Todo;
