import { capitalize } from "../../../utils/helpers/capitalize";

export const Title = ({ children, title }) => {
  return (
    <div className="Title">
      <h2>{capitalize(title)}</h2>
      {children}
    </div>
  );
};
