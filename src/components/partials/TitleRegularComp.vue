<script>
export default {
  name: 'TitleRegularComp',
  props: ['title']
}
</script>

<template>
  <h2 class="regular-title">{{ title }}</h2>
</template>

<style scoped lang="sass">
@import '@/assets/styles/mixins'

.regular-title
  @include titleFont(1.75rem)
</style>
