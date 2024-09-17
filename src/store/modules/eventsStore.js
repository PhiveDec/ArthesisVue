import { eventsData } from '@/fake_data/data.js'
import { parseDate } from '@/utils/utils'

const state = {
  eventsList: null,
  selectedEvent: null
}

const getters = {
  eventsList: state => state.eventsList,
  selectedEvent: state => state.selectedEvent,
  sortedByDateEvents: (state) => {
    try {
      return [...state.eventsList].sort((a, b) => {
        return parseDate(b.startDate) - parseDate(a.startDate)
      })
    } catch (error) {
      return null
    }
  },
  homeEvents: (state, getters) => {
    try {
      return [...getters.sortedByDateEvents].slice(0, 3)
    } catch (error) {
      console.log('Подгружаем events-данные')
      return null
    }
  }
}

const mutations = {
  SET_EVENTS_LIST (state, competitionsList) {
    state.eventsList = competitionsList
  },
  SET_SELECTED_EVENT (state, eventId) {
    state.selectedEvent = state.eventsList.find(event => event.id === parseInt(eventId))
  }
}

const actions = {
  fetchEvents ({
    commit,
    state
  }) {
    if (!state.eventsList) {
      setTimeout(() => {
        commit('SET_EVENTS_LIST', eventsData)
      }, 1800)
    }
  },
  async fetchEvent ({ commit, state }, eventId) {
    if (!state.eventsList) {
      await new Promise(resolve => setTimeout(resolve, 1000))
      commit('SET_EVENTS_LIST', eventsData)
    }
    commit('SET_SELECTED_EVENT', eventId)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
