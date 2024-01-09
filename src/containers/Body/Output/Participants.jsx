import { Section } from "../../../components/layout/section/Section";
import { List } from "../../../components/layout/list/List";

export const Participants = ({ result }) => {
  const {
    participants: { from, to },
  } = result;

  return (
    <Section title="Participants">
      <h4>From:</h4>
      <List list={from} />

      {to && (
        <>
          <h4>To:</h4>
          {to.map((value) => (
            <List list={value} />
          ))}
        </>
      )}
    </Section>
  );
};
