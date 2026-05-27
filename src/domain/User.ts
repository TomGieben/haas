import { Budget, HouseholdSize, Lifestyle } from './Enums';

export interface UserProps {
  householdSize?: HouseholdSize;
  budget?: Budget;
  lifestyle?: Lifestyle;
  hasChildren?: boolean;
  hasPets?: boolean;
  worksFromHome?: boolean;
}

export class User {
  householdSize?: HouseholdSize;
  budget?: Budget;
  lifestyle?: Lifestyle;
  hasChildren: boolean;
  hasPets: boolean;
  worksFromHome: boolean;

  constructor(props: UserProps = {}) {
    this.householdSize = props.householdSize;
    this.budget = props.budget;
    this.lifestyle = props.lifestyle;
    this.hasChildren = props.hasChildren ?? false;
    this.hasPets = props.hasPets ?? false;
    this.worksFromHome = props.worksFromHome ?? false;
  }

  get isComplete(): boolean {
    return Boolean(this.householdSize && this.budget && this.lifestyle);
  }

  toJSON(): UserProps {
    return {
      householdSize: this.householdSize,
      budget: this.budget,
      lifestyle: this.lifestyle,
      hasChildren: this.hasChildren,
      hasPets: this.hasPets,
      worksFromHome: this.worksFromHome,
    };
  }
}
