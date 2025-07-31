import { create } from 'zustand';

export const useProjectStore = create((set) => ({
  isProjectVisible: false,
  selectedProject: null,

  setProjectVisible: (visible) => set({ isProjectVisible: visible }),
  setSelectedProject: (project) => set({ selectedProject: project }),
}));
