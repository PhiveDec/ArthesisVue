<script>
export default {
  name: 'ItemGalleryBlock',
  props: ['image'],
  data () {
    return {
      isModalOpen: false
    }
  },
  methods: {
    openModal () {
      this.isModalOpen = true
    },
    closeModal () {
      this.isModalOpen = false
    }
  }
}
</script>

<template>
  <article class="item">
    <div class="item__image-box" @click="openModal">
      <img :src="image.url" :alt="image.name" class="item__image-box__image" draggable="false" @contextmenu.prevent>
    </div>
    <div class="item__info">
      <router-link :to="{name: 'album', params: {id: image.album.id}}" class="item__info__name">
        {{ image.name }} ({{ image.album.name }})
      </router-link>
      <router-link :to="{name: 'user', params: {id: image.author.id}}" class="item__info__author">Автор:
        {{ image.author.name }}
      </router-link>
    </div>

    <div v-if="isModalOpen" class="modal" @click="closeModal">
      <div class="modal__content" @click.stop>
        <span class="modal__close" @click="closeModal">&times;</span>
        <img :src="image.url" :alt="image.name" class="modal__image" draggable="false" @contextmenu.prevent>
      </div>
    </div>
  </article>
</template>

<style scoped lang="sass">
@import '@/assets/styles/vars'
@import '@/assets/styles/mixins'

.item
  cursor: pointer
  display: flex
  flex-direction: column
  width: 24rem
  transition: all .3s

  &__image-box
    position: relative
    overflow: hidden
    align-self: center
    width: 100%
    height: 18rem

    &__image
      width: 100%
      height: 100%
      object-fit: cover
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      filter: grayscale(.4) brightness(.9)
      transition: .3s all

  &__info
    display: flex
    flex-direction: column
    padding: .5rem 1rem
    background-color: $colorBackgroundSecondary

    &__name
      padding: 0.25rem 0
      @include titleFont(1.2rem)
      color: $colorText
      transition: .3s all

      &:hover
        color: $colorStylishAccent

    &__author
      padding: 0.25rem 0
      color: $colorTips
      transition: .3s all

      &:hover
        color: $colorStylishGeneral

  &:hover
    box-shadow: .25rem .25rem .5rem $colorShadow

  &:hover &__image-box__image
    filter: grayscale(0)

.modal
  position: fixed
  top: 0
  left: 0
  right: 0
  bottom: 0
  background-color: $colorBackgroundTranslucent
  display: flex
  justify-content: center
  align-items: center
  z-index: 1000

  &__content
    position: relative
    max-width: 100%
    max-height: 100%
    overflow: hidden

  &__close
    position: absolute
    top: 1rem
    right: 1rem
    color: $colorText
    font-size: 2rem
    cursor: pointer
    background-color: $colorBackgroundTranslucent
    width: 2rem
    height: 2rem
    display: flex
    align-items: center
    justify-content: center
    border-radius: 50%
    transition: all .3s

    &:hover
      color: $colorStylishBack

  &__image

    cursor: default
    height: 90vh
    display: block
    margin: auto

</style>
