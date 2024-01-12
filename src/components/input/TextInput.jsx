import { useCallback } from "react";

export const TextInput = ({ setText, setSelectedRadio }) => {
  const handleChange = useCallback(
    (event) => {
      setText(event.target.value);
    },
    [setText]
  );

  const handleFocus = () => {
    setSelectedRadio("text");
  };

  return (
    <textarea
      className="TextInput"
      title="Paste Header "
      onChange={handleChange}
      onFocus={handleFocus}
    />
  );
};
