import {
  ToDoDomain,
  ToDoPrototype,
} from "../../interfaces/domain/to-do-domain";
import Input from "../atoms/input";

const TodoLine: React.FC<{ todo: ToDoDomain & ToDoPrototype }> = ({ todo }) => {
  return (
    <li>
      <Input
        onChange={() => todo.setStatus()}
        type="checkbox"
        checked={todo.isCompleted()}
      />
      {todo.title}
    </li>
  );
};

export default TodoLine;
