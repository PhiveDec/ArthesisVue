import { createStore } from 'vuex'
import galleryStore from '@/store/modules/galleryStore.js'
import eventsStore from '@/store/modules/eventsStore.js'
import userStore from '@/store/modules/userStore'

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    galleryStore,
    eventsStore,
    userStore
  }
})
