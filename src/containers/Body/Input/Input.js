import { useState } from "react";

import { FileInput } from "../../../components/input/file/FileInput";
import { TextInput } from "../../../components/input/text/TextInput";
import { Radio } from "../../../components/input/radio/Radio";

import { FaRegPaste, FaRegFileCode } from "react-icons/fa6";

export const Input = () => {
  const [selectedRadio, setSelectedRadio] = useState("file");

  const handleChange = (event) => {
    setSelectedRadio(event.target.id);
  };

  const radioOptions = [
    {
      id: "file",
      icon: <FaRegFileCode />,
      message: "Select File",
      component: <FileInput />,
    },
    {
      id: "text",
      icon: <FaRegPaste />,
      message: "Paste Header",
      component: <TextInput />,
    },
  ];

  return (
    <div className="Input">
      <h1>Input</h1>
      {radioOptions.map((option) => (
        <div key={option.id}>
          <Radio
            id={option.id}
            icon={option.icon}
            message={option.message}
            handleChange={handleChange}
            checked={selectedRadio === option.id}
          />
          {option.component}
        </div>
      ))}
    </div>
  );
};
