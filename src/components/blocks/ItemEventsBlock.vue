<script>
export default {
  name: 'ItemEventsBlock',
  props: ['event']
}
</script>

<template>
  <article class="item">
    <router-link :to="{name: 'event', params: {id: event.id}}" class="item__image-box">
      <img :src="event.bannerUrl" :alt="event.name" class="item__image-box__image">
      <div class="item__image-box__info">
        <div class="item__image-box__info__top">
          <h3 class="item__image-box__info__top__name">{{ event.name }}</h3>
          <p class="item__image-box__info__top__organizer">от <span>{{ event.organizer }}</span></p>
        </div>
        <div class="item__image-box__info__mid">
          <p class="item__image-box__info__mid__theme">{{ event.theme }}</p>
          <p class="item__image-box__info__mid__period">c {{ event.startDate }} по {{
              event.finishDate
            }}</p>
          <p class="item__image-box__info__mid__result" v-if="!event.isFinished">Итоги: {{
              event.resultDate
            }}</p>
          <p class="item__image-box__info__mid__result" v-if="event.isFinished">ЗАВЕРШЕНО</p>
        </div>
        <div class="item__image-box__info__bottom" v-if="event.winners">Победители:
          <p class="item__image-box__info__bottom__winner" v-for="winner in event.winners" :key="winner.id">
            {{ winner.author.name }}</p>
        </div>
      </div>
    </router-link>
  </article>
</template>

<style scoped lang="sass">
@import '@/assets/styles/vars'
@import '@/assets/styles/mixins'

.item
  display: flex
  flex-direction: column
  width: 100%
  transition: all .3s

  &__image-box
    position: relative
    overflow: hidden
    align-self: center
    width: 100%
    height: 22rem
    transition: all .3s

    &:hover &__image
      filter: grayscale(0) brightness(1)

    &:hover &__info__top__name, &:hover &__info__bottom__winner
      color: $colorStylishGeneral

    &:hover &__info__top__organizer span
      color: $colorStylishAccent

    &__image
      width: 100%
      height: 100%
      object-fit: cover
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      filter: grayscale(.4) brightness(.9)
      transition: .3s all

    &__info
      padding: 1rem
      display: flex
      flex-direction: column
      gap: 1rem
      justify-content: space-between
      position: absolute
      top: 0
      width: 30%
      height: 100%
      background: $colorBackgroundTranslucent

      &__top
        &__name
          @include titleFont(1.75rem)
          color: $colorTitle
          transition: all .3s

        &__organizer
          & span
            color: $colorTitle
            transition: all .3s

      &__mid
        font-size: .85rem
        color: $colorTips

        &__theme
          color: $colorTitle
          font-size: 1rem
          margin-bottom: .25rem

      &__bottom
        color: $colorTitle
        display: flex
        flex-direction: column
        gap: .25rem

        &__winner
          color: $colorTitle
          transition: all .3s
</style>
