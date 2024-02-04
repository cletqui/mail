import { FaAngleDown } from "react-icons/fa6";

import { capitalize } from "../../utils/helpers/capitalize";

export const Title = ({ title, icon, onClick }) => {
  return (
    <div className="Title" onClick={onClick}>
      <h2>
        {icon} {capitalize(title)} <FaAngleDown className="collapse" />
      </h2>
    </div>
  );
};
