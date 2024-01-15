import { Section } from "../../../components/layout/Section";
import { List } from "../../../components/layout/List";
import { Card } from "../../../components/layout/Card";

import { niceBytes } from "../../../utils/helpers/print";

export const Content = ({ result }) => {
  const { text, html, attachments, links } = result;

  return (
    <Section title={"Content"}>
      {text && (
        <>
          <h4>{"Text:"}</h4>

          <Card>{text}</Card>
        </>
      )}

      {html && (
        <>
          <h4>{"HTML:"}</h4>

          <Card>{html}</Card>
        </>
      )}

      {links?.length > 0 && (
        <>
          <h4>{"Links:"}</h4>

          <List key={"links"} listKey={"links"} list={links} />
        </>
      )}

      {attachments?.length > 0 && (
        <>
          <h4>{"Attachments:"}</h4>

          <Card>
            {attachments.map((attachment, index) => {
              const list = { ...attachment, size: niceBytes(attachment.size) };
              return (
                <div>
                  <em>{attachment.filename}</em>
                  <List
                    key={`attachment-${index}`}
                    listKey={`attachment-${index}`}
                    list={list}
                  />
                </div>
              );
            })}
          </Card>
        </>
      )}
    </Section>
  );
};
