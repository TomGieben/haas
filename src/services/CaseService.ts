import type { Case } from '../domain/Case';
import { CaseStatus, ReviewDecision } from '../domain/Enums';

export interface CaseSummary {
  total: number;
  byStatus: Record<CaseStatus, number>;
}

export interface ReviewProgress {
  total: number;
  decided: number;
  approved: number;
  rejected: number;
}

export class CaseService {
  static summarize(cases: Case[]): CaseSummary {
    const byStatus: Record<CaseStatus, number> = {
      [CaseStatus.New]: 0,
      [CaseStatus.InProgress]: 0,
      [CaseStatus.WaitingForResponse]: 0,
      [CaseStatus.Completed]: 0,
    };
    for (const c of cases) byStatus[c.status] += 1;
    return { total: cases.length, byStatus };
  }

  static findById(cases: Case[], id: string): Case | null {
    return cases.find((c) => c.id === id) ?? null;
  }

  static reviewProgress(c: Case): ReviewProgress {
    const total = c.reviewItems.length;
    let approved = 0;
    let rejected = 0;
    for (const item of c.reviewItems) {
      if (item.decision === ReviewDecision.Approved) approved += 1;
      else if (item.decision === ReviewDecision.Rejected) rejected += 1;
    }
    return { total, decided: approved + rejected, approved, rejected };
  }

  static getApprovalRate(cases: Case[]): number {
    let approved = 0;
    let decided = 0;
    for (const c of cases) {
      for (const item of c.reviewItems) {
        if (item.decision === ReviewDecision.Approved) {
          approved += 1;
          decided += 1;
        } else if (item.decision === ReviewDecision.Rejected) {
          decided += 1;
        }
      }
    }
    if (decided === 0) return 75; // default for demo per design
    return Math.round((approved / decided) * 100);
  }

  static getAvgDaysSaved(cases: Case[]): number {
    if (cases.length === 0) return 0;
    // Demo metric: difference between traditional baseline (12 days) and current avg days open.
    const baseline = 12;
    const avgOpen = cases.reduce((sum, c) => sum + c.daysOpen, 0) / cases.length;
    return Math.max(1, Math.round(baseline - avgOpen));
  }
}
