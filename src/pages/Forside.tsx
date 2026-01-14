import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import forside from "./tekster/forside.md?raw";
import PleesahLogo from "../assets/pleesahlogo_nopirate.png";

export const Forside = () => {
  return (
    <>
      <img
        className="pleesah_logo"
        src={PleesahLogo}
        alt="Et bilde av en pirat og logoen til Pleesah"
      />
      <ReactMarkdown>{forside}</ReactMarkdown>

      <Link to="/prerequisites/" className="lenke lenke_neste">
        Skip o'hoi! Start eventyret her!
      </Link>
    </>
  );
};
