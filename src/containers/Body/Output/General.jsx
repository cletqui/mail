import { Section } from "../../../components/layout/Section";
import { List } from "../../../components/layout/List";

export const General = ({ result }) => {
  const { subject, messageId, date } = result;

  return (
    <Section title={"General"}>
      <List listKey={"general"} list={{ subject, messageId, date }} />
    </Section>
  );
};
