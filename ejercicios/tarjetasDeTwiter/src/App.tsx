import { useState, useEffect } from "react";
import "./App.css";
import { List } from "./components/List";
import { Form } from "./components/Form";
import { Sub } from "./types";
import { subsFake } from "../apiFake.json";
// es probable que tengamos varios estados por eso es mejor crear una interfaz que controle eso
interface AppState {
  subs: Sub[];
  newSubsNumber: number;
}

function App() {
  // const [number, setnumber] = useState<number|string>(0);podemos asiganr de esta forma los prmitivos

  //de esta manera se puede tipar el estado useState<Sub[]> o useState<Array<Sub>>
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  const [newSubsNumber, setNewSubNumber] =
    useState<AppState["newSubsNumber"]>(0);

  useEffect(() => {
    setSubs(subsFake); //viene un de un json falso que creamos
  }, []);

  const handleNewSub = (newSub: Sub): void => {
    console.log(newSub);
    setSubs((sub) => [...sub, newSub]);
  };
  return (
    <div className="App">
      <h1>subs</h1>
      <List subs={subs} />
      <Form onNewSub={handleNewSub} />
    </div>
  );
}

export default App;
