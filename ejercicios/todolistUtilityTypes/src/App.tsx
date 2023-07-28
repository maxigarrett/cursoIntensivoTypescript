import { useState } from "react";
import { Todos } from "./component/Todos";

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

  const hadleCheckInput = () => {};

  const handleRemove = (id: string): void => {
    const newTodoFiltered = todos.filter((todo) => todo.id !== id);
    setTodos(newTodoFiltered);
  };

  return (
    <div className="todoapp">
      <Todos todos={todos} onRemoveTodo={handleRemove} />
    </div>
  );
};

export default App;
