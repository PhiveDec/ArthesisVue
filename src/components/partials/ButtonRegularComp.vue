<script>
export default {
  name: 'ButtonRegularComp',
  props: ['text', 'path']
}
</script>

<template>
  <router-link :to="path" class="button">{{ text }}</router-link>
</template>

<style scoped lang="sass">
@import '@/assets/styles/vars'

.button
  display: block
  width: fit-content
  background-color: $colorText
  color: $colorBackground
  padding: 1.2rem 1.5rem
  border-radius: 2rem
  font-size: 1.1rem
  font-weight: 500
  transition: all .3s

  &:hover
    background-color: $colorStylishBack
</style>
