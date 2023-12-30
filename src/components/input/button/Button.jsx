import { useState } from "react";

export const Button = ({ text, Icon }) => {
  const [isLoading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(!isLoading);
  };

  return (
    <button className="Button" type="submit" onClick={handleClick}>
      {text} {isLoading ? <Icon /> : null}
    </button>
  );
};
