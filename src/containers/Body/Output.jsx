import React from "react";

import { General } from "./output/General";
import { Participants } from "./output/Participants";
import { Content } from "./output/Content";
import { Headers } from "./output/Headers";

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
