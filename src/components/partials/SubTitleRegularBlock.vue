<script>
export default {
  name: 'SubTitleRegularBlock',
  props: ['subtitle']
}
</script>

<template>
  <h3 class="regular-subtitle">{{ subtitle }}</h3>
</template>

<style scoped lang="sass">
@import '@/assets/styles/mixins'

.regular-subtitle
  @include subtitleFont(1.2rem)
</style>
