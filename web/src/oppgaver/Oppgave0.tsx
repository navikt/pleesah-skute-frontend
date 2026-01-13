import { Oppgaveside } from "../pages/Oppgaveside.tsx";
import ReactMarkdown from "react-markdown";
import oppgave0Tekst from "./oppgavetekster/oppgave0Tekst.md?raw";

export const Oppgave0 = () => {
  return (
    <Oppgaveside
      overskrift="Oppgave 0 - Skue utover havna"
      oppgavetekst={<ReactMarkdown>{oppgave0Tekst}</ReactMarkdown>}
      hint1="https://kubernetes.io/docs/reference/kubectl/generated/kubectl_get/"
      hint2="kubectl get pods <DIN SKUTE>"
      oppgaveknapp={{ oppgavenummer: 1, lenketekst: "Neste oppgave!" }}
    />
  );
};
