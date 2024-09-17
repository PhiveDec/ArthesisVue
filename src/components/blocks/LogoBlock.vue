<script>
import logoImg from '@/assets/img/logo.png'

export default {
  name: 'LogoBlock',
  data () {
    return {
      logoImage: logoImg
    }
  }
}
</script>

<template>
  <router-link to="/home" class="logo-box">
    <img :src="logoImage" alt="" class="logo-box__img">
    <p class="logo-box__name">
      <span class="logo-box__name__accent">ART</span>
      <span class="logo-box__name__secondary">hesis</span>
    </p>
  </router-link>
</template>

<style scoped lang="sass">
@import '@/assets/styles/vars'
@import '@/assets/styles/mixins'
@import '@/assets/styles/animations'

.logo-box
  cursor: pointer
  display: flex
  align-items: center
  gap: .5rem
  padding-top: 1rem
  padding-bottom: 1rem
  padding-right: 1.5rem

  &__img
    height: 2rem
    filter: grayscale(.5)
    transition: all .3s
    animation: rotate-logo 16s infinite ease-in-out

  &__name
    @include titleFont(1.75rem)
    letter-spacing: .1rem
    font-weight: 300

    &__accent
      font-weight: 700
      transition: all .3s

    &__secondary
      transition: all .3s

  &:hover &__img
    filter: grayscale(0)

  &:hover &__name__accent, &:hover &__name__secondary
    color: $colorStylishAccent
</style>
