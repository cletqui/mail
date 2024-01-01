import { useState } from "react";
import { FaRegPaste, FaRegFileCode, FaSpinner } from "react-icons/fa6";

import { Radio, FileInput, TextInput, Button } from "../../../components/input";
import { parse } from "../../../utils/helpers/parse";

export const Input = ({ setResult }) => {
  const [data, setData] = useState(null);
  const [selectedRadio, setSelectedRadio] = useState("file");
  const [isLoading, setLoading] = useState(false);

  const handleChange = (event) => {
    setSelectedRadio(event.target.id);
  };

  const handleClick = async () => {
    setLoading(true);
    const result = await parse(data);
    setLoading(false);
    setResult(result);

    console.log(selectedRadio);
    console.log(data);
    console.log(result);
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
        <FileInput
          data={data}
          setData={setData}
          setSelectedRadio={setSelectedRadio}
        />
      </div>

      <div>
        <Radio
          id="text"
          Icon={FaRegPaste}
          message="Paste Header"
          handleChange={handleChange}
          checked={selectedRadio === "text"}
        />
        <TextInput
          data={data}
          setData={setData}
          setSelectedRadio={setSelectedRadio}
        />
      </div>

      <Button
        text="Submit"
        Icon={FaSpinner}
        isLoading={isLoading}
        handleClick={handleClick}
      />
    </div>
  );
};
