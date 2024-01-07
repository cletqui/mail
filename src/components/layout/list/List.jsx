export const List = ({ list }) => {
  return (
    <ul>
      {Object.entries(list).map(([key, value]) => {
        return <li>{`${key}: ${JSON.stringify(value)}`}</li>;
      })}
    </ul>
  );
};
