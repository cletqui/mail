import { useRef } from "react";
import { FaFileImport } from "react-icons/fa6";

export const FileInput = () => {
  const inputRef = useRef(null);

  const FileInfo = <label className="FileInfo"></label>;

  return (
    <div className="FileInput">
      <button
        type="button"
        id="input-button"
        onClick={() => inputRef.current.click()}
      >
        <FaFileImport />
        Browse
      </button>

      {FileInfo}

      <input
        type="file"
        id="input-file"
        accept="message/rfc822, application/vnd.ms-outlook"
        ref={inputRef}
      />
    </div>
  );
};
