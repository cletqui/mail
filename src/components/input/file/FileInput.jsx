import { useState, useRef, useCallback } from "react";
import { FaFileImport } from "react-icons/fa6";

import { niceBytes } from "../../../utils/helpers/print";
import { validateInputFile } from "../../../utils/helpers/validate";

export const FileInput = ({ file, setFile, setSelectedRadio }) => {
  const inputRef = useRef(null);
  const [inputInfo, setInputInfo] = useState("");

  const updateInputInfo = useCallback(
    (data = file) => {
      setInputInfo(
        data ? `${data.name} (${niceBytes(data.size)}): ${data.type}` : ""
      );
    },
    [file]
  );

  const checkInput = (files) => {
    if (files.length > 1) {
      setInputInfo(`Only one file at a time!`);
    } else {
      const file = files[0];
      const isValid = validateInputFile(file);
      setInputInfo(
        `File type "${file?.type}" is ${isValid ? "valid" : "invalid"}.`
      );
      return validateInputFile(file);
    }
  };

  const handleClick = () => {
    setSelectedRadio("file");
    inputRef.current.click();
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    const { items } = event.dataTransfer;
    checkInput(items);
  };

  const handleDragLeave = () => {
    updateInputInfo();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setSelectedRadio("file");
    const { files } = event.dataTransfer;
    if (checkInput(files)) {
      const file = files[0];
      setFile(file);
      updateInputInfo(file);
    } else {
      updateInputInfo();
    }
  };

  const handleChange = useCallback(
    (event) => {
      const file = event.target.files[0];
      setFile(file);
      updateInputInfo(file);
    },
    [setFile, updateInputInfo]
  );

  return (
    <div
      className="FileInput"
      onClick={handleClick}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <button type="button">
        <FaFileImport /> Browse
      </button>

      <label className="FileInfo">{inputInfo}</label>

      <input
        type="file"
        accept="message/rfc822, application/vnd.ms-outlook"
        ref={inputRef}
        onChange={handleChange}
      />
    </div>
  );
};
