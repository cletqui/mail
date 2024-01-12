import { useState } from "react";

import { Title } from "./Title";

export const Section = ({ children, title }) => {
  const [isCollapsed, setCollapsed] = useState(false);

  const toggleVisible = () => {
    setCollapsed((collapsed) => !collapsed);
  };

  return (
    <div className={`Section${isCollapsed ? " collapsed" : ""}`}>
      <Title title={title} onClick={toggleVisible} />
      {isCollapsed ? null : children}
    </div>
  );
};
