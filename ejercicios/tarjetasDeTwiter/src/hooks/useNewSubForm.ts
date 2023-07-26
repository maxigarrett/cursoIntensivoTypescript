import { useReducer } from "react";
import { Sub } from "../types";

const INITIAL_STATE = {
  nick: "",
  subMonth: 0,
  avatar: "",
  description: "",
};
//como puede haber varios estados creamos un interface con ese proposito
interface FormState {
  inputValues: Sub;
}
//-------------------REDUCER
type FormReducerAction =
  | {
      type: "change_value";
      payload: {
        inputName: string;
        inputValue: string;
      };
    }
  | { type: "clear" };

const formReducer = (
  state: FormState["inputValues"],
  action: FormReducerAction
) => {
  switch (action.type) {
    case "change_value":
      const { inputName, inputValue } = action.payload;
      return { ...state, [inputName]: inputValue };

    case "clear":
      return INITIAL_STATE;
  }
};
//------------------fin REDUCER

export const useNewSubForm = () => {
  return useReducer(formReducer, INITIAL_STATE);
};
