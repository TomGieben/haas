import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { cases as rawCases } from '../data/cases';
import { CaseService, type ReviewProgress } from '../services/CaseService';
import { ReviewDecision } from '../domain/Enums';
import type { Case } from '../domain/Case';

export const useCasesStore = defineStore('cases', () => {
  const cases = ref<Case[]>(rawCases);
  const selectedId = ref<string | null>(null);

  const summary = computed(() => CaseService.summarize(cases.value));
  const approvalRate = computed(() => CaseService.getApprovalRate(cases.value));
  const avgDaysSaved = computed(() => CaseService.getAvgDaysSaved(cases.value));

  function getById(id: string): Case | null {
    return CaseService.findById(cases.value, id);
  }

  function select(id: string | null) {
    selectedId.value = id;
  }

  function reviewProgress(caseId: string): ReviewProgress {
    const c = getById(caseId);
    if (!c) return { total: 0, decided: 0, approved: 0, rejected: 0 };
    return CaseService.reviewProgress(c);
  }

  function decideReviewItem(caseId: string, itemId: string, decision: ReviewDecision) {
    const c = getById(caseId);
    if (!c) return;
    const item = c.reviewItems.find((i) => i.id === itemId);
    if (!item) return;
    if (decision === ReviewDecision.Approved) item.approve();
    else if (decision === ReviewDecision.Rejected) item.reject();
  }

  return {
    cases,
    selectedId,
    summary,
    approvalRate,
    avgDaysSaved,
    getById,
    select,
    reviewProgress,
    decideReviewItem,
  };
});
