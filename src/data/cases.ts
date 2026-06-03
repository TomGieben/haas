import { Case } from '../domain/Case';
import { CaseStatus, ReviewCategory, ReviewDecision } from '../domain/Enums';
import { ReviewItem } from '../domain/ReviewItem';

function defaultReviewItems(caseId: string, opts: {
  district: string;
  property: string;
  housemates: string;
  rent: string;
  layout: string;
  startDate: string;
}): ReviewItem[] {
  return [
    new ReviewItem({
      id: `${caseId}-loc`,
      category: ReviewCategory.Location,
      value: opts.district,
      badgeLabel: 'Wijk geselecteerd',
      description: `Aanvrager heeft de wijk ${opts.district} gekozen op basis van het voorkeursprofiel.`,
    }),
    new ReviewItem({
      id: `${caseId}-prop`,
      category: ReviewCategory.Property,
      value: opts.property,
      badgeLabel: 'Pand voorgesteld',
      description: 'HaaS heeft een passend pand geselecteerd binnen de gekozen wijk.',
    }),
    new ReviewItem({
      id: `${caseId}-mates`,
      category: ReviewCategory.Housemates,
      value: opts.housemates,
      badgeLabel: 'Match bevestigd',
      description: 'De voorgestelde woongenoten passen op leefstijl, leeftijd en huishoudtype.',
    }),
    new ReviewItem({
      id: `${caseId}-rent`,
      category: ReviewCategory.Rent,
      value: opts.rent,
      badgeLabel: 'Binnen budget',
      description: 'De huurprijs valt binnen de opgegeven budgetbandbreedte van de aanvrager.',
    }),
    new ReviewItem({
      id: `${caseId}-layout`,
      category: ReviewCategory.RoomLayout,
      value: opts.layout,
      badgeLabel: 'Indeling passend',
      description: 'De kamerindeling sluit aan op het huishoudtype en de privacy-voorkeuren.',
    }),
    new ReviewItem({
      id: `${caseId}-start`,
      category: ReviewCategory.StartDate,
      value: opts.startDate,
      badgeLabel: 'Datum voorgesteld',
      description: 'De voorgestelde startdatum sluit aan op de gewenste verhuisperiode.',
    }),
  ];
}

