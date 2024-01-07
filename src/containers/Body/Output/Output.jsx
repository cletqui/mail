import React from "react";

import {
  Section,
  General,
  Participants,
  Content,
} from "../../../components/layout";
import { Raw } from "../../../components/layout/raw/Raw";

export const Output = React.forwardRef(({ result }, ref) => {
  return (
    <div className="Output" ref={ref}>
      {result ? (
        <>
          <h1>Output</h1>

          <General result={result} />

          <Participants result={result} />

          <Content result={result} />

          {Object.entries(result).map(([key, value]) => {
            return (
              <Section key={key} title={key}>
                <Raw content={value} />
              </Section>
            );
          })}
        </>
      ) : null}
    </div>
  );
});
