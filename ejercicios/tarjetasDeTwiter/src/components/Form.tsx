import { useState } from "react";

export const Form = () => {
  const [inputValue, setInputValue] = useState({
    nick: "",
    subMonth: 0,
    avatar: "",
    description: "",
  });

  //para saber el evento de que tipo es hay que hacer hover en el onsubmit y te dira la propiedad
  //React.FormEventHandler<HTMLFormElement> y le sacamos el nombre handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value }: { name: string; value: string | number } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={inputValue.nick}
          type="text"
          name="nick"
          placeholder="nick"
          onChange={handleChange}
        />

        <input
          type="number"
          name="subMonth"
          placeholder="subMonth"
          value={inputValue.subMonth}
          onChange={handleChange}
        />
        <input
          value={inputValue.avatar}
          type="text"
          name="avatar"
          placeholder="avatar"
          onChange={handleChange}
        />
        <textarea
          value={inputValue.description}
          name="description"
          placeholder="description"
          onChange={handleChange}
        />
        <button>save new sub</button>
      </form>
    </div>
  );
};
