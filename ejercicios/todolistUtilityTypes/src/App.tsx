import { useState } from "react";
import { Todos } from "./component/Todos";
import { type TodoId, type Todo as TodoTypes } from "./types";

const mockTodos = [
  {
    id: "1",
    title: "hacer compras",
    completed: false,
  },
  {
    id: "2",
    title: "lavar auto",
    completed: false,
  },
  {
    id: "3",
    title: "estudiar react",
    completed: false,
  },
];
const App: React.FC = () => {
  const [todos, setTodos] = useState(mockTodos);

  const hadleCheckInput = ({
    id,
    completed,
  }: Pick<TodoTypes, "id" | "completed">): void => {
    const newTodoitemChecked = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: completed,
        };
      }
      return todo;
    });
    setTodos(newTodoitemChecked);
  };

  // dos formas de pasarle los parametro a la funcion "({ id }: TodoId)" o "(id: TypeId['id'])"
  //tendriamos que pasarlos de esas dos formas en todos los lugares donde utilicemos la funcion para no dar error
  //"({ id }: TodoId)" se denomina parametros nombrados
  const handleRemove = ({ id }: TodoId): void => {
    const newTodoFiltered = todos.filter((todo) => todo.id !== id);
    setTodos(newTodoFiltered);
  };

  return (
    <div className="todoapp">
      <Todos
        todos={todos}
        onRemoveTodo={handleRemove}
        onToggleCompleted={hadleCheckInput}
      />
    </div>
  );
};

export default App;
