import { useState } from "react";
import minLengthDecorator from "../decorators/min-length-decorator";
import setErrorDecorator from "../decorators/set-error-decorator";
import todoFactory from "../factories/todo-factory";
import { ToDoDomain } from "../interfaces/domain/to-do-domain";
import maxLengthDecorator from "../decorators/max-length-decorator";
import todoMapper from "../mappers/todo-mapper";

export const useTodoStateBuilder = () => {
  const [list, setList] = useState<ToDoDomain[]>([]);
  const [text, setText] = useState("");
  const [error, setError] = useState(false);

  let state = {
    text,
    list,
    error,
    setText,
    setError,
    onClick: () => {
      const todo = todoFactory().create(text);
      setList([...list, todo]);
      setText("");
    },
    onUpdateTodo: (todo: ToDoDomain) => {
      setList(todoMapper(list, todo));
    },
    setList,
  };

  const onSetError = (hasError: boolean) => {
    setError(hasError);
  };

  state.onClick = minLengthDecorator(state.onClick, 3, text);
  state.onClick = maxLengthDecorator(state.onClick, 20, text);
  state.onClick = setErrorDecorator(state.onClick, onSetError);

  return state;
};
