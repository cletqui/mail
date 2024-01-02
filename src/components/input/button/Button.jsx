export const Button = ({ text, Icon, isLoading, handleClick }) => {
  return (
    <div className="Button">
      <button type="submit" onClick={handleClick}>
        {text} {isLoading ? <Icon /> : null}
      </button>
    </div>
  );
};
