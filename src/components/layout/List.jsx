import { capitalize } from "../../utils/helpers/capitalize";

export const List = ({ listKey, list }) => {
  return (
    <div className="List">
      <ul key={listKey}>
        {Object.entries(list).map(([key, value], index) => {
          return (
            <li key={`${key}-${index}`}>{`${capitalize(key)}: ${value}`}</li>
          );
        })}
      </ul>
    </div>
  );
};
