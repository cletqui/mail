import React from "react";

import { Section } from "../../../components/layout/section/Section";

export const Output = React.forwardRef(({ result }, ref) => {
  return (
    <div className="Output" ref={ref}>
      {result ? (
        <div>
          <h1>Output</h1>
          {Object.entries(result).map(([key, value]) => {
            return <Section key={key} type={key} content={value} />;
          })}
        </div>
      ) : null}
    </div>
  );
});
