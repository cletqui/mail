import { Title } from "../../../components/layout";

export const Section = ({ type, content }) => {
  return (
    <div className="Section">
      <Title title={type} />
      {JSON.stringify(content)}
    </div>
  );
};
