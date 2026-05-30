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
  id: string;
  naam: string;
  score: number;
  situatie: string;
  datum: string;
}

export interface Document {
  naam: string;
  status: 'geverifieerd' | 'in_behandeling' | 'ontbreekt';
}

export interface VorigeAanvraag {
  adres: string;
  jaar: number;
  uitkomst: string;
}

export interface Woonwens {
  kinderen: boolean;
  huisdier: boolean;
  woongroep: boolean;
}

export interface AanvragerDetail {
  id: string;
  naam: string;
  geboortedatum: string;
  email: string;
  telefoon: string;
  huishoudenGrootte: number;
  huidigeSituatie: string;
  inschrijfdatum: string;
  wachtlijstJaren: number;
  woonwens: Woonwens;
  vorigeAanvragen: VorigeAanvraag[];
  documenten: Document[];
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
    { id: 'a-de-vries',     naam: 'A. de Vries',      score: 94, situatie: 'Alleenstaand',   datum: '28 mei 2026' },
    { id: 't-smit',         naam: 'T. Smit',           score: 87, situatie: 'Alleenstaand',   datum: '27 mei 2026' },
    { id: 'm-el-bakkali',   naam: 'M. El Bakkali',     score: 81, situatie: 'Stel',           datum: '26 mei 2026' },
    { id: 'k-jansen',       naam: 'K. Jansen',         score: 74, situatie: 'Alleenstaand',   datum: '25 mei 2026' },
    { id: 'familie-okonkwo',naam: 'Familie Okonkwo',   score: 68, situatie: 'Gezin (2 kids)', datum: '23 mei 2026' },
    { id: 'r-van-den-berg', naam: 'R. van den Berg',   score: 61, situatie: 'Stel',           datum: '22 mei 2026' },
    { id: 's-yilmaz',       naam: 'S. Yilmaz',         score: 55, situatie: 'Alleenstaand',   datum: '21 mei 2026' },
    { id: 'p-hendriks',     naam: 'P. Hendriks',       score: 49, situatie: 'Alleenstaand',   datum: '20 mei 2026' },
  ],
  '2': [
    { id: 'l-bakker',       naam: 'L. Bakker',         score: 91, situatie: 'Stel',           datum: '27 mei 2026' },
    { id: 'd-mulder',       naam: 'D. Mulder',         score: 79, situatie: 'Alleenstaand',   datum: '26 mei 2026' },
    { id: 'c-visser',       naam: 'C. Visser',         score: 66, situatie: 'Alleenstaand',   datum: '24 mei 2026' },
    { id: 'w-de-jong',      naam: 'W. de Jong',        score: 58, situatie: 'Stel',           datum: '22 mei 2026' },
    { id: 'b-nguyen',       naam: 'B. Nguyen',         score: 45, situatie: 'Alleenstaand',   datum: '19 mei 2026' },
  ],
  '3': [
    { id: 'familie-okonkwo',naam: 'Familie Okonkwo',   score: 96, situatie: 'Gezin (2 kids)', datum: '29 mei 2026' },
    { id: 'h-peters',       naam: 'H. Peters',         score: 89, situatie: 'Stel',           datum: '28 mei 2026' },
    { id: 'a-de-vries',     naam: 'A. de Vries',       score: 84, situatie: 'Alleenstaand',   datum: '27 mei 2026' },
    { id: 'n-bosman',       naam: 'N. Bosman',         score: 78, situatie: 'Stel',           datum: '26 mei 2026' },
    { id: 'v-meijer',       naam: 'V. Meijer',         score: 71, situatie: 'Alleenstaand',   datum: '25 mei 2026' },
    { id: 'r-linden',       naam: 'R. Linden',         score: 63, situatie: 'Gezin (1 kid)',  datum: '24 mei 2026' },
    { id: 'f-timmermans',   naam: 'F. Timmermans',     score: 57, situatie: 'Alleenstaand',   datum: '23 mei 2026' },
    { id: 'g-van-dam',      naam: 'G. van Dam',        score: 51, situatie: 'Stel',           datum: '22 mei 2026' },
    { id: 'i-hofman',       naam: 'I. Hofman',         score: 44, situatie: 'Alleenstaand',   datum: '21 mei 2026' },
    { id: 'j-willems',      naam: 'J. Willems',        score: 39, situatie: 'Alleenstaand',   datum: '20 mei 2026' },
    { id: 'k-van-leeuwen',  naam: 'K. van Leeuwen',    score: 33, situatie: 'Stel',           datum: '19 mei 2026' },
    { id: 'o-schouten',     naam: 'O. Schouten',       score: 28, situatie: 'Alleenstaand',   datum: '18 mei 2026' },
  ],
  '4': [
    { id: 's-yilmaz',       naam: 'S. Yilmaz',         score: 88, situatie: 'Alleenstaand',   datum: '26 mei 2026' },
    { id: 't-smit',         naam: 'T. Smit',           score: 73, situatie: 'Alleenstaand',   datum: '24 mei 2026' },
    { id: 'e-prins',        naam: 'E. Prins',          score: 62, situatie: 'Stel',           datum: '22 mei 2026' },
  ],
  '5': [
    { id: 'm-el-bakkali',   naam: 'M. El Bakkali',     score: 93, situatie: 'Stel',           datum: '28 mei 2026' },
    { id: 'k-jansen',       naam: 'K. Jansen',         score: 85, situatie: 'Alleenstaand',   datum: '27 mei 2026' },
    { id: 'p-hendriks',     naam: 'P. Hendriks',       score: 76, situatie: 'Alleenstaand',   datum: '26 mei 2026' },
    { id: 'y-de-groot',     naam: 'Y. de Groot',       score: 69, situatie: 'Gezin (1 kid)',  datum: '25 mei 2026' },
    { id: 'z-kuijpers',     naam: 'Z. Kuijpers',       score: 60, situatie: 'Stel',           datum: '23 mei 2026' },
    { id: 'a-wolters',      naam: 'A. Wolters',        score: 52, situatie: 'Alleenstaand',   datum: '21 mei 2026' },
    { id: 'b-van-dijk',     naam: 'B. van Dijk',       score: 43, situatie: 'Alleenstaand',   datum: '20 mei 2026' },
  ],
  '6': [
    { id: 'r-van-den-berg', naam: 'R. van den Berg',   score: 90, situatie: 'Alleenstaand',   datum: '27 mei 2026' },
    { id: 'c-visser',       naam: 'C. Visser',         score: 72, situatie: 'Stel',           datum: '25 mei 2026' },
  ],
};

