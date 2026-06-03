export const Lifestyle = {
  Rustig: 'rustig',
  Actief: 'actief',
  Sociaal: 'sociaal',
  Studieus: 'studieus',
} as const;
export type Lifestyle = (typeof Lifestyle)[keyof typeof Lifestyle];

export const Budget = {
  Low: '500-750',
  Mid: '750-1000',
  High: '1000-1250',
  XHigh: '1250-1500',
} as const;
export type Budget = (typeof Budget)[keyof typeof Budget];

export const HouseholdSize = {
  One: '1',
  Two: '2',
  Three: '3',
  FourPlus: '4+',
} as const;
export type HouseholdSize = (typeof HouseholdSize)[keyof typeof HouseholdSize];

export const StepStatus = {
  Pending: 'pending',
  Active: 'active',
  Done: 'done',
} as const;
export type StepStatus = (typeof StepStatus)[keyof typeof StepStatus];

export const lifestyleLabels: Record<Lifestyle, string> = {
  [Lifestyle.Rustig]: 'Rustig',
  [Lifestyle.Actief]: 'Actief',
  [Lifestyle.Sociaal]: 'Sociaal',
  [Lifestyle.Studieus]: 'Studieus',
};

export const budgetLabels: Record<Budget, string> = {
  [Budget.Low]: '€500 – €750',
  [Budget.Mid]: '€750 – €1.000',
  [Budget.High]: '€1.000 – €1.250',
  [Budget.XHigh]: '€1.250 – €1.500',
};

export const householdLabels: Record<HouseholdSize, string> = {
  [HouseholdSize.One]: '1 persoon',
  [HouseholdSize.Two]: '2 personen',
  [HouseholdSize.Three]: '3 personen',
  [HouseholdSize.FourPlus]: '4 of meer personen',
};

// ---------------------------------------------------------------------------
// Officer / Case domain
// ---------------------------------------------------------------------------

export const CaseStatus = {
  New: 'new',
  InProgress: 'in_progress',
  WaitingForResponse: 'waiting_for_response',
  Completed: 'completed',
} as const;
export type CaseStatus = (typeof CaseStatus)[keyof typeof CaseStatus];

export type BadgeTone = 'blue' | 'orange' | 'purple' | 'green' | 'slate' | 'red';

export const caseStatusLabels: Record<CaseStatus, string> = {
  [CaseStatus.New]: 'Nieuw',
  [CaseStatus.InProgress]: 'In behandeling',
  [CaseStatus.WaitingForResponse]: 'Wacht op reactie',
  [CaseStatus.Completed]: 'Afgehandeld',
};

export const caseStatusTones: Record<CaseStatus, BadgeTone> = {
  [CaseStatus.New]: 'blue',
  [CaseStatus.InProgress]: 'orange',
  [CaseStatus.WaitingForResponse]: 'purple',
  [CaseStatus.Completed]: 'green',
};

export const ReviewCategory = {
  Location: 'location',
  Property: 'property',
  Housemates: 'housemates',
  Rent: 'rent',
  RoomLayout: 'room_layout',
  StartDate: 'start_date',
} as const;
export type ReviewCategory = (typeof ReviewCategory)[keyof typeof ReviewCategory];

export const reviewCategoryLabels: Record<ReviewCategory, string> = {
  [ReviewCategory.Location]: 'Locatie',
  [ReviewCategory.Property]: 'Pand',
  [ReviewCategory.Housemates]: 'Woongenoten',
  [ReviewCategory.Rent]: 'Huurprijs',
  [ReviewCategory.RoomLayout]: 'Kamerindeling',
  [ReviewCategory.StartDate]: 'Startdatum',
};

export const ReviewDecision = {
  Pending: 'pending',
  Approved: 'approved',
  Rejected: 'rejected',
} as const;
export type ReviewDecision = (typeof ReviewDecision)[keyof typeof ReviewDecision];
