<script>
import LoginSection from '@/components/sections/LoginSection.vue'
import BannerRegularSection from '@/components/sections/BannerRegularSection.vue'
import RegisterSection from '@/components/sections/RegisterSection.vue'

export default {
  name: 'AuthPage',
  components: {
    RegisterSection,
    BannerRegularSection,
    LoginSection
  },
  data () {
    return {
      isAuthVisible: true,
      isRegisterVisible: false
    }
  },
  methods: {
    switchAuth () {
      this.isAuthVisible = true
      this.isRegisterVisible = false
    },
    switchRegister () {
      this.isRegisterVisible = true
      this.isAuthVisible = false
    }
  },
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>

<template>
  <BannerRegularSection/>
  <section class="switcher center">
    <div class="switcher-area container">
      <div class="switcher__items">
        <p class="switcher__items__item" @click="switchAuth" :class="{'active-item': isAuthVisible}">ВОЙТИ</p>
        <p class="switcher__items__item" @click="switchRegister" :class="{'active-item': isRegisterVisible}">
          ЗАРЕГИСТРИРОВАТЬСЯ</p>
      </div>
    </div>
  </section>
  <LoginSection v-if="isAuthVisible"/>
  <RegisterSection v-if="isRegisterVisible"/>
</template>

<style scoped lang="sass">
@import '@/assets/styles/vars'

.switcher
  margin-top: 3rem
  &-area
    width: 100%
    display: flex
    justify-content: center
  &__items
    width: fit-content
    display: flex
    justify-content: center
    border: 1px solid $colorBackgroundSecondary

    &__item
      padding: 1rem 2rem
      cursor: pointer
      transition: all .3s

      &:hover
        color: $colorStylishBack

.active-item
  cursor: unset
  pointer-events: none
  color: $colorStylishBack
  background-color: $colorBackgroundSecondary
</style>
