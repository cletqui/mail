import { useState } from "react";

import { Title } from "./Title";

export const Section = ({ children, title, icon }) => {
  const [isCollapsed, setCollapsed] = useState(false);

  const toggleVisible = () => {
    setCollapsed((collapsed) => !collapsed);
  };

  return (
    <div className={`Section${isCollapsed ? " collapsed" : ""}`}>
      <Title title={title} icon={icon} onClick={toggleVisible} />
      {isCollapsed ? null : children}
    </div>
  );
};
