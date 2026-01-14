## Før du spiller må du ha:

- Colima installert : `brew install colima`
- IDE (Velg hva du liker)
- Ha noe kjennskap til .yaml-filer
- Kubectl : `brew install kubectl`

`kubectl` er Kubernetes sin egen kommandolinjeverktøy for å snakke med et Kubernetes cluster.

```kubectl [KOMMANDO] [RESSURSTYPE] [RESSURSNAVN] [FLAGG]```

## Før spillet kan du kjøre disse kommandoene for å komme igang

1. Sette opp ditt lokale Kubernetes `cluster`:

   ```colima kubernetes start```

2. Sette opp ditt lokale namespace:

   ```kubectl create namespace <DITT LAGNAVN>```

3. Lag en hemmelighet

   ```kubectl create secret generic koordinatene-mine --from-literal=KOORDINATER="59.9124° N, 10.7962° E"```

4. Bytt til riktig context

   ```kubectl config set-context pleesah```

5. Bytt til ditt namespace

   ```kubectl config set-context —current —namespace=<DITT LAGNAVN>```

## Tips og triks

- Hvis du er usikker på `kubectl` kommandoer under spillets gang kan du bruke ```kubeclt -h``` for å få opp en liste over
  kommandoer.
- For å lese mer informasjon om noe (f.eks poden din) kan du bruke ```kubectl describe```
