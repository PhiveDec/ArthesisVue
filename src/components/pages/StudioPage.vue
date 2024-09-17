<script>
import BannerRegularSection from '@/components/sections/BannerRegularSection.vue'
import AlbumsSection from '@/components/sections/AlbumsSection.vue'

export default {
  name: 'StudioPage',
  components: {
    AlbumsSection,
    BannerRegularSection
  },
  data () {
    return {
      selectedNavItem: 'works'
    }
  },
  methods: {
    switchNavItem (value) {
      this.selectedNavItem = value
    }
  }
}
</script>

<template>
  <BannerRegularSection/>
  <section class="nav center">
    <div class="nav-area container">
      <p class="nav__item" :class="{'active-item' : selectedNavItem === 'works'}"
         @click="switchNavItem('works')">МОИ
        РАБОТЫ</p>
      <p class="nav__item" :class="{'active-item' : selectedNavItem === 'profile'}"
         @click="switchNavItem('profile')">
        РЕДАКТИРОВАТЬ ПРОФИЛЬ</p>
      <p class="nav__item" :class="{'active-item' : selectedNavItem === 'album'}"
         @click="switchNavItem('album')">
        СОЗДАТЬ АЛЬБОМ</p>
      <p class="nav__item" :class="{'active-item' : selectedNavItem === 'upload'}"
         @click="switchNavItem('upload')">
        ЗАГРУЗИТЬ РАБОТУ</p>
    </div>
  </section>
  <AlbumsSection v-if="selectedNavItem === 'works'"/>
  <AlbumsSection v-if="selectedNavItem === 'album'"/> />
</template>

<style scoped lang="sass">
@import '@/assets/styles/vars'
@import '@/assets/styles/mixins'

.nav
  margin-top: 3rem

  &-area
    display: flex
    justify-content: center

  &__item
    cursor: pointer
    padding: 1rem 2rem
    border: 1px solid $colorBackgroundSecondary
    border-right: none
    transition: all .3s

    &:last-child
      border-right: 1px solid $colorBackgroundSecondary

    &:hover
      color: $colorStylishGeneral
      background-color: $colorBackgroundSecondary

.active-item
  cursor: default
  pointer-events: none
  color: $colorStylishGeneral
  background-color: $colorBackgroundSecondary
</style>
