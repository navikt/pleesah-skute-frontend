import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import prerequisites from "./tekster/prerequisites.md?raw";

export const Prerequisites = () => {
  return (
    <>
      <Link to={"/"}>Tilbake til forsiden</Link>
      <ReactMarkdown>{prerequisites}</ReactMarkdown>

      <Link to="/oppgaver/0/" className="lenke lenke_neste">
        Gå til første oppgave!
      </Link>
    </>
  );
};
