<script>
export default {
  name: 'LoadingSection'
}
</script>

<template>
  <section class="loading center">
    <div class="loading-area container">
      <h2 class="loading__title">Идёт загрузка</h2>
      <i class="loading__icon fas fa-clock-rotate-left"></i>
    </div>
  </section>
</template>

<style scoped lang="sass">
@import '@/assets/styles/vars'
@import '@/assets/styles/animations'

.loading
  &-area
    height: 30vh
    display: flex
    justify-content: center
    align-items: center
    gap: 1rem

  &__title
    color: $colorStylishAccent
    animation: loading-text 1.2s ease-in-out infinite both

  &__icon
    color: $colorStylishAccent
    font-size: 2rem
    animation: loading-icon 1.2s ease-in-out infinite both
</style>
