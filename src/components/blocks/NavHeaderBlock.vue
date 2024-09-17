<script>
import LinkNavComp from '@/components/partials/LinkNavComp.vue'

export default {
  name: 'NavHeaderBlock',
  components: { LinkNavComp },
  data () {
    return {
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
  <nav class="header-nav">
    <LinkNavComp v-for="(link, index) in links"
                 :name="link.name" :path="link.path"
                 :key="index">
    </LinkNavComp>
  </nav>
</template>

<style scoped lang="sass">
.header-nav
  display: flex
</style>
