import { type Todo as TodoTypes } from "../types"; //le cambiamos el nombre porque colisiona con el nombre del componente Todo

interface Props extends TodoTypes {
  onRemoveTodo: (id: string) => void;
}

export const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  onRemoveTodo,
}) => {
  return (
    <div className="view">
      <input
        type="checkbox"
        className="toggle"
        checked={completed}
        onChange={() => {}}
      />
      <label htmlFor={id}>{title}</label>
      <button className="destroy" onClick={() => onRemoveTodo(id)}></button>
    </div>
  );
};
