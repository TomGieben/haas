import { ReviewCategory, ReviewDecision, reviewCategoryLabels } from './Enums';

export interface ReviewItemProps {
  id: string;
  category: ReviewCategory;
  value: string;
  badgeLabel: string;
  description: string;
  decision?: ReviewDecision;
}

export class ReviewItem {
  readonly id: string;
  readonly category: ReviewCategory;
  readonly value: string;
  readonly badgeLabel: string;
  readonly description: string;
  decision: ReviewDecision;

  constructor(props: ReviewItemProps) {
    this.id = props.id;
    this.category = props.category;
    this.value = props.value;
    this.badgeLabel = props.badgeLabel;
    this.description = props.description;
    this.decision = props.decision ?? ReviewDecision.Pending;
  }

  get categoryLabel(): string {
    return reviewCategoryLabels[this.category];
  }

  get isDecided(): boolean {
    return this.decision !== ReviewDecision.Pending;
  }

  get isApproved(): boolean {
    return this.decision === ReviewDecision.Approved;
  }

  get isRejected(): boolean {
    return this.decision === ReviewDecision.Rejected;
  }

  approve(): void {
    this.decision = ReviewDecision.Approved;
  }

  reject(): void {
    this.decision = ReviewDecision.Rejected;
  }
}
