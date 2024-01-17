import { capitalize } from "../../utils/helpers/capitalize";

export const List = ({ listKey, list }) => {
  const isValid = (string) => {
    return string && string.length > 0;
  };

  return (
    <div className="List">
      <ul key={listKey}>
        {Object.entries(list).map(([key, value], index) => {
          return isValid(value) ? (
            <li key={`${key}-${index}`}>{`${capitalize(key)}: ${value}`}</li>
          ) : null;
        })}
      </ul>
    </div>
  );
};
