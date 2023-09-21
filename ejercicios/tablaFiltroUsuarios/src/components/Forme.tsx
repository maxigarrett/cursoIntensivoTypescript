import { useState } from "react";

interface Props {
  filterContry: (country: string) => void;
}

interface StateApp {
  inputValues: { country: string };
}
const INITIAL_STATE = {
  country: "",
};

export const Forme: React.FC<Props> = ({ filterContry }) => {
  const [inputValues, setcountry] =
    useState<StateApp["inputValues"]>(INITIAL_STATE);

  const handelForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setcountry({
      ...inputValues,
      [name]: value,
    });

    filterContry(inputValues.country);
  };

  return (
    <>
      <form>
        <input
          type="text"
          placeholder="buscar pais"
          name="country"
          value={inputValues.country}
          onChange={handelForm}
        />
      </form>
    </>
  );
};
