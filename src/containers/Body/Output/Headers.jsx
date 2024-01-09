import { Section } from "../../../components/layout/section/Section";
import { Table } from "../../../components/layout/table/Table";

export const Headers = ({ result }) => {
  const { headers } = result;

  return (
    <Section title={"Headers"}>
      <Table list={headers} />
    </Section>
  );
};
