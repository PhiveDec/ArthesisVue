<script>
export default {
  name: 'ItemAlbumBlock',
  props: ['album', 'image']
}
</script>

<template>
  <router-link :to="{name: 'album', params: {id: album.id}}" class="album">
    <div class="album__image-box">
      <img :src="image.url" :alt="image.album.name" class="album__image-box__image">
    </div>
    <div class="album__info">
      <p class="album__info__name">Альбом "<span>{{ image.album.name }}</span>"</p>
      <p class="album__info__author">от <span>{{ image.author.name }}</span></p>
    </div>
  </router-link>
</template>

<style scoped lang="sass">
@import '@/assets/styles/vars'
@import '@/assets/styles/mixins'

.album
  cursor: pointer
  display: flex
  flex-direction: column
  width: 36rem
  transition: all .3s

  &__image-box
    position: relative
    overflow: hidden
    align-self: center
    width: 100%
    height: 22rem

    &__image
      width: 100%
      height: 100%
      object-fit: cover
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      filter: grayscale(.4) brightness(.8)
      transition: .3s all

  &__info
    display: flex
    flex-direction: column
    padding: .5rem 1rem
    background-color: $colorBackgroundSecondary

    &__name
      padding: 0.25rem 0
      @include titleFont(1.2rem)
      color: $colorTips

      & span
        color: $colorTips
        transition: .3s all

    &__author
      padding: 0.25rem 0
      color: $colorTips

      & span
        color: $colorTips
        transition: .3s all

  &:hover
    box-shadow: .25rem .25rem .5rem $colorShadow

  &:hover &__image-box__image
    filter: grayscale(0)

  &:hover &__info__name span
    color: $colorStylishGeneral

  &:hover &__info__author span
    color: $colorStylishAccent
</style>
