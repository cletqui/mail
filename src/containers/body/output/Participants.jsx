import { FaUsers } from "react-icons/fa6";

import { Section } from "../../../components/layout/Section";
import { List } from "../../../components/layout/List";

export const Participants = ({ result }) => {
  const {
    participants: { from, to },
  } = result;

  return (
    <Section title="Participants" icon={<FaUsers />}>
      <h4>From:</h4>
      <List key={"from"} listKey={"from"} list={from} />

      {to && (
        <>
          <h4>To:</h4>
          {to.map((value, index) => (
            <List key={`to-${index}`} listKey={`to-${index}`} list={value} />
          ))}
        </>
      )}
    </Section>
  );
};
