export const Radio = ({ id, Icon, message, handleChange, checked = false }) => {
  return (
    <div className="Radio">
      <label>
        <input id={id} type="radio" checked={checked} onChange={handleChange} />
        {message} <Icon />
      </label>
    </div>
  );
};
