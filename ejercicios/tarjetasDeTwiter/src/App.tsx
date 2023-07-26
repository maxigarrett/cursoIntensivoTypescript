import { useState, useEffect } from "react";
import "./App.css";
import { List } from "./components/List";
import { Form } from "./components/Form";
import { Sub, SubsResponseFromApi } from "./types";

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
    useState<AppState["newSubsNumber"]>(0); //solo para mostrar si tuvieramos mas de un estado

  //para levantar el servicio escribir 'npm run fakeApi' y copiar la url en la web para ver
  useEffect(() => {
    const fetchSubs = (): Promise<SubsResponseFromApi[]> => {
      return fetch("http://localhost:5000/subsFake").then((res) => res.json());
    };
    const mapFromApiToSubs = (
      apiResponse: Array<SubsResponseFromApi>
    ): Array<Sub> => {
      return apiResponse.map((subFromApi) => {
        // le cambiamos el nombre porque en la funcion le decimos que devulve del tipo Sub
        //porque la Api trae con otros nombre y para no tirar error decolcemos del mismo tipo
        //que la interfase Subs
        const {
          nick,
          months: subMonth,
          profileUrl: avatar,
          description,
        } = subFromApi;
        return {
          nick,
          subMonth,
          avatar,
          description,
        };
      });
    };
    fetchSubs().then((apiSubs) => {
      const subs = mapFromApiToSubs(apiSubs);
      console.log(subs);
      setSubs(subs);
    });
  }, []);

  const handleNewSub = (newSub: Sub): void => {
    console.log(newSub);
    setSubs((sub) => [...sub, newSub]);
    setNewSubNumber((prvalue) => prvalue + 1);
  };
  return (
    <div className="App">
      <h1>subs</h1>
      <h4>subs-{newSubsNumber}</h4>
      <List subs={subs} />
      <Form onNewSub={handleNewSub} />
    </div>
  );
}

export default App;
