import { CaseStatus, caseStatusLabels, caseStatusTones, type BadgeTone } from './Enums';
import { ReviewItem, type ReviewItemProps } from './ReviewItem';

export interface CaseProps {
  id: string;
  applicantName: string;
  applicantProfession: string;
  applicantAge: number;
  householdType: string;
  submittedAt: string; // ISO date
  status: CaseStatus;
  propertyId: string;
  chosenHousemateIds: string[];
  narrative: string;
  reviewItems?: ReviewItem[] | ReviewItemProps[];
}

export class Case {
  readonly id: string;
  readonly applicantName: string;
  readonly applicantProfession: string;
  readonly applicantAge: number;
  readonly householdType: string;
  readonly submittedAt: string;
  status: CaseStatus;
  readonly propertyId: string;
  readonly chosenHousemateIds: string[];
  readonly narrative: string;
  reviewItems: ReviewItem[];

  constructor(props: CaseProps) {
    this.id = props.id;
    this.applicantName = props.applicantName;
    this.applicantProfession = props.applicantProfession;
    this.applicantAge = props.applicantAge;
    this.householdType = props.householdType;
    this.submittedAt = props.submittedAt;
    this.status = props.status;
    this.propertyId = props.propertyId;
    this.chosenHousemateIds = props.chosenHousemateIds;
    this.narrative = props.narrative;
    this.reviewItems = (props.reviewItems ?? []).map((item) =>
      item instanceof ReviewItem ? item : new ReviewItem(item),
    );
  }

  get caseNumber(): string {
    return this.id;
  }

  get statusLabel(): string {
    return caseStatusLabels[this.status];
  }

  get statusTone(): BadgeTone {
    return caseStatusTones[this.status];
  }

  get applicantInitial(): string {
    return this.applicantName.charAt(0).toUpperCase();
  }

  get applicantNameWithAge(): string {
    return `${this.applicantName}, ${this.applicantAge}`;
  }

  get daysOpen(): number {
    const submitted = new Date(this.submittedAt).getTime();
    if (Number.isNaN(submitted)) return 0;
    const diff = Date.now() - submitted;
    return Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
  }

  get submittedLabel(): string {
    const d = new Date(this.submittedAt);
    if (Number.isNaN(d.getTime())) return this.submittedAt;
    return d.toLocaleDateString('nl-NL', { day: '2-digit', month: 'long', year: 'numeric' });
  }
}
