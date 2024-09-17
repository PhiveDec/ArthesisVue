<script>
import ButtonSecondaryComp from '@/components/partials/ButtonSecondaryComp.vue'

export default {
  name: 'LureSection',
  components: { ButtonSecondaryComp },
  data () {
    return {
      lureItems: [
        {
          text: 'Создавайте',
          title: 'АЛЬБОМЫ'
        },
        {
          text: 'Загружайте',
          title: 'СНИМКИ'
        },
        {
          text: 'Публикуйте',
          title: 'АРТЫ'
        },
        {
          text: 'Учавствуйте',
          title: 'В СОБЫТИЯХ'
        }
      ],
      button: {
        path: '/auth',
        text: 'НАЧАТЬ'
      }
    }
  }
}
</script>

<template>
  <section class="lure center">
    <div class="lure-area container">
      <div class="lure__items">
        <div class="lure__items__box" v-for="(item, index) in lureItems" :key="index">
          <p class="lure__items__box__text">{{ item.text }}</p>
          <h3 class="lure__items__box__title">{{ item.title }}</h3>
        </div>
      </div>
      <ButtonSecondaryComp :path="button.path" :text="button.text"/>
    </div>
  </section>
</template>

<style scoped lang="sass">
@import '@/assets/styles/vars'
@import '@/assets/styles/mixins'

.lure
  margin-top: 6rem
  background-color: $colorBackgroundSecondary

  &-area
    padding-top: 4rem
    padding-bottom: 2.5rem
    display: flex
    flex-direction: column
    align-items: center
    gap: 2.5rem

  &__items
    display: flex

    &__box
      padding: .5rem 2rem
      border-right: 1px solid $colorStylishBack
      text-align: center

      &:last-child
        border-right: none

      &__title
        @include titleFont(1.75rem)
        color: $colorStylishGeneral

      &__text
        font-size: 1.25rem
        color: $colorTitle
</style>
