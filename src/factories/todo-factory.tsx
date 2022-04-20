import { TodoCreation, ToDoDomain } from "../interfaces/domain/to-do-domain";

const todoFactory = (): TodoCreation => {
  const create = (title: string): ToDoDomain => {
    const todo: ToDoDomain = {
      id: Math.random().toString(36),
      title,
      status: "pending",
    };
    return todo;
  };

  return {
    create,
  };
};

export default todoFactory;
