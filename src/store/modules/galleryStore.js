import { imagesData } from '@/fake_data/data.js'
import { parseDate } from '@/utils/utils'

const state = {
  imagesList: null,
  userAlbums: null,
  albumImages: null,
  userImages: null
}

const getters = {
  imagesList: state => state.imagesList,
  sortedByDateImages: (state) => {
    try {
      return [...state.imagesList].sort((a, b) => {
        return parseDate(b.date) - parseDate(a.date)
      })
    } catch (error) {
      return null
    }
  },
  homeImages: (state, getters) => {
    try {
      return [...getters.sortedByDateImages].slice(0, 6)
    } catch (error) {
      console.log('Подгружаем gallery-данные')
      return null
    }
  },
  userAlbums: state => state.userAlbums,
  albumImages: state => state.albumImages,
  userImages: state => state.userImages
}

const mutations = {
  SET_IMAGES_LIST (state, imagesList) {
    state.imagesList = imagesList
  },
  SET_USER_ALBUMS (state, userId) {
    try {
      const userImages = [...state.imagesList].filter(image => image.author.id === parseInt(userId))
      const albums = userImages.map(image => image.album)
      const uniqueAlbums = Array.from(new Set(albums.map(album => album.id)))
        .map(id => albums.find(album => album.id === id))
      state.userAlbums = uniqueAlbums
    } catch (error) {
      console.log('Подгружаем gallery-данные')
    }
  },
  SET_USER_IMAGES (state, userId) {
    try {
      const userImages = [...state.imagesList].filter(image => image.author.id === parseInt(userId))
      state.userImages = userImages
    } catch (error) {
      console.log('Подгружаем gallery-данные')
    }
  },
  SET_ALBUM_IMAGES (state, albumId) {
    try {
      state.albumImages = [...state.imagesList].filter(image => image.album.id === parseInt(albumId))
    } catch (error) {
      console.log('Подгружаем gallery-данные')
    }
  }
}

const actions = {
  fetchImages ({
    commit,
    state
  }) {
    if (!state.imagesList) {
      setTimeout(() => {
        commit('SET_IMAGES_LIST', imagesData)
      }, 2000)
    }
  },
  fetchUserAlbums ({
    commit,
    state
  }, userId) {
    if (!state.imagesList) {
      setTimeout(() => {
        commit('SET_IMAGES_LIST', imagesData)
        commit('SET_USER_IMAGES', userId)
        commit('SET_USER_ALBUMS', userId)
      }, 2000)
    } else {
      setTimeout(() => {
        commit('SET_USER_IMAGES', userId)
        commit('SET_USER_ALBUMS', userId)
      }, 1000)
    }
  },
  fetchAlbumImages ({
    commit,
    state
  }, albumId) {
    if (!state.imagesList) {
      setTimeout(() => {
        commit('SET_IMAGES_LIST', imagesData)
        commit('SET_ALBUM_IMAGES', albumId)
      }, 2000)
    } else {
      setTimeout(() => {
        commit('SET_ALBUM_IMAGES', albumId)
      }, 1000)
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
