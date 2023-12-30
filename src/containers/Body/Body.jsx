import { useState } from "react";

import { Input } from "./Input/Input";
import { Output } from "./Output/Output";

export const Body = () => {
  const [result, setResult] = useState(null);

  return (
    <div className="Body">
      <Input setResult={setResult} />
      <Output result={result} />
    </div>
  );
};
