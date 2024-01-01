export const Button = ({ text, Icon, isLoading, handleClick }) => {
  return (
    <button className="Button" type="submit" onClick={handleClick}>
      {text} {isLoading ? <Icon /> : null}
    </button>
  );
};
