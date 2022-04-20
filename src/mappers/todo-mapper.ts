import { ToDoDomain } from "../interfaces/domain/to-do-domain";

const todoMapper = (list: ToDoDomain[], todo: ToDoDomain): ToDoDomain[] => {
  return list.map((todoInList: ToDoDomain) => {
    if (todoInList.id === todo.id) {
      return todo;
    }
    return todoInList;
  });
};

export default todoMapper;
