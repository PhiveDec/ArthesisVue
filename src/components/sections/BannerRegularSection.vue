<script>
import { generateRandomNumber } from '@/utils/utils'

export default {
  name: 'BannerRegularSection',
  props: ['title'],
  methods: {
    chooseBannerImage () {
      const bannerSection = document.querySelector('.banner__background')
      if (bannerSection) {
        const imageNum = generateRandomNumber(1, 6)
        bannerSection.classList.add(`banner__background-image${imageNum}`)
      }
    }
  },
  mounted () {
    this.chooseBannerImage()
  }
}
</script>

<template>
  <section class="banner center">
    <div class="banner__background"></div>
    <div class="banner-area container">
      <h1 v-if="title" class="banner__title">{{ title }}</h1>
    </div>
  </section>
</template>

<style scoped lang="sass">
@import '@/assets/styles/mixins'
@import '@/assets/styles/vars'

.banner
  position: relative
  height: 40vh

  &__background
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    background-position: center center
    background-repeat: no-repeat
    background-size: cover
    background-image: url("@/assets/img/start_banner3.jpg")
    filter: grayscale(.7) brightness(.7)
    z-index: 1

    &-image1
      background-image: url("@/assets/img/banner1.jpg")

    &-image2
      background-image: url("@/assets/img/banner2.jpg")

    &-image3
      background-image: url("@/assets/img/banner3.jpg")

    &-image4
      background-image: url("@/assets/img/banner4.jpg")

    &-image5
      background-image: url("@/assets/img/banner5.jpg")

    &-image6
      background-image: url("@/assets/img/banner6.jpg")

  &-area
    height: 100%
    display: flex
    justify-content: center
    align-items: end

  &__title
    padding: .75rem 3rem 0 3rem
    background-color: $colorBackground
    z-index: 2
    border-right: .75rem solid $colorBackgroundSecondary
    border-left: .75rem solid $colorBackgroundSecondary
    border-top-left-radius: 4rem
    border-top-right-radius: 4rem
    @include titleFont(2rem)
    color: $colorTitle

  &-image1
    background-image: url("@/assets/img/banner1.jpg")

  &-image2
    background-image: url("@/assets/img/banner2.jpg")

  &-image3
    background-image: url("@/assets/img/banner3.jpg")

  &-image4
    background-image: url("@/assets/img/banner4.jpg")

  &-image5
    background-image: url("@/assets/img/banner5.jpg")

  &-image6
    background-image: url("@/assets/img/banner6.jpg")
</style>