export const cases: Case[] = [
  new Case({
    id: 'CASE-2026-001',
    applicantName: 'Lisa de Vries',
    applicantProfession: 'Lerares',
    applicantAge: 32,
    householdType: 'Alleenstaande ouder + 1 kind',
    submittedAt: '2026-05-22',
    status: CaseStatus.InProgress,
    propertyId: 'klarendalseweg-142',
    chosenHousemateIds: ['emma', 'sarah', 'sophie'],
    narrative:
      'HaaS heeft op basis van het profiel van Lisa een rustige, gezinsvriendelijke wijk gekozen. De voorgestelde woongenoten delen de voorkeur voor een rustige leefstijl en hebben aansluitende dag-/werktijden. Het pand aan de Klarendalseweg biedt voldoende privacy en gedeelde ruimtes voor een gezin.',
    reviewItems: defaultReviewItems('CASE-2026-001', {
      district: 'Klarendal',
      property: 'Klarendalseweg 142',
      housemates: '3 woongenoten gekozen',
      rent: '€875 / maand',
      layout: '4 kamers, gedeelde keuken',
      startDate: '15 juli 2026',
    }),
  }),
  new Case({
    id: 'CASE-2026-002',
    applicantName: 'Emma Bakker',
    applicantProfession: 'Verpleegkundige',
    applicantAge: 29,
    householdType: 'Gezin met 2 kinderen',
    submittedAt: '2026-05-25',
    status: CaseStatus.New,
    propertyId: 'matsersingel-23',
    chosenHousemateIds: ['sophie'],
    narrative:
      'Emma zoekt een sociale woongroep waar kinderen welkom zijn. De Matsersingel biedt een ruime hoekwoning in een kindvriendelijke buurt.',
    reviewItems: defaultReviewItems('CASE-2026-002', {
      district: 'Malburgen',
      property: 'Burg. Matsersingel 23',
      housemates: '1 woongenoot gekozen',
      rent: '€1.050 / maand',
      layout: '5 kamers, gedeelde tuin',
      startDate: '1 september 2026',
    }),
  }),
  new Case({
    id: 'CASE-2026-003',
    applicantName: 'Sarah Jansen',
    applicantProfession: 'Grafisch ontwerper',
    applicantAge: 35,
    householdType: '1 persoon',
    submittedAt: '2026-05-18',
    status: CaseStatus.WaitingForResponse,
    propertyId: 'velperweg-58b',
    chosenHousemateIds: ['lisa'],
    narrative:
      'Sarah zocht een rustige plek dichtbij groen met ruimte voor haar hond. De Velperweg sluit aan op deze wens.',
    reviewItems: defaultReviewItems('CASE-2026-003', {
      district: 'Velperpoort',
      property: 'Velperweg 58-B',
      housemates: '1 woongenoot gekozen',
      rent: '€925 / maand',
      layout: '3 kamers + balkon',
      startDate: '1 augustus 2026',
    }),
  }),
  new Case({
    id: 'CASE-2026-004',
    applicantName: 'Sophie van Dijk',
    applicantProfession: 'Accountant',
    applicantAge: 31,
    householdType: 'Gezin met 1 kind',
    submittedAt: '2026-05-28',
    status: CaseStatus.InProgress,
    propertyId: 'schuytgraafplein-9',
    chosenHousemateIds: ['emma'],
    narrative:
      'Sophie waardeert balans werk-privé. Het nieuwbouwappartement in Schuytgraaf biedt energiezuinig wonen dichtbij OV.',
    reviewItems: defaultReviewItems('CASE-2026-004', {
      district: 'Schuytgraaf',
      property: 'Schuytgraafplein 9',
      housemates: '1 woongenoot gekozen',
      rent: '€795 / maand',
      layout: '3 kamers, lift aanwezig',
      startDate: '1 juli 2026',
    }),
  }),
  new Case({
    id: 'CASE-2026-005',
    applicantName: 'Mark Hendriks',
    applicantProfession: 'Software engineer',
    applicantAge: 28,
    householdType: '1 persoon',
    submittedAt: '2026-05-30',
    status: CaseStatus.New,
    propertyId: 'velperweg-58b',
    chosenHousemateIds: ['sarah'],
    narrative:
      'Mark werkt veel thuis en zocht een rustige plek met goede internetvoorzieningen en OV-bereikbaarheid.',
    reviewItems: defaultReviewItems('CASE-2026-005', {
      district: 'Velperpoort',
      property: 'Velperweg 58-B',
      housemates: '1 woongenoot gekozen',
      rent: '€925 / maand',
      layout: '3 kamers + balkon',
      startDate: '1 augustus 2026',
    }),
  }),
  new Case({
    id: 'CASE-2026-006',
    applicantName: 'Fatima El Amrani',
    applicantProfession: 'Sociaal werker',
    applicantAge: 34,
    householdType: 'Alleenstaande ouder + 2 kinderen',
    submittedAt: '2026-05-15',
    status: CaseStatus.Completed,
    propertyId: 'matsersingel-23',
    chosenHousemateIds: ['lisa', 'emma'],
    narrative:
      'Fatima zocht een veilige, sociale buurt met goede scholen. De aanvraag is voltooid en de sleuteloverdracht is gepland.',
    reviewItems: defaultReviewItems('CASE-2026-006', {
      district: 'Malburgen',
      property: 'Burg. Matsersingel 23',
      housemates: '2 woongenoten gekozen',
      rent: '€1.050 / maand',
      layout: '5 kamers, gedeelde tuin',
      startDate: '1 september 2026',
    }).map((it) => {
      it.decision = ReviewDecision.Approved;
      return it;
    }),
  }),
  new Case({
    id: 'CASE-2026-007',
    applicantName: 'Daan Visser',
    applicantProfession: 'Student',
    applicantAge: 24,
    householdType: '1 persoon',
    submittedAt: '2026-05-29',
    status: CaseStatus.WaitingForResponse,
    propertyId: 'schuytgraafplein-9',
    chosenHousemateIds: ['sophie', 'sarah'],
    narrative:
      'Daan studeert in Arnhem en zocht een betaalbare plek dichtbij OV. Schuytgraaf voldoet aan deze criteria.',
    reviewItems: defaultReviewItems('CASE-2026-007', {
      district: 'Schuytgraaf',
      property: 'Schuytgraafplein 9',
      housemates: '2 woongenoten gekozen',
      rent: '€795 / maand',
      layout: '3 kamers, lift aanwezig',
      startDate: '1 juli 2026',
    }),
  }),
];
