<script>
export default {
  name: 'BannerEventSection',
  props: ['eventBanner', 'title', 'subtitle']
}
</script>

<template>
  <section class="banner center">
    <img :src="eventBanner" :alt="title" class="banner-img">
    <div class="banner-area container">
      <h1 class="banner__title">{{title}}</h1>
      <p class="banner__subtitle">{{subtitle}}</p>
    </div>
  </section>
</template>

<style scoped lang="sass">
@import '@/assets/styles/vars'
@import '@/assets/styles/mixins'

.banner
  position: relative
  overflow: hidden
  background-size: cover
  background-position: center
  height: 40vh
  &-img
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    width: 100%
    height: 100%
    object-fit: none
    filter: grayscale(.5) brightness(.3)
  &-area
    height: 100%
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    gap: 1.5rem
  &__title
    @include titleFont(3rem)
    color: $colorStylishGeneral
    z-index: 1
  &__subtitle
    font-size: 1.5rem
    color: $colorTitle
    z-index: 1

</style>
