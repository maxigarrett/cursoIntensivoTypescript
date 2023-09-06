interface Props {
  toggleColors: () => void;
  toggleSortByCountry: () => void;
  handleResetUser: () => void;
  sortByCountry: boolean;
}
export const Header: React.FC<Props> = ({
  toggleColors,
  toggleSortByCountry,
  handleResetUser,
  sortByCountry,
}) => {
  return (
    <>
      <button onClick={toggleColors}>Colorear</button>
      <button onClick={toggleSortByCountry}>
        {sortByCountry ? "desordenar" : "Ordenar por pais"}{" "}
      </button>
      <button onClick={handleResetUser}>resetear a original</button>
    </>
  );
};
