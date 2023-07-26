import { Sub } from "../types";
import { useNewSubForm } from "../hooks/useNewSubForm";

interface FormProps {
  onNewSub: (newSub: Sub) => void;
}

export const Form = ({ onNewSub }: FormProps) => {
  //esto es sin reducer
  /* const [inputValue, setInputValue] =
   useState<FormState["inputValues"]>(INITIAL_STATE);
  */

  //HOOK en donde utilizamos useReducer
  const [inputValues, dispatch] = useNewSubForm();

  //para saber el evento de que tipo es hay que hacer hover en el onsubmit y te dira la propiedad
  //React.FormEventHandler<HTMLFormElement> y le sacamos el nombre handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onNewSub(inputValues);
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value }: { name: string; value: string | number } = e.target;
    dispatch({
      type: "change_value",
      payload: {
        inputName: name,
        inputValue: value,
      },
    });
    //sin reducer
    /*setInputValue({
      ...inputValues,
      [name]: value,
    });
    */
  };

  const handleClear = () => {
    dispatch({ type: "clear" });
    //SIN REDUCER
    /*setInputValue({
      nick: "",
      subMonth: 0,
      avatar: "",
      description: "",
    });
    */
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={inputValues.nick}
          type="text"
          name="nick"
          placeholder="nick"
          onChange={handleChange}
        />

        <input
          type="number"
          name="subMonth"
          placeholder="subMonth"
          value={inputValues.subMonth}
          onChange={handleChange}
        />
        <input
          value={inputValues.avatar}
          type="text"
          name="avatar"
          placeholder="avatar"
          onChange={handleChange}
        />
        <textarea
          value={inputValues.description}
          name="description"
          placeholder="description"
          onChange={handleChange}
        />
        <button type="button" onClick={handleClear}>
          clear
        </button>
        <button type="submit">save new sub</button>
      </form>
    </div>
  );
};