type DocStatus = 'geverifieerd' | 'in_behandeling' | 'ontbreekt';

function profile(
  id: string, naam: string, geb: string, email: string, tel: string,
  grootte: number, situatie: string, inschrijf: string, jaren: number,
  woonwens: [boolean, boolean, boolean],
  vorige: [string, number, string][],
  docs: [string, DocStatus][],
): AanvragerDetail {
  return {
    id, naam, geboortedatum: geb, email, telefoon: tel,
    huishoudenGrootte: grootte, huidigeSituatie: situatie,
    inschrijfdatum: inschrijf, wachtlijstJaren: jaren,
    woonwens: { kinderen: woonwens[0], huisdier: woonwens[1], woongroep: woonwens[2] },
    vorigeAanvragen: vorige.map(([adres, jaar, uitkomst]) => ({ adres, jaar, uitkomst })),
    documenten: docs.map(([naam, status]) => ({ naam, status })),
  };
}

// woonwens tuple: [kinderen, huisdier, woongroep]
export const aanvragerProfielen: Record<string, AanvragerDetail> = {
  'a-de-vries': profile(
    'a-de-vries', 'A. de Vries', '14 maart 1988', 'a.devries@gmail.com', '06-12 34 56 78',
    1, 'Inwonend bij ouders', '3 februari 2019', 7,
    [false, true, false],
    [['Hommelseweg 44, Arnhem', 2022, 'Niet toegewezen'], ['Parkstraat 9, Arnhem', 2023, 'Niet toegewezen'], ['Velperweg 8, Arnhem', 2025, 'Ingetrokken']],
    [['ID-bewijs', 'geverifieerd'], ['Inkomensverklaring 2025', 'geverifieerd'], ['Uittreksel BRP', 'geverifieerd']],
  ),
  't-smit': profile(
    't-smit', 'T. Smit', '7 juni 1993', 't.smit@hotmail.com', '06-23 45 67 89',
    1, 'Huurder (sociale huur)', '15 april 2021', 5,
    [false, false, false],
    [['Kronenburgsingel 12, Arnhem', 2023, 'Niet toegewezen'], ['Klarendalseweg 55, Arnhem', 2024, 'Niet toegewezen']],
    [['ID-bewijs', 'geverifieerd'], ['Inkomensverklaring 2025', 'geverifieerd'], ['Uittreksel BRP', 'in_behandeling'], ['Huurcontract', 'geverifieerd']],
  ),
  'm-el-bakkali': profile(
    'm-el-bakkali', 'M. El Bakkali', '22 september 1990', 'm.elbakkali@gmail.com', '06-34 56 78 90',
    2, 'Inwonend bij familie', '8 januari 2020', 6,
    [true, false, false],
    [['Eusebiusbuitensingel 22, Arnhem', 2022, 'Niet toegewezen'], ['Velperweg 40, Arnhem', 2024, 'Niet toegewezen'], ['Hommelseweg 3, Arnhem', 2025, 'Ingetrokken']],
    [['ID-bewijs', 'geverifieerd'], ['Inkomensverklaring 2025', 'geverifieerd'], ['Uittreksel BRP', 'geverifieerd']],
  ),
  'k-jansen': profile(
    'k-jansen', 'K. Jansen', '3 november 1985', 'k.jansen@outlook.com', '06-45 67 89 01',
    2, 'Huurder (particulier)', '20 mei 2022', 4,
    [false, true, false],
    [['Presikhaaf 18, Arnhem', 2023, 'Niet toegewezen'], ['Schuytgraaf 7, Arnhem', 2025, 'Niet toegewezen']],
    [['ID-bewijs', 'geverifieerd'], ['Inkomensverklaring 2025', 'in_behandeling'], ['Uittreksel BRP', 'geverifieerd'], ['Huurcontract', 'geverifieerd']],
  ),
  'familie-okonkwo': profile(
    'familie-okonkwo', 'Familie Okonkwo', '12 februari 1982', 'c.okonkwo@gmail.com', '06-56 78 90 12',
    4, 'Tijdelijke woning (via gemeente)', '11 maart 2021', 5,
    [true, false, false],
    [['Malburgen 33, Arnhem', 2022, 'Niet toegewezen'], ['Rijkerswoerd 14, Arnhem', 2023, 'Niet toegewezen'], ['Eusebiusbuitensingel 5, Arnhem', 2024, 'Niet toegewezen']],
    [['ID-bewijs', 'geverifieerd'], ['Inkomensverklaring 2025', 'geverifieerd'], ['Uittreksel BRP', 'geverifieerd'], ['Bewijs schoolinschrijving kinderen', 'geverifieerd']],
  ),
  'r-van-den-berg': profile(
    'r-van-den-berg', 'R. van den Berg', '19 augustus 1992', 'r.vandenberg@gmail.com', '06-67 89 01 23',
    1, 'Antikraak', '2 september 2023', 3,
    [false, false, false],
    [['Parkstraat 22, Arnhem', 2024, 'Niet toegewezen'], ['Kronenburgsingel 8, Arnhem', 2025, 'Niet toegewezen']],
    [['ID-bewijs', 'geverifieerd'], ['Inkomensverklaring 2025', 'geverifieerd'], ['Uittreksel BRP', 'geverifieerd'], ['Antikraakcontract', 'geverifieerd']],
  ),
  's-yilmaz': profile(
    's-yilmaz', 'S. Yilmaz', '30 januari 1997', 's.yilmaz@gmail.com', '06-78 90 12 34',
    1, 'Daklozenopvang', '14 oktober 2022', 4,
    [false, false, true],
    [['Klarendalseweg 19, Arnhem', 2023, 'Niet toegewezen'], ['Hommelseweg 61, Arnhem', 2024, 'Niet toegewezen']],
    [['ID-bewijs', 'geverifieerd'], ['Inkomensverklaring 2025', 'in_behandeling'], ['Uittreksel BRP', 'geverifieerd'], ['Urgentieverklaring', 'geverifieerd']],
  ),
  'p-hendriks': profile(
    'p-hendriks', 'P. Hendriks', '5 april 1995', 'p.hendriks@hotmail.com', '06-89 01 23 45',
    1, 'Inwonend bij ouders', '27 juni 2021', 5,
    [false, false, true],
    [['Velperpoort 3, Arnhem', 2023, 'Niet toegewezen'], ['Zijpendaalseweg 30, Arnhem', 2024, 'Ingetrokken']],
    [['ID-bewijs', 'geverifieerd'], ['Inkomensverklaring 2025', 'geverifieerd'], ['Uittreksel BRP', 'in_behandeling']],
  ),
  'l-bakker': profile(
    'l-bakker', 'L. Bakker', '16 december 1987', 'l.bakker@gmail.com', '06-90 12 34 56',
    2, 'Huurder (sociale huur)', '5 maart 2020', 6,
    [true, true, false],
    [['Presikhaaf 44, Arnhem', 2022, 'Niet toegewezen'], ['Velperweg 30, Arnhem', 2023, 'Niet toegewezen'], ['Malburgen 10, Arnhem', 2025, 'Niet toegewezen']],
    [['ID-bewijs', 'geverifieerd'], ['Inkomensverklaring 2025', 'geverifieerd'], ['Uittreksel BRP', 'geverifieerd'], ['Huurcontract', 'geverifieerd']],
  ),
  'd-mulder': profile(
    'd-mulder', 'D. Mulder', '9 juli 1994', 'd.mulder@outlook.com', '06-01 23 45 67',
    1, 'Huurder (particulier)', '18 augustus 2023', 3,
    [false, false, true],
    [['Schuytgraaf 20, Arnhem', 2024, 'Niet toegewezen'], ['Centrum 9, Arnhem', 2025, 'Niet toegewezen']],
    [['ID-bewijs', 'geverifieerd'], ['Inkomensverklaring 2025', 'geverifieerd'], ['Uittreksel BRP', 'geverifieerd'], ['Huurcontract', 'in_behandeling']],
  ),
  'c-visser': profile(
    'c-visser', 'C. Visser', '28 mei 1991', 'c.visser@gmail.com', '06-12 34 56 78',
    1, 'Inwonend bij ouders', '9 januari 2022', 4,
    [false, true, false],
    [['Klarendal 7, Arnhem', 2023, 'Niet toegewezen'], ['Hommelseweg 88, Arnhem', 2024, 'Niet toegewezen']],
    [['ID-bewijs', 'geverifieerd'], ['Inkomensverklaring 2025', 'ontbreekt'], ['Uittreksel BRP', 'geverifieerd']],
  ),
  'h-peters': profile(
    'h-peters', 'H. Peters', '4 maart 1983', 'h.peters@gmail.com', '06-23 45 67 89',
    2, 'Huurder (sociale huur)', '22 november 2019', 7,
    [true, true, false],
    [['Rijkerswoerd 28, Arnhem', 2021, 'Niet toegewezen'], ['Velperpoort 11, Arnhem', 2022, 'Niet toegewezen'], ['Eusebiusbuitensingel 3, Arnhem', 2024, 'Niet toegewezen']],
    [['ID-bewijs', 'geverifieerd'], ['Inkomensverklaring 2025', 'geverifieerd'], ['Uittreksel BRP', 'geverifieerd'], ['Huurcontract', 'geverifieerd']],
  ),
  'n-bosman': profile(
    'n-bosman', 'N. Bosman', '17 oktober 1989', 'n.bosman@hotmail.com', '06-34 56 78 90',
    2, 'Antikraak', '6 april 2021', 5,
    [true, false, false],
    [['Malburgen 55, Arnhem', 2022, 'Niet toegewezen'], ['Presikhaaf 31, Arnhem', 2023, 'Niet toegewezen']],
    [['ID-bewijs', 'geverifieerd'], ['Inkomensverklaring 2025', 'geverifieerd'], ['Uittreksel BRP', 'geverifieerd'], ['Antikraakcontract', 'in_behandeling']],
  ),
  'e-prins': profile(
    'e-prins', 'E. Prins', '11 februari 1991', 'e.prins@gmail.com', '06-45 67 89 01',
    2, 'Huurder (particulier)', '30 juli 2023', 3,
    [true, false, false],
    [['Klarendal 42, Arnhem', 2024, 'Niet toegewezen'], ['Hommelseweg 77, Arnhem', 2025, 'Ingetrokken']],
    [['ID-bewijs', 'geverifieerd'], ['Inkomensverklaring 2025', 'in_behandeling'], ['Uittreksel BRP', 'geverifieerd']],
  ),
  'w-de-jong': profile(
    'w-de-jong', 'W. de Jong', '25 augustus 1986', 'w.dejong@outlook.com', '06-56 78 90 12',
    2, 'Huurder (particulier)', '14 februari 2024', 2,
    [true, false, false],
    [['Schuytgraaf 15, Arnhem', 2025, 'Niet toegewezen']],
    [['ID-bewijs', 'geverifieerd'], ['Inkomensverklaring 2025', 'geverifieerd'], ['Uittreksel BRP', 'in_behandeling'], ['Huurcontract', 'geverifieerd']],
  ),
  'v-meijer': profile(
    'v-meijer', 'V. Meijer', '3 september 1996', 'v.meijer@gmail.com', '06-67 89 01 23',
    1, 'Inwonend bij familie', '20 maart 2022', 4,
    [false, false, true],
    [['Velperpoort 25, Arnhem', 2023, 'Niet toegewezen'], ['Kronenburgsingel 5, Arnhem', 2024, 'Niet toegewezen']],
    [['ID-bewijs', 'geverifieerd'], ['Inkomensverklaring 2025', 'geverifieerd'], ['Uittreksel BRP', 'geverifieerd']],
  ),
  'r-linden': profile(
    'r-linden', 'R. Linden', '8 januari 1980', 'r.linden@gmail.com', '06-78 90 12 34',
    3, 'Huurder (sociale huur)', '17 mei 2021', 5,
    [true, false, false],
    [['Malburgen 4, Arnhem', 2022, 'Niet toegewezen'], ['Rijkerswoerd 9, Arnhem', 2023, 'Niet toegewezen'], ['Presikhaaf 62, Arnhem', 2024, 'Niet toegewezen']],
    [['ID-bewijs', 'geverifieerd'], ['Inkomensverklaring 2025', 'geverifieerd'], ['Uittreksel BRP', 'geverifieerd'], ['Huurcontract', 'geverifieerd'], ['Bewijs schoolinschrijving kinderen', 'in_behandeling']],
  ),
  'f-timmermans': profile(
    'f-timmermans', 'F. Timmermans', '14 juni 1993', 'f.timmermans@hotmail.com', '06-89 01 23 45',
    1, 'Daklozenopvang', '3 oktober 2023', 3,
    [false, false, true],
    [['Klarendalseweg 30, Arnhem', 2024, 'Niet toegewezen'], ['Hommelseweg 50, Arnhem', 2025, 'Niet toegewezen']],
    [['ID-bewijs', 'geverifieerd'], ['Inkomensverklaring 2025', 'ontbreekt'], ['Uittreksel BRP', 'geverifieerd'], ['Urgentieverklaring', 'in_behandeling']],
  ),
  'g-van-dam': profile(
    'g-van-dam', 'G. van Dam', '29 april 1988', 'g.vandam@gmail.com', '06-90 12 34 56',
    2, 'Huurder (particulier)', '12 augustus 2023', 3,
    [false, false, false],
    [['Velperweg 60, Arnhem', 2024, 'Niet toegewezen'], ['Parkstraat 14, Arnhem', 2025, 'Ingetrokken']],
    [['ID-bewijs', 'geverifieerd'], ['Inkomensverklaring 2025', 'geverifieerd'], ['Uittreksel BRP', 'geverifieerd'], ['Huurcontract', 'in_behandeling']],
  ),
  'i-hofman': profile(
    'i-hofman', 'I. Hofman', '20 november 1998', 'i.hofman@gmail.com', '06-01 23 45 67',
    1, 'Inwonend bij ouders', '5 februari 2024', 2,
    [false, false, true],
    [['Schuytgraaf 33, Arnhem', 2025, 'Niet toegewezen']],
    [['ID-bewijs', 'geverifieerd'], ['Inkomensverklaring 2025', 'in_behandeling'], ['Uittreksel BRP', 'geverifieerd']],
  ),
  'j-willems': profile(
    'j-willems', 'J. Willems', '6 maart 2000', 'j.willems@outlook.com', '06-12 34 56 78',
    1, 'Inwonend bij ouders', '21 januari 2024', 2,
    [false, false, true],
    [['Centrum 3, Arnhem', 2025, 'Niet toegewezen']],
    [['ID-bewijs', 'geverifieerd'], ['Inkomensverklaring 2025', 'ontbreekt'], ['Uittreksel BRP', 'in_behandeling']],
  ),
  'k-van-leeuwen': profile(
    'k-van-leeuwen', 'K. van Leeuwen', '13 juli 1985', 'k.vanleeuwen@gmail.com', '06-23 45 67 89',
    2, 'Huurder (particulier)', '9 april 2024', 2,
    [false, true, false],
    [['Malburgen 40, Arnhem', 2025, 'Niet toegewezen']],
    [['ID-bewijs', 'geverifieerd'], ['Inkomensverklaring 2025', 'geverifieerd'], ['Uittreksel BRP', 'geverifieerd'], ['Huurcontract', 'in_behandeling']],
  ),
  'o-schouten': profile(
    'o-schouten', 'O. Schouten', '31 oktober 1993', 'o.schouten@hotmail.com', '06-34 56 78 90',
    1, 'Antikraak', '15 januari 2025', 1,
    [false, false, true],
    [['Rijkerswoerd 5, Arnhem', 2025, 'Niet toegewezen']],
    [['ID-bewijs', 'geverifieerd'], ['Inkomensverklaring 2025', 'in_behandeling'], ['Uittreksel BRP', 'geverifieerd'], ['Antikraakcontract', 'geverifieerd']],
  ),
  'b-nguyen': profile(
    'b-nguyen', 'B. Nguyen', '18 mei 1999', 'b.nguyen@gmail.com', '06-45 67 89 01',
    1, 'Inwonend bij ouders', '7 september 2022', 4,
    [false, false, true],
    [['Presikhaaf 10, Arnhem', 2024, 'Niet toegewezen'], ['Kronenburgsingel 20, Arnhem', 2025, 'Niet toegewezen']],
    [['ID-bewijs', 'geverifieerd'], ['Inkomensverklaring 2025', 'geverifieerd'], ['Uittreksel BRP', 'geverifieerd']],
  ),
  'y-de-groot': profile(
    'y-de-groot', 'Y. de Groot', '24 februari 1984', 'y.degroot@gmail.com', '06-56 78 90 12',
    3, 'Huurder (sociale huur)', '2 november 2022', 4,
    [true, true, false],
    [['Klarendal 15, Arnhem', 2023, 'Niet toegewezen'], ['Velperpoort 40, Arnhem', 2024, 'Niet toegewezen']],
    [['ID-bewijs', 'geverifieerd'], ['Inkomensverklaring 2025', 'geverifieerd'], ['Uittreksel BRP', 'geverifieerd'], ['Huurcontract', 'geverifieerd'], ['Bewijs schoolinschrijving kinderen', 'geverifieerd']],
  ),
  'z-kuijpers': profile(
    'z-kuijpers', 'Z. Kuijpers', '10 augustus 1990', 'z.kuijpers@outlook.com', '06-67 89 01 23',
    2, 'Huurder (particulier)', '18 juni 2022', 4,
    [true, false, false],
    [['Hommelseweg 25, Arnhem', 2023, 'Niet toegewezen'], ['Schuytgraaf 9, Arnhem', 2024, 'Niet toegewezen']],
    [['ID-bewijs', 'geverifieerd'], ['Inkomensverklaring 2025', 'in_behandeling'], ['Uittreksel BRP', 'geverifieerd'], ['Huurcontract', 'geverifieerd']],
  ),
  'a-wolters': profile(
    'a-wolters', 'A. Wolters', '15 december 1997', 'a.wolters@gmail.com', '06-78 90 12 34',
    1, 'Inwonend bij ouders', '25 maart 2023', 3,
    [false, false, true],
    [['Malburgen 22, Arnhem', 2024, 'Niet toegewezen'], ['Velperweg 18, Arnhem', 2025, 'Niet toegewezen']],
    [['ID-bewijs', 'geverifieerd'], ['Inkomensverklaring 2025', 'geverifieerd'], ['Uittreksel BRP', 'geverifieerd']],
  ),
  'b-van-dijk': profile(
    'b-van-dijk', 'B. van Dijk', '2 juni 1994', 'b.vandijk@hotmail.com', '06-89 01 23 45',
    1, 'Inwonend bij ouders', '11 oktober 2023', 3,
    [false, true, false],
    [['Rijkerswoerd 17, Arnhem', 2024, 'Niet toegewezen'], ['Parkstraat 33, Arnhem', 2025, 'Ingetrokken']],
    [['ID-bewijs', 'geverifieerd'], ['Inkomensverklaring 2025', 'geverifieerd'], ['Uittreksel BRP', 'in_behandeling']],
  ),
};
