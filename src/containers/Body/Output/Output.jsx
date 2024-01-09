import React from "react";

import { General } from "./General";
import { Participants } from "./Participants";
import { Content } from "./Content";
import { Headers } from "./Headers";

export const Output = React.forwardRef(({ result }, ref) => {
  return (
    <div className="Output" ref={ref}>
      {result && (
        <>
          <h1>Output</h1>

          <General result={result} />

          <Participants result={result} />

          <Headers result={result} />

          <Content result={result} />

          {/* {Object.entries(result).map(([key, value]) => (
            <Section key={key} title={key}>
              <Raw content={value} />
            </Section>
          ))} */}
        </>
      )}
    </div>
  );
});
