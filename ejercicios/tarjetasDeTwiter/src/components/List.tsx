import { Sub } from "../types";
interface Props {
  subs: Array<Sub>;
}

export const List = (props: Props): JSX.Element => {
  const { subs } = props;
  if (!subs) return <h1>loading</h1>;
  return (
    <ul>
      {subs.map((sub) => {
        return (
          <li key={sub.nick}>
            <img src={sub.avatar} alt={sub.avatar} />
            <h4>
              {sub.nick} (<small>{sub.subMonth}</small>)
            </h4>
            <p>{sub.description?.substring(0, 50)}</p>
          </li>
        );
      })}
    </ul>
  );
};

//-----------------------------------------OTRA FORMA DE TIPAR

//:React.FunctionComponent<Props> para tipar la funcion y aceptara childrens
// export const List :React.FunctionComponent<Props> = ({ subs }: Props) => {
//   return (
//     <ul>
//       {subs.map((sub) => {
//         return (
//           <li key={sub.nick}>
//             <img src={sub.avatar} alt={sub.avatar} />
//             <h4>
//               {sub.nick} (<small>{sub.subMonth}</small>)
//             </h4>
//             <p>{sub.description?.substring(0, 50)}</p>
//           </li>
//         );
//       })}
//     </ul>
//   );
// };
