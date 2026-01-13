import * as React from "react";
import { Link } from "react-router-dom";

interface OppgaveProps {
  overskrift: string;
  oppgavetekst: React.ReactNode;
  hint1?: string;
  hint2?: string;
  hint3?: string;
  oppgaveknapp: {
    oppgavenummer: number;
    lenketekst: string;
  };
}

export const Oppgaveside = ({
  overskrift,
  oppgavetekst,
  hint1,
  hint2,
  hint3,
  oppgaveknapp,
}: OppgaveProps) => {
  return (
    <>
      <h1>{overskrift}</h1>
      {oppgavetekst}

      <div className={"hint_container"}>
        {hint1 && <button onClick={() => alert(hint1)}>Hint 1</button>}
        {hint2 && <button onClick={() => alert(hint2)}>Hint 2</button>}
        {hint3 && <button onClick={() => alert(hint3)}>Hint 3</button>}
      </div>

      <div className="startlink">
        <Link to={`/oppgaver/${oppgaveknapp.oppgavenummer}/`}>
          {oppgaveknapp.lenketekst}
        </Link>
      </div>
    </>
  );
};
