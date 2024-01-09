import { Section } from "../../../components/layout/section/Section";
import { List } from "../../../components/layout/list/List";
import { niceBytes } from "../../../utils/helpers/print";

export const Content = ({ result }) => {
  const { text, html, attachments, links } = result;

  return (
    <Section title={"Content"}>
      {text && (
        <>
          <h4>{"Text:"}</h4>
          {text}
        </>
      )}

      {html && (
        <>
          <h4>{"HTML:"}</h4>
          {html}
        </>
      )}

      {links && (
        <>
          <h4>{"Links:"}</h4>
        </>
      )}

      {attachments?.length > 0 && (
        <>
          <h4>{"Attachments:"}</h4>
          {attachments.map((attachment) => {
            const list = { ...attachment, size: niceBytes(attachment.size) };
            return (
              <>
                {attachment.filename}
                <List list={list} />
              </>
            );
          })}
        </>
      )}
    </Section>
  );
};
