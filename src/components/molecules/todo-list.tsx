import {
  ToDoDomain,
  ToDoPrototype,
} from "../../interfaces/domain/to-do-domain";
import TodoLine from "./todo-line";

const TodoList: React.FC<{
  list: ToDoDomain[];
  onUpdateTodo: (todo: ToDoDomain) => void;
}> = ({ list, onUpdateTodo }) => {
  return (
    <ul>
      {list.map((todo: ToDoDomain) => {
        const protoTodo = {
          ...todo,
          setStatus: () => {
            todo.status = todo.status === "pending" ? "completed" : "pending";
            onUpdateTodo(todo);
          },
          isCompleted: () => todo.status === "completed",
        } as ToDoDomain & ToDoPrototype;

        return <TodoLine todo={protoTodo} key={protoTodo.id} />;
      })}
    </ul>
  );
};

export default TodoList;
