## Hei og velkommen til Pleesah Game!

### Piratversjonen av Livet Er En Strøm Av Hendelser.

Her skal du lære om Kubernetes. Målet med kurset er å gi et lite innblikk i hva Kubernetes er, hva man kan gjøre med Kubernetes og hvordan. Her har du mulighet til å prøve deg frem, feile og prøve på nytt!

## Hva er Kubernetes?

Du kan tenke på Kubernetes som en havnesjef, Havnesjefen har kontroll på mange armadaer med skuter.
Kubernetes passer på `deployments` som i vår analogi er admiraler. Hver `deployment` består av `pods` som her
er skuter. En admiral har altså kontroll over flere skuter, og administrerer disse.
En skute kan ha last som tilsvarer en eller flere `containere` i en `pod`.
Havnesjefen kan holde skuter flytende eller senke de om hen ønsker, og holder styr på trafikken mellom skutene.

### Oppsummert:

- Havnesjef - Kubernetes
- Admiral - Deployment
- Skute - Pod
- Last - Container
- Mannskap - Teamets deltakere
- Armada - Mange skuter/En gruppe av flere pods
- Radiotårn - Service
