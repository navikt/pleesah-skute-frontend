import { Oppgaveside } from "../pages/Oppgaveside.tsx";
import oppgave1Tekst from "./oppgavetekster/oppgave1Tekst.md?raw";
import ReactMarkdown from "react-markdown";

export const Oppgave1 = () => {
  return (
    <Oppgaveside
      overskrift="Oppgave 1 - Sjøsette skuta"
      oppgavetekst={<ReactMarkdown>{oppgave1Tekst}</ReactMarkdown>}
      hint1="https://kubernetes.io/docs/reference/kubectl/generated/kubectl_apply/"
      hint2="kubectl apply -f <FILNAVN>"
      oppgaveknapp={{ oppgavenummer: 2, lenketekst: "Neste oppgave!" }}
    />
  );
};
