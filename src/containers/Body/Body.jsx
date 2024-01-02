import { useRef, useState } from "react";

import { Input } from "./Input/Input";
import { Output } from "./Output/Output";

export const Body = () => {
  const outputRef = useRef(null);
  const [result, setResult] = useState(null);

  const scrollToResults = () => {
    outputRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="Body">
      <Input setResult={setResult} scrollToResults={scrollToResults} />
      <Output ref={outputRef} result={result} />
    </div>
  );
};
