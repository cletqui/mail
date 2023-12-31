import { useState } from "react";

export const Button = ({ text, Icon, handleClick }) => {
  const [isLoading, setLoading] = useState(false);

  const handleClickWrapper = () => {
    setLoading(!isLoading);
    handleClick();
  };

  return (
    <button className="Button" type="submit" onClick={handleClickWrapper}>
      {text} {isLoading ? <Icon /> : null}
    </button>
  );
};
