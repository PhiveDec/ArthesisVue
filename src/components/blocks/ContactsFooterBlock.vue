<script>
import TitleRegularComp from '@/components/partials/TitleRegularComp.vue'

export default {
  name: 'ContactsFooterBlock',
  components: { TitleRegularComp },
  data () {
    return {
      title: 'Контакты',
      links: [
        {
          href: 'mailto:arthesis@gmail.com',
          name: 'arthesis@gmail.com'
        },
        {
          href: 'https://t.me/phive_arthesis',
          name: 'www.t.me/phive_arthesis'
        }
      ]
    }
  }
}
</script>

<template>
  <div class="contacts">
    <TitleRegularComp :title="title"/>
    <div class="contacts__links">
      <a class="contacts__links__link"
         v-for="(link, index) in links"
         :href="link.href" :key="index">
        {{ link.name }}
      </a>
    </div>
  </div>
</template>

<style scoped lang="sass">
@import "@/assets/styles/vars"

.contacts
  margin-top: 1rem
  display: flex
  flex-direction: column
  gap: 1rem

  &__links
    display: flex
    flex-direction: column

    &__link
      padding: .5rem 0

      &:hover
        color: $colorStylishGeneral
</style>
