<script>
export default {
  name: 'LinkNavComp',
  props: ['path', 'name']
}
</script>

<template>
  <router-link class="nav-link" :to="path">{{ name }}</router-link>
</template>

<style scoped lang="sass">
@import '@/assets/styles/vars'
.nav-link
  color: $colorTitle
  padding: 1rem 1.5rem
  transition: all .3s

  &:hover
    color: $colorStylishGeneral
</style>
