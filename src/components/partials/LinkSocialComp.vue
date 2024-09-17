<script>
export default {
  name: 'LinkSocialComp',
  props: ['url', 'classLink']
}
</script>

<template>
  <a :href="url" :class="classLink" target="_blank"></a>
</template>

<style scoped lang="sass">
@import '@/assets/styles/vars'

a
  font-size: 1.25rem
  padding: 1rem .25rem
  transition: all .3s

  &:hover
    color: $colorStylishGeneral
</style>
