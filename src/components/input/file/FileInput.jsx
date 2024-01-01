import { useState, useRef } from "react";
import { FaFileImport } from "react-icons/fa6";

import { niceBytes } from "../../../utils/helpers/print";
import { validateInputFile } from "../../../utils/helpers/validate";

export const FileInput = ({ data, setData, setSelectedRadio }) => {
  const inputRef = useRef(null);
  const [inputInfo, setInputInfo] = useState("");

  const setDefaultInputInfo = () => {
    setInputInfo(
      data ? `${data.name} (${niceBytes(data.size)}): ${data.type}` : ""
    );
  };

  const checkInput = (files) => {
    if (files.length > 1) {
      setInputInfo(`Only one file at a time!`);
    } else {
      const file = files[0];
      setInputInfo(
        `File type "${file?.type}" is ${
          validateInputFile(file) ? "valid" : "invalid"
        }.`
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
    setDefaultInputInfo();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setSelectedRadio("file");
    const { files } = event.dataTransfer;
    if (checkInput(files)) {
      const file = files[0];
      setData(file);
      setInputInfo(`${file.name} (${niceBytes(file.size)}): ${file.type}`);
    } else {
      setDefaultInputInfo();
    }
  };

  const handleChange = (event) => {
    const file = event.target.files[0];
    setData(file);
    setInputInfo(`${file.name} (${niceBytes(file.size)}): ${file.type}`);
  };

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
