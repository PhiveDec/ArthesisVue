<script>

import ButtonRegularComp from '@/components/partials/ButtonRegularComp.vue'

export default {
  name: 'BannerStartSection',
  components: { ButtonRegularComp },
  data () {
    return {
      title: 'Добро пожаловать!',
      paragraphs: [
        'Команда проекта ARThesis рада приветствовать вас в месте, откуда зарождалось наше сообщество. ' +
        'Вы - художник, фотограф, дизайнер, аниматор? Вы имеете отношение к изобразительному искусству, ' +
        'искусству фотографии, дизайна или планируете развиваться в одном из этих направлений? ' +
        'У вас есть творческие амбиции и идеи?',
        'Присоединяйтесь к нам!'
      ],
      button: {
        path: '/auth',
        text: 'ВОЙТИ'
      }
    }
  }
}
</script>

<template>
  <section class="banner center">
    <div class="banner__background"></div>
    <div class="banner-area container">
      <div class="banner__content">
        <h2 class="banner__content__title">{{ title }}</h2>
        <p class="banner__content__text" v-for="(text, index) in paragraphs" :key="index">{{ text }}</p>
        <ButtonRegularComp :path="button.path" :text="button.text"/>
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">
@import '@/assets/styles/vars'
@import '@/assets/styles/mixins'

.banner
  position: relative

  &-area
    padding-top: 3rem
    padding-bottom: 3rem
    display: flex
    justify-content: center
    overflow: hidden

  &__background
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    background-position: center center
    background-repeat: no-repeat
    background-size: cover
    background-image: url("@/assets/img/start_banner5.jpg")
    filter: grayscale(.1) brightness(.5)
    z-index: 1

  &__content
    z-index: 2
    width: 30rem
    height: 100%
    display: flex
    flex-direction: column
    gap: 1.5rem

    &__title
      @include titleFont(2rem)

    &__text
      text-align: justify
</style>
