# HaaS — Housing as a Service (Gemeente Arnhem)

Interactieve prototype-app voor de gemeente Arnhem waarmee inwoners hun woonprofiel kunnen invullen, een wijk kunnen kiezen op een kaart, matches en potentiële woongenoten kunnen bekijken en de voortgang van hun woningaanvraag kunnen volgen.

## Tech stack

| Onderdeel        | Keuze                                                |
| ---------------- | ---------------------------------------------------- |
| Framework        | [Vue 3](https://vuejs.org/) (`<script setup>`)       |
| Taal             | TypeScript (strict)                                  |
| Build tool       | [Vite](https://vite.dev/)                            |
| Routing          | Vue Router 4                                         |
| State management | Pinia                                                |
| Styling          | TailwindCSS 3 + SCSS (gedeelde tokens & mixins)      |
| Kaart            | [Leaflet](https://leafletjs.com/) + OpenStreetMap    |
| Lettertype       | Inter (via Google Fonts)                             |

### Architectuur

De applicatie volgt een OOP-aanpak met duidelijke scheiding tussen lagen:

```
src/
├─ domain/         TypeScript-classes (User, Match, Housemate, Location, ProgressStep, Enums)
├─ services/       Stateless business-logic (MatchingService, ProgressService)
├─ data/           Mock-data (instanties van domain-classes)
├─ stores/         Pinia stores die domain-instanties beheren
├─ router/         Vue Router configuratie
├─ layouts/        AppLayout (header, footer, chatbot shell)
├─ components/
│  ├─ layout/      AppHeader, NavTabs, AppFooter, ChatbotWidget
│  ├─ ui/          Herbruikbare primitives (BaseButton, BaseCard, MatchBadge, ...)
│  ├─ profile/     ProfileForm
│  ├─ locations/   LocationMap, LocationList
│  ├─ matches/     MatchCard
│  ├─ housemates/  SwipeDeck, HousemateCard
│  └─ progress/    ProgressTracker, StepDetail
├─ views/          ProfileView, LocationsView, MatchesView, HousematesView, ProgressView
└─ assets/styles/  main.scss, _variables.scss, _mixins.scss
```

## Vereisten

- **Node.js** 18.x of nieuwer (LTS aanbevolen)
- **npm** 9.x of nieuwer (wordt met Node meegeleverd)

Controleer met:

```powershell
node --version
npm --version
```

## Installatie & lokaal draaien

1. **Repository clonen / openen**

   ```powershell
   cd c:\root-of-project-folder\
   ```

2. **Dependencies installeren**

   ```powershell
   npm install
   ```

3. **Dev-server starten**

   ```powershell
   npm run dev
   ```

   De app draait standaard op [http://localhost:5173](http://localhost:5173) en herlaadt automatisch bij wijzigingen.

## Beschikbare scripts

| Commando          | Wat doet het                                              |
| ----------------- | --------------------------------------------------------- |
| `npm run dev`     | Start de Vite dev-server met HMR                          |
| `npm run build`   | Type-check (`vue-tsc`) + productiebuild naar `dist/`      |
| `npm run preview` | Serveert de productiebuild lokaal ter controle            |

## Routes

| Pad             | View                | Beschrijving                                     |
| --------------- | ------------------- | ------------------------------------------------ |
| `/profiel`      | `ProfileView`       | Voorkeuren invullen (huishouden, budget, leefstijl) |
| `/locaties`     | `LocationsView`     | Wijk kiezen op interactieve kaart van Arnhem     |
| `/matches`      | `MatchesView`       | Lijst met gematchte personen in de buurt         |
| `/woongenoten`  | `HousematesView`    | Tinder-style swipe-deck voor woongenoten         |
| `/voortgang`    | `ProgressView`      | Status van de aanvraag (4 stappen)               |

## Troubleshooting

- **Poort 5173 in gebruik** — Vite zoekt automatisch een vrije poort, of start expliciet met `npm run dev -- --port 3000`.
- **Kaart laadt niet** — controleer of `leaflet/dist/leaflet.css` geïmporteerd is in `src/main.ts` en of er een internetverbinding is voor de OSM-tiles.
- **Type-fouten na editen** — draai `npm run build` om alle type-fouten in één keer te zien.
# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).
