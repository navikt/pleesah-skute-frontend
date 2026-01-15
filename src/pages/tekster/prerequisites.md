## Før du spiller må du ha:

- IDE (Velg hva du liker)
- Ha noe kjennskap til .yaml-filer
- Kubectl : `brew install kubectl`

`kubectl` er Kubernetes sin egen kommandolinjeverktøy for å snakke med et Kubernetes cluster.

`kubectl [KOMMANDO] [RESSURSTYPE] [RESSURSNAVN] [FLAGG]`

## For å komme igang

- [Besøk nettsiden](https://pleesah.ansatt.dev.nav.no/)
- Opprett en fil som heter `.config`
- Lim innholdet fra nettsiden inn i filen
- Kjør `export KUBECONFIG=./config` i din terminal

## Tips og triks

- Hvis du er usikker på `kubectl` kommandoer under spillets gang kan du bruke `kubeclt -h` for å få opp en liste over
  kommandoer.
- For å lese mer informasjon om noe (f.eks poden din) kan du bruke `kubectl describe`
