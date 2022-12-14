import { PropsWithChildren } from "react";

function getAnchor(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/[ ]/g, '-');
}

const H2 = ({ children }: PropsWithChildren) => {
  const anchor = getAnchor(children as string);
  const link = `#${anchor}`;
  return (
    <h2 id={anchor}>
      <a href={link} className="anchor-link">
        #
      </a>
      {children}
    </h2>
  );
};
export default H2;