import { Section } from "./Section";
import { List } from "../list/List";

export const General = ({ result }) => {
  const { subject, messageId, date } = result;

  return (
    <Section title={"General"}>
      <List key={"general"} list={{ subject, messageId, date }} />
    </Section>
  );
};
