const state = {
  isAuthenticated: false,
  user: null
}

const getters = {
  isAuth () {
    return state.isAuthenticated
  }
}

const mutations = {
  setUser (state, user) {
    state.isAuthenticated = true
    state.user = user
  },
  logout (state) {
    state.isAuthenticated = false
    state.user = null
  }
}

const actions = {
  async login ({ commit }, {
    email,
    password
  }) {
    try {
      const response = await fetch('https://example.com/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      })

      if (!response.ok) {
        throw new Error('Ошибка при входе: ' + response.statusText)
      }

      const data = await response.json()
      const user = data.user

      commit('setUser', user)
      localStorage.setItem('token', data.token)
    } catch (error) {
      console.error('Ошибка при входе:', error)
      throw new Error('Ошибка при аутентификации. Пожалуйста, проверьте свои учетные данные.')
    }
  },
  async register ({ commit }, {
    email,
    password
  }) {
    try {
      const response = await fetch('https://example.com/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      })

      if (!response.ok) {
        throw new Error('Ошибка при регистрации: ' + response.statusText)
      }

      const data = await response.json()
      const user = data.user

      commit('setUser', user)
      localStorage.setItem('token', data.token)
    } catch (error) {
      console.error('Ошибка при регистрации:', error)
      throw new Error('Ошибка при регистрации. Пожалуйста, проверьте свои данные.')
    }
  },
  logout ({ commit }) {
    commit('logout')
    localStorage.removeItem('token')
  },
  async checkAuth ({ commit }) {
    const token = localStorage.getItem('token')
    if (token) {
      try {
        const response = await fetch('https://example.com/api/auth/me', {
          headers: { Authorization: `Bearer ${token}` }
        })

        // Если в ответе статус не OK, выбросим ошибку
        if (!response.ok) {
          console.error('Ошибка при проверке аутентификации:')
          throw new Error('Ошибка проверки аутентификации: ' + response.statusText)
        }

        const data = await response.json()
        const user = data.user
        commit('setUser', user)
      } catch (error) {
        // В случае ошибки, сбрасываем аутентификацию
        console.error('Ошибка при проверке аутентификации:', error)
        commit('logout') // Если произошла ошибка, выходите из системы
      }
    } else {
      commit('logout')
      throw new Error('Ошибка аутентификации: Отсутствует токен')
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
