import { type User } from "../types";

interface Props {
  users: User[];
  showColors: boolean;
  deleteUserForEmail: (email: string) => void;
}

export const UserList: React.FC<Props> = ({
  users,
  showColors,
  deleteUserForEmail,
}) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Foto</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Pais</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => {
            const colorBackgroundFile = index % 2 === 0 ? "#333" : "#555";
            const color = showColors ? colorBackgroundFile : "";

            return (
              <tr key={user.email} style={{ backgroundColor: color }}>
                <td>
                  <img
                    src={user.picture.thumbnail}
                    alt={user.location.street.name}
                  />
                </td>
                <td>{user.name.first}</td>
                <td>{user.name.last}</td>
                <td>{user.location.country}</td>
                <td>
                  <button onClick={() => deleteUserForEmail(user.email)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
