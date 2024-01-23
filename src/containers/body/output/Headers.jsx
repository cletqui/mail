import { Section } from "../../../components/layout/Section";
import { Table } from "../../../components/layout/Table";
import { parseReceivedHeader } from "../../../utils/helpers/parse";

export const Headers = ({ result }) => {
  const { headers } = result;
  const received = parseReceivedHeader(headers);

  return (
    <Section title={"Headers"}>
      {received?.length > 0 ? (
        <>
          <h4>Received:</h4>
          <Table list={received} />
        </>
      ) : null}

      {headers?.length > 0 ? (
        <>
          <h4>List:</h4>
          <Table list={headers} />
        </>
      ) : null}
    </Section>
  );
};
