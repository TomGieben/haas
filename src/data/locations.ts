import { Location } from '../domain/Location';

export const locations: Location[] = [
  new Location({ id: 'centrum', name: 'Arnhem Centrum', coords: [51.9851, 5.8987], availableHomes: 14 }),
  new Location({ id: 'noord', name: 'Arnhem Noord (Geitenkamp)', coords: [52.0061, 5.9094], availableHomes: 9 }),
  new Location({ id: 'klarendal', name: 'Klarendal', coords: [51.9925, 5.9168], availableHomes: 11 }),
  new Location({ id: 'presikhaaf', name: 'Presikhaaf', coords: [52.0012, 5.9335], availableHomes: 16 }),
  new Location({ id: 'malburgen', name: 'Malburgen', coords: [51.9665, 5.9275], availableHomes: 12 }),
  new Location({ id: 'schuytgraaf', name: 'Schuytgraaf', coords: [51.9418, 5.8554], availableHomes: 8 }),
  new Location({ id: 'rijkerswoerd', name: 'Rijkerswoerd', coords: [51.9495, 5.9023], availableHomes: 6 }),
  new Location({ id: 'velperpoort', name: 'Velperpoort', coords: [51.9881, 5.9192], availableHomes: 7 }),
];
