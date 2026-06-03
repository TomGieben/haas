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

export const reviewCategoryIcons: Record<ReviewCategory, string> = {
  [ReviewCategory.Location]:
    '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  [ReviewCategory.Property]:
    '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9.5 12 3l9 6.5V21H3z"/><path d="M9 21V12h6v9"/></svg>',
  [ReviewCategory.Housemates]:
    '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  [ReviewCategory.Rent]:
    '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
  [ReviewCategory.RoomLayout]:
    '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="1"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="12" y1="3" x2="12" y2="21"/></svg>',
  [ReviewCategory.StartDate]:
    '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
};

export const ReviewDecision = {
  Pending: 'pending',
  Approved: 'approved',
  Rejected: 'rejected',
} as const;
export type ReviewDecision = (typeof ReviewDecision)[keyof typeof ReviewDecision];
