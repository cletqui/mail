import { Section } from "../../../components/layout/Section";
import { Table } from "../../../components/layout/Table";

export const Headers = ({ result }) => {
  const { headers } = result;

  return (
    <Section title={"Headers"}>
      <Table list={headers} />
    </Section>
  );
};
