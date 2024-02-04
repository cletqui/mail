import { FaCircleInfo } from "react-icons/fa6";

import { Section } from "../../../components/layout/Section";
import { List } from "../../../components/layout/List";

export const General = ({ result }) => {
  const { subject, messageId, date } = result;

  return (
    <Section title={"General"} icon={<FaCircleInfo />}>
      <List listKey={"general"} list={{ subject, messageId, date }} />
    </Section>
  );
};
