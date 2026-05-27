import { StepStatus } from './Enums';

export interface ProgressStepProps {
  index: number;
  title: string;
  description: string;
  status: StepStatus;
  note?: string;
}

export class ProgressStep {
  readonly index: number;
  readonly title: string;
  readonly description: string;
  status: StepStatus;
  note?: string;

  constructor(props: ProgressStepProps) {
    this.index = props.index;
    this.title = props.title;
    this.description = props.description;
    this.status = props.status;
    this.note = props.note;
  }

  get isDone(): boolean {
    return this.status === StepStatus.Done;
  }

  get isActive(): boolean {
    return this.status === StepStatus.Active;
  }

  get statusLabel(): string {
    switch (this.status) {
      case StepStatus.Done:
        return 'Voltooid';
      case StepStatus.Active:
        return 'Actief';
      default:
        return 'In afwachting';
    }
  }
}
