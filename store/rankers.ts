import { defineStore } from 'pinia'

export const useRankersStore = defineStore({
  id: 'ranker-store',
  state: () => {
    return {
      rankers: [],
      filters: {
        country: "null"
      }
    }
  },
  actions: {
    setRanker(payload){
      this.rankers = payload
    },
    setFilter(payload){
      this.filters[payload.type] = payload.data
    } 
  },
  getters: {
    getRankers: state => state.rankers,
    getFilters: state => state.filters
  },
})