import { useState, useEffect } from "react";
import "./App.css";
import { List } from "./components/List";
import { Form } from "./components/Form";

interface Sub {
  nick: string;
  subMonth: number;
  avatar: string;
  description?: string;
}

//es probable que tengamos varios estados por eso es mejor crear una interfaz que controle eso
interface AppState {
  subs: Sub[];
  newSubsNumber: number;
}

const INITIAL_STATE = [
  {
    nick: "pepe",
    subMonth: 10,
    avatar: "https://i.pravatar.cc/150?u=pepe",
    description: "moderador",
  },
  {
    nick: "sergio",
    subMonth: 7,
    avatar: "https://i.pravatar.cc/150?u=sergio",
  },
];
function App() {
  // const [number, setnumber] = useState<number|string>(0);podemos asiganr de esta forma los prmitivos

  //de esta manera se puede tipar el estado useState<Sub[]> o useState<Array<Sub>>
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  const [newSubsNumber, setNewSubNumber] =
    useState<AppState["newSubsNumber"]>(0);

  useEffect(() => {
    setSubs(INITIAL_STATE);
  }, []);

  return (
    <div className="App">
      <h1>subs</h1>
      <List subs={subs} />
      <Form />
    </div>
  );
}

export default App;
