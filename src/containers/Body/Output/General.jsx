import { Section } from "../../../components/layout/section/Section";
import { List } from "../../../components/layout/list/List";

export const General = ({ result }) => {
  const { subject, messageId, date } = result;

  return (
    <Section title={"General"}>
      <List key={"general"} list={{ subject, messageId, date }} />
    </Section>
  );
};
