<script>
export default {
  name: 'LoginSection',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      const fakeUser = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('userStore/login', fakeUser)
      this.$router.push('/studio')
    }
  }
}
</script>

<template>
  <section class="login center">
    <div class="login-area container">
      <form class="login__form" @submit.prevent="login">
        <input class="login__form__input" v-model="email" type="email" placeholder="Email" required/>
        <input class="login__form__input" v-model="password" type="password" placeholder="Пароль" required/>
        <button type="submit" class="login__form__button">ВОЙТИ</button>
      </form>
    </div>
  </section>
</template>

<style scoped lang="sass">
@import '@/assets/styles/vars'

.login
  margin-top: 2rem
  &-area
    display: flex
    justify-content: center
  &__form
    width: 30%
    display: flex
    flex-direction: column
    gap: 1rem
    &__input
      padding: 1rem 1rem
      outline: none
      border: 1px solid $colorBackgroundSecondary
      background-color: $colorBackground
      font-size: 1.2rem
      color: $colorStylishBack
      &::placeholder
        color: $colorTips
    &__button
      background-color: $colorBackground
      border: 1px solid $colorBackgroundSecondary
      color: $colorStylishBack
      padding: 1rem 1.25rem
      text-align: center
      text-decoration: none
      display: inline-block
      font-size: 1.25rem
      margin: 0 0.25rem
      cursor: pointer
      user-select: none
      transition: all 0.3s

      &:hover
        background-color: $colorBackgroundSecondary
</style>
