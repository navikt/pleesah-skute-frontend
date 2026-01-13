import * as React from "react";
import { Link } from "react-router-dom";

interface OppgaveProps {
  overskrift: string;
  oppgavetekst: React.ReactNode;
  hint?: {
    hint1?: string;
    hint2?: string;
    hint3?: string;
    hint4?: string;
    hint5?: string;
  };
  nesteOppgavenummer: number;
}

export const Oppgaveside = ({
  overskrift,
  oppgavetekst,
  hint,
  nesteOppgavenummer,
}: OppgaveProps) => {
  return (
    <>
      <h1>{overskrift}</h1>
      {oppgavetekst}
      {hint && (
        <div className={"hint_container"}>
          {hint.hint1 && (
            <button onClick={() => alert(hint.hint1)}>Hint 1</button>
          )}
          {hint.hint2 && (
            <button onClick={() => alert(hint.hint2)}>Hint 2</button>
          )}
          {hint.hint3 && (
            <button onClick={() => alert(hint.hint3)}>Hint 3</button>
          )}
          {hint.hint4 && (
            <button onClick={() => alert(hint.hint4)}>Hint 4</button>
          )}
        </div>
      )}
      <div className="startlink">
        <Link to={`/oppgaver/${nesteOppgavenummer}/`}>Neste oppgave!</Link>
      </div>
    </>
  );
};
