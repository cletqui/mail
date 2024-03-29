import { useState } from "react";
import { FaRegPaste, FaSpinner } from "react-icons/fa6";
import { MdOutlineUploadFile } from "react-icons/md";

import { Button } from "../../components/input/Button";
import { FileInput } from "../../components/input/FileInput";
import { Radio } from "../../components/input/Radio";
import { TextInput } from "../../components/input/TextInput";
import { parse } from "../../utils/helpers/parse";

export const Input = ({ setResult, scrollToResults }) => {
  const [file, setFile] = useState(null);
  const [text, setText] = useState(null);
  const [selectedRadio, setSelectedRadio] = useState("file");
  const [isLoading, setLoading] = useState(false);

  const handleChange = (event) => {
    setSelectedRadio(event.target.id);
  };

  const getData = () => {
    return selectedRadio === "file" ? file : text;
  };

  const handleClick = async () => {
    setLoading(true);

    const data = getData();
    console.log(data);

    const result = await parse(data);
    setResult(result);
    console.log(result);

    setLoading(false);
    scrollToResults();
  };

  return (
    <div className="Input">
      <h1>Input</h1>

      <div className="InputContainer">
        <div className="InputContent">
          <Radio
            id="file"
            Icon={MdOutlineUploadFile}
            message="Select File"
            handleChange={handleChange}
            checked={selectedRadio === "file"}
          />
          <FileInput
            file={file}
            setFile={setFile}
            setSelectedRadio={setSelectedRadio}
          />
        </div>

        <div className="InputContent">
          <Radio
            id="text"
            Icon={FaRegPaste}
            message="Paste Header"
            handleChange={handleChange}
            checked={selectedRadio === "text"}
          />
          <TextInput
            text={text}
            setText={setText}
            setSelectedRadio={setSelectedRadio}
          />
        </div>
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
