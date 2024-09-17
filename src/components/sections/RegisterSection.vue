<script>
export default {
  name: 'RegisterSection',
  data () {
    return {
      email: '',
      password: '',
      passwordConfirm: '',
      message: {
        isVisible: false,
        text: ''
      }
    }
  },
  methods: {
    register () {
      if (this.password !== this.passwordConfirm) {
        this.message.isVisible = true
        this.message.text = 'Пароль не подтвержден. Данные не совпадают.'
        this.password = ''
        this.passwordConfirm = ''
        return
      }
      const fakeUser = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('userStore/register', fakeUser)
      this.$router.push('/auth')
    }
  }
}
</script>

<template>
  <section class="register center">
    <div class="register-area container">
      <p class="register__message" v-if="message.isVisible">{{message.text}}</p>
      <form class="register__form" @submit.prevent="register">
        <input class="register__form__input" v-model="email" type="email" placeholder="Email" required/>
        <input class="register__form__input" v-model="password" type="password" placeholder="Пароль" required/>
        <input class="register__form__input" v-model="passwordConfirm" type="password" placeholder="Подтвердите пароль" required/>
        <button type="submit" class="register__form__button">ЗАРЕГИСТРИРОВАТЬСЯ</button>
      </form>
    </div>
  </section>
</template>

<style scoped lang="sass">
@import '@/assets/styles/vars'

.register
  margin-top: 2rem
  &-area
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
  &__form
    margin-top: 2rem
    width: 30%
    display: flex
    flex-direction: column
    align-items: center
    gap: 1rem
    &__input
      width: 100%
      padding: 1rem 1rem
      outline: none
      border: 1px solid $colorBackgroundSecondary
      background-color: $colorBackground
      font-size: 1.2rem
      color: $colorStylishBack
      &::placeholder
        color: $colorTips
    &__button
      width: 100%
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
