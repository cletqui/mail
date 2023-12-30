import { useRef } from "react";
import { FaFileImport } from "react-icons/fa6";

export const FileInput = () => {
  const inputRef = useRef(null);

  const handleClick = (event) => {
    console.log(event);
  };

  const handleDragEnter = (event) => {
    event.preventDefault();
    console.log(event);
  };

  const handleDragLeave = (event) => {
    console.log(event);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <div
      className="FileInput"
      onClick={handleClick}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <button type="button" onClick={() => inputRef.current.click()}>
        <FaFileImport /> Browse
      </button>

      <label className="FileInfo"></label>

      <input
        type="file"
        accept="message/rfc822, application/vnd.ms-outlook"
        ref={inputRef}
      />
    </div>
  );
};
