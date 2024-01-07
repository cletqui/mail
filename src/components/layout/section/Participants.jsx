import { Section } from "./Section";
import { List } from "../list/List";

export const Participants = ({ result }) => {
  const {
    participants: { from, to },
  } = result;

  return (
    <Section title={"Participants"}>
      <h4>{"From:"}</h4>
      <List key={"from"} list={from} />

      {to && (
        <>
          <h4>{"To:"}</h4>
          {to.map((value) => (
            <List key={"to"} list={value} />
          ))}
        </>
      )}
    </Section>
  );
};
