export const TextInput = ({ data, setData, setSelectedRadio }) => {
  const handleInput = (event) => {
    setSelectedRadio("text");
    setData(event.target.value);
  };

  return (
    <textarea
      className="TextInput"
      title="Paste Header "
      onFocus={handleInput}
      onChange={handleInput}
    ></textarea>
  );
};
