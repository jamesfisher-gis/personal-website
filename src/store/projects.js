import { defineStore } from 'pinia'

export const useProjects = defineStore('topic-store', {
  state: () => {
    return {
      projects: [],
      fetching: false
    }
  },

  getters: {
    results(state) {
      return state.projects;
    },

    isFetching(state) {
      return state.fetching;
    }
  },

  actions: {
    async fetchProjects() {
      this.fetching = true;
      const response = await fetch('/data/projects.json');
      try {
        const result = await response.json();
        this.projects = result.projects;
      } catch (err) {
        this.projects = [];
        console.error('Error loading projects:', err);
        return err;
      }

      this.fetching = false;
    }
  }
})