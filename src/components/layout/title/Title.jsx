import { FaAngleDown } from "react-icons/fa6";

import { capitalize } from "../../../utils/helpers/capitalize";

export const Title = ({ title, onClick }) => {
  return (
    <div className="Title" onClick={onClick}>
      <h2>
        {capitalize(title)} <FaAngleDown />
      </h2>
    </div>
  );
};
