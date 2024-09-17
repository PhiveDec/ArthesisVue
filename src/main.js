import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/styles/main.sass'

// Создайте экземпляр приложения
const app = createApp(App)

// Вызовите checkAuth для проверки состояния аутентификации
store.dispatch('userStore/checkAuth')
  .then(() => {
    console.log('Пользователь аутентифицирован')
  })
  .catch((error) => {
    console.error('Ошибка при проверке аутентификации:', error)
  })

// Подключите store и router
app.use(store).use(router).mount('#app')
