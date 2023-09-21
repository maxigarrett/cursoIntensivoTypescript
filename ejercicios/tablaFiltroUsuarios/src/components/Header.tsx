import { Forme } from "./Forme";

interface Props {
  toggleColors: () => void;
  toggleSortByCountry: () => void;
  handleResetUser: () => void;
  sortByCountry: boolean;
  filterContry: (country: string) => void;
}
export const Header: React.FC<Props> = ({
  toggleColors,
  toggleSortByCountry,
  handleResetUser,
  sortByCountry,
  filterContry,
}) => {
  return (
    <>
      <button onClick={toggleColors}>Colorear</button>
      <button onClick={toggleSortByCountry}>
        {sortByCountry ? "desordenar" : "Ordenar por pais"}{" "}
      </button>
      <button onClick={handleResetUser}>resetear a original</button>
      <Forme filterContry={filterContry} />
    </>
  );
};
