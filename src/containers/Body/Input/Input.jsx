import { useState } from "react";

import { Radio, FileInput, TextInput, Button } from "../../../components/input";
import { FaRegPaste, FaRegFileCode, FaSpinner } from "react-icons/fa6";

export const Input = ({ setResult }) => {
  const [data, setData] = useState(null);
  const [selectedRadio, setSelectedRadio] = useState("file");

  const handleChange = (event) => {
    setSelectedRadio(event.target.id);
  };

  return (
    <div className="Input">
      <h1>Input</h1>

      <div>
        <Radio
          id="file"
          Icon={FaRegFileCode}
          message="Select File"
          handleChange={handleChange}
          checked={selectedRadio === "file"}
        />
        <FileInput setData={setData} />
      </div>

      <div>
        <Radio
          id="text"
          Icon={FaRegPaste}
          message="Paste Header"
          handleChange={handleChange}
          checked={selectedRadio === "text"}
        />
        <TextInput setData={setData} />
      </div>

      <Button text="Submit" Icon={FaSpinner} />
    </div>
  );
};
