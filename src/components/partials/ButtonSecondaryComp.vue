<script>
export default {
  name: 'ButtonSecondaryComp',
  props: ['text', 'path']
}
</script>

<template>
  <router-link :to="path" class="button">{{ text }}</router-link>
</template>

<style scoped lang="sass">
@import '@/assets/styles/vars'
@import '@/assets/styles/mixins'

.button
  display: block
  width: fit-content
  background-color: transparent
  border: 1px solid $colorTitle
  @include titleFont(1.3rem)
  color: $colorTitle
  padding: 1rem 1.5rem
  filter: grayscale(0) brightness(1)
  transition: all .3s

  &:hover
    background-color: $colorBackground
    color: $colorStylishGeneral
    border-color: $colorStylishGeneral
    filter: grayscale(.1) brightness(.9)

</style>
