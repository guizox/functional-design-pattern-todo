export interface ToDoDomain {
  id: string;
  title: string;
  status: "pending" | "completed";
}

export interface TodoCreation {
  create: (title: string) => ToDoDomain;
}

export interface ToDoPrototype {
  setTitle: (title: string) => void;
  setStatus: () => void;
  isCompleted: () => boolean;
}
