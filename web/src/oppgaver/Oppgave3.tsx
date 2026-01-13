import { Oppgaveside } from "../pages/Oppgaveside.tsx";
import ReactMarkdown from "react-markdown";
import oppgave3Tekst from "./oppgavetekster/oppgave3Tekst.md?raw";

export const Oppgave3 = () => {
  return (
    <Oppgaveside
      overskrift="Oppgave 3 - Sjekke logger"
      oppgavetekst={<ReactMarkdown>{oppgave3Tekst}</ReactMarkdown>}
      hint={{
        hint1:
          "https://kubernetes.io/docs/concepts/configuration/liveness-readiness-startup-probes/",
        hint2:
          "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_logs/",
        hint3: "kubectl logs <DIN SKUTE> \n",
      }}
      nesteOppgavenummer={4}
    />
  );
};
