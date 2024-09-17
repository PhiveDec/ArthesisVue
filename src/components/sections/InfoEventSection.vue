<script>
export default {
  name: 'InfoEventSection',
  props: ['theme', 'organizer', 'prize', 'resultDate', 'tag']
}
</script>

<template>
  <section class="info center">
    <div class="info-area container">
      <div class="info__item">
        <p class="info__item__caption">ОРГАНИЗАТОР</p>
        <p class="info__item__value">{{ organizer }}</p>
      </div>
      <div class="info__item">
        <p class="info__item__caption">ТЕМА</p>
        <p class="info__item__value">{{ theme }}</p>
      </div>
      <div class="info__item">
        <p class="info__item__caption">ПРИЗ</p>
        <p class="info__item__value">{{ prize }}</p>
      </div>
      <div class="info__item">
        <p class="info__item__caption">РЕЗУЛЬТАТЫ</p>
        <p class="info__item__value">{{ resultDate }}</p>
      </div>
      <div class="info__item">
        <p class="info__item__caption">ТЭГ</p>
        <p class="info__item__value">{{ tag }}</p>
      </div>
      <div class="info__item">
        <p class="info__item__tips">Для того, чтобы принять участие в событии, вам необходимо добавить тэг собития в
          тэги своего изображения, которое вы хотите выставить для участия в собитии</p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">
@import '@/assets/styles/vars'
@import '@/assets/styles/mixins'

.info
  margin-top: 3rem

  &-area
    display: flex
    flex-direction: column
    align-items: center
  &__item
    display: flex
    width: 30rem
    border-top: 1px solid $colorBackgroundSecondary
    border-left: 1px solid $colorBackgroundSecondary
    border-right: 1px solid $colorBackgroundSecondary
    &:last-child
      border-bottom: 1px solid $colorBackgroundSecondary
    &__caption
      border-right: 1px solid $colorBackgroundSecondary
      padding: 1rem 1rem
      text-align: end
      color: $colorTitle
      width: 35%
    &__value
      padding: 1rem 1rem
      color: $colorStylishGeneral
      width: 70%
    &__tips
      text-align: justify
      padding: .75rem 1rem
      font-size: .9rem
      color: $colorTips
</style>
