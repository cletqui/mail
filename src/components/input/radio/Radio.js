export const Radio = ({ id, icon, message, handleChange, checked = false }) => {
  return (
    <div className="radio">
      <input id={id} type="radio" checked={checked} onChange={handleChange} />
      {message} {icon}
    </div>
  );
};
