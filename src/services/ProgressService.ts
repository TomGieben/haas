import { ProgressStep } from '../domain/ProgressStep';
import { StepStatus } from '../domain/Enums';

export class ProgressService {
  static buildInitialPipeline(): ProgressStep[] {
    return [
      new ProgressStep({
        index: 1,
        title: 'Ambtenaar pakt aanvraag op',
        description: 'Een ambtenaar bekijkt je profiel en matches.',
        status: StepStatus.Done,
        note: 'Ambtenaar Maria heeft je aanvraag bekeken op 22 mei 2026.',
      }),
      new ProgressStep({
        index: 2,
        title: 'Beoordeling & matching',
        description: 'We koppelen je aan een geschikte woongroep.',
        status: StepStatus.Active,
        note: 'In behandeling — verwachte doorlooptijd 5 werkdagen.',
      }),
      new ProgressStep({
        index: 3,
        title: 'Woningaanbod',
        description: 'Je ontvangt een concreet woningaanbod.',
        status: StepStatus.Pending,
      }),
      new ProgressStep({
        index: 4,
        title: 'Sleuteloverdracht',
        description: 'Je krijgt de sleutels en kunt verhuizen.',
        status: StepStatus.Pending,
      }),
    ];
  }
}
