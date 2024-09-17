<script>
import LogoBlock from '@/components/blocks/LogoBlock.vue'
import NavHeaderBlock from '@/components/blocks/NavHeaderBlock.vue'

export default {
  name: 'HeaderSection',
  components: {
    NavHeaderBlock,
    LogoBlock
  }
}
</script>

<template>
  <header class="header center">
    <div class="header-area container">
      <LogoBlock/>
      <NavHeaderBlock/>
    </div>
  </header>
</template>

<style scoped lang="sass">
@import '@/assets/styles/vars'
.header
  &-area
    width: 100%
    height: 5rem
    display: flex
    justify-content: space-between
    align-items: center
</style>
