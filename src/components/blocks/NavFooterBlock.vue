<script>
import TitleRegularComp from '@/components/partials/TitleRegularComp.vue'
import LinkNavFooterComp from '@/components/partials/LinkNavFooterComp.vue'

export default {
  name: 'NavFooterBlock',
  components: {
    LinkNavFooterComp,
    TitleRegularComp
  },
  data () {
    return {
      title: 'Навигация',
      links: [
        {
          name: 'Главная',
          path: '/home'
        },
        {
          name: 'Cобытия',
          path: '/events'
        },
        {
          name: 'Галерея',
          path: '/gallery'
        },
        {
          name: 'Мастерская',
          path: '/studio'
        }
      ]
    }
  }
}
</script>

<template>
  <div class="footer-nav">
    <TitleRegularComp :title="title"/>
    <nav class="footer-nav__links">
      <LinkNavFooterComp v-for="(link, index) in links" :name="link.name" :path="link.path" :key="index"/>
    </nav>
  </div>
</template>

<style scoped lang="sass">
.footer-nav
  margin-top: 1rem
  display: flex
  flex-direction: column
  gap: 1rem

  &__links
    display: flex
    flex-direction: column
</style>
