import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import forside from "./oppgaver/oppgavetekster/forside.md?raw";

export const Forside = () => {
  return (
    <>
      <h1>Pleesah Game</h1>
      <ReactMarkdown>{forside}</ReactMarkdown>
      <div className="startlink">
        <Link to="/oppgaver/0/">Start spillet!</Link>
      </div>
    </>
  );
};
