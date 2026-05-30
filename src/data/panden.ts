export interface Pand {
  id: string;
  straat: string;
  huisnummer: string;
  wijk: string;
  bouwjaar: number;
  oppervlakte: number;
  kamers: number;
  coords: [number, number];
  geinteresseerd: number;
}

export interface Aanvrager {
  naam: string;
  score: number;
  situatie: string;
  datum: string;
}

export const panden: Pand[] = [
  { id: '1', straat: 'Velperweg',           huisnummer: '12',   wijk: 'Velperpoort',  bouwjaar: 1965, oppervlakte: 72,  kamers: 3, coords: [51.9881, 5.9192], geinteresseerd: 8  },
  { id: '2', straat: 'Kronenburgsingel',     huisnummer: '34A',  wijk: 'Centrum',      bouwjaar: 1978, oppervlakte: 58,  kamers: 2, coords: [51.9799, 5.8993], geinteresseerd: 5  },
  { id: '3', straat: 'Eusebiusbuitensingel', huisnummer: '7',    wijk: 'Centrum',      bouwjaar: 1952, oppervlakte: 91,  kamers: 4, coords: [51.9851, 5.9010], geinteresseerd: 12 },
  { id: '4', straat: 'Hommelseweg',          huisnummer: '91',   wijk: 'Klarendal',    bouwjaar: 1989, oppervlakte: 64,  kamers: 3, coords: [51.9955, 5.9130], geinteresseerd: 3  },
  { id: '5', straat: 'Zijpendaalseweg',      huisnummer: '55B',  wijk: 'Arnhem Noord', bouwjaar: 2001, oppervlakte: 83,  kamers: 3, coords: [51.9970, 5.8850], geinteresseerd: 7  },
  { id: '6', straat: 'Parkstraat',           huisnummer: '18',   wijk: 'Centrum',      bouwjaar: 1970, oppervlakte: 55,  kamers: 2, coords: [51.9870, 5.9050], geinteresseerd: 2  },
];

export const aanvragersByPand: Record<string, Aanvrager[]> = {
  '1': [
    { naam: 'A. de Vries',        score: 94, situatie: 'Alleenstaand',    datum: '28 mei 2026' },
    { naam: 'T. Smit',            score: 87, situatie: 'Alleenstaand',    datum: '27 mei 2026' },
    { naam: 'M. El Bakkali',      score: 81, situatie: 'Stel',            datum: '26 mei 2026' },
    { naam: 'K. Jansen',          score: 74, situatie: 'Alleenstaand',    datum: '25 mei 2026' },
    { naam: 'Familie Okonkwo',    score: 68, situatie: 'Gezin (2 kids)',   datum: '23 mei 2026' },
    { naam: 'R. van den Berg',    score: 61, situatie: 'Stel',            datum: '22 mei 2026' },
    { naam: 'S. Yilmaz',          score: 55, situatie: 'Alleenstaand',    datum: '21 mei 2026' },
    { naam: 'P. Hendriks',        score: 49, situatie: 'Alleenstaand',    datum: '20 mei 2026' },
  ],
  '2': [
    { naam: 'L. Bakker',          score: 91, situatie: 'Stel',            datum: '27 mei 2026' },
    { naam: 'D. Mulder',          score: 79, situatie: 'Alleenstaand',    datum: '26 mei 2026' },
    { naam: 'C. Visser',          score: 66, situatie: 'Alleenstaand',    datum: '24 mei 2026' },
    { naam: 'W. de Jong',         score: 58, situatie: 'Stel',            datum: '22 mei 2026' },
    { naam: 'B. Nguyen',          score: 45, situatie: 'Alleenstaand',    datum: '19 mei 2026' },
  ],
  '3': [
    { naam: 'Familie Okonkwo',    score: 96, situatie: 'Gezin (2 kids)',   datum: '29 mei 2026' },
    { naam: 'H. Peters',          score: 89, situatie: 'Stel',            datum: '28 mei 2026' },
    { naam: 'A. de Vries',        score: 84, situatie: 'Alleenstaand',    datum: '27 mei 2026' },
    { naam: 'N. Bosman',          score: 78, situatie: 'Stel',            datum: '26 mei 2026' },
    { naam: 'V. Meijer',          score: 71, situatie: 'Alleenstaand',    datum: '25 mei 2026' },
    { naam: 'R. Linden',          score: 63, situatie: 'Gezin (1 kid)',    datum: '24 mei 2026' },
    { naam: 'F. Timmermans',      score: 57, situatie: 'Alleenstaand',    datum: '23 mei 2026' },
    { naam: 'G. van Dam',         score: 51, situatie: 'Stel',            datum: '22 mei 2026' },
    { naam: 'I. Hofman',          score: 44, situatie: 'Alleenstaand',    datum: '21 mei 2026' },
    { naam: 'J. Willems',         score: 39, situatie: 'Alleenstaand',    datum: '20 mei 2026' },
    { naam: 'K. van Leeuwen',     score: 33, situatie: 'Stel',            datum: '19 mei 2026' },
    { naam: 'O. Schouten',        score: 28, situatie: 'Alleenstaand',    datum: '18 mei 2026' },
  ],
  '4': [
    { naam: 'S. Yilmaz',          score: 88, situatie: 'Alleenstaand',    datum: '26 mei 2026' },
    { naam: 'T. Smit',            score: 73, situatie: 'Alleenstaand',    datum: '24 mei 2026' },
    { naam: 'E. Prins',           score: 62, situatie: 'Stel',            datum: '22 mei 2026' },
  ],
  '5': [
    { naam: 'M. El Bakkali',      score: 93, situatie: 'Stel',            datum: '28 mei 2026' },
    { naam: 'K. Jansen',          score: 85, situatie: 'Alleenstaand',    datum: '27 mei 2026' },
    { naam: 'P. Hendriks',        score: 76, situatie: 'Alleenstaand',    datum: '26 mei 2026' },
    { naam: 'Y. de Groot',        score: 69, situatie: 'Gezin (1 kid)',    datum: '25 mei 2026' },
    { naam: 'Z. Kuijpers',        score: 60, situatie: 'Stel',            datum: '23 mei 2026' },
    { naam: 'A. Wolters',         score: 52, situatie: 'Alleenstaand',    datum: '21 mei 2026' },
    { naam: 'B. van Dijk',        score: 43, situatie: 'Alleenstaand',    datum: '20 mei 2026' },
  ],
  '6': [
    { naam: 'R. van den Berg',    score: 90, situatie: 'Alleenstaand',    datum: '27 mei 2026' },
    { naam: 'C. Visser',          score: 72, situatie: 'Stel',            datum: '25 mei 2026' },
  ],
};
