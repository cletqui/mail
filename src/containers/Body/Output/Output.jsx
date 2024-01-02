import React from "react";

export const Output = React.forwardRef(({ result }, ref) => {
  return (
    <div className="Output" ref={ref}>
      {result ? <h1>Output</h1> : null}
    </div>
  );
});
