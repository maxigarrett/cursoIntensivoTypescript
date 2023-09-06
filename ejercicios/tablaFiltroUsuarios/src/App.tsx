import { useEffect, useRef, useState } from "react";
import { type User } from "./types";
import "./App.css";
import { UserList } from "./components/UserList";
import { Header } from "./components/Header";

interface AppState {
  user: User[];
}
const API_URL = "https://randomuser.me/api/?results=100";
function App() {
  const [users, setUsers] = useState<AppState["user"]>([]);
  const [showColors, setShowColors] = useState(false);
  const [sortByCountry, setSortByCountry] = useState(false);
  const [filterUserCountry, setFilterUserCountry] = useState<string | null>(
    null
  );

  //para gaurdar el estado original no debemos crear otro estado es buena practica usar una referencia
  //se comparte entre renderizados y al cambiar  no vuelve a renderizar el componente
  const originalUser = useRef<User[]>([]);

  const toggleColors = () => {
    setShowColors((showColors) => !showColors);
  };

  const toggleSortByCountry = () => {
    setSortByCountry((sortByCountry) => !sortByCountry);
  };

  //si no hacemos un copia del erstado quedara ordenado y no lo desordenara, solo lo ara una vez
  //porque sort muta el estado original
  //otra forma de usar algo parecido al [...users] podemos usar:
  //cambiamos el metodo 'sorted' por 'toSorted' asi no usamos el spreed operator
  const sortedUser = sortByCountry
    ? [...users].sort((a, b) => {
        return a.location.country.localeCompare(b.location.country);
      })
    : users;

  const deleteUserForEmail = (email: string): void => {
    const userFiltered = users.filter((user) => user.email !== email);
    setUsers(userFiltered);
  };

  const handleResetUser = () => {
    setUsers(originalUser.current);
  };
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.results);
        originalUser.current = data.results;
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <header>
        <Header
          toggleColors={toggleColors}
          toggleSortByCountry={toggleSortByCountry}
          handleResetUser={handleResetUser}
          sortByCountry={sortByCountry}
        />
      </header>
      <main>
        <UserList
          showColors={showColors}
          users={sortedUser}
          deleteUserForEmail={deleteUserForEmail}
        />
      </main>
    </div>
  );
}

export default App;
