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
