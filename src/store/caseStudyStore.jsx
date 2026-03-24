import { create } from 'zustand';

export const useCaseStudyStore = create((set) => ({
  isCaseStudyVisible: false,
  selectedCaseStudy: null,

  setCaseStudyVisible: (visible) => set({ isCaseStudyVisible: visible }),
  setSelectedCaseStudy: (caseStudy) => set({ selectedCaseStudy: caseStudy }),
}));
