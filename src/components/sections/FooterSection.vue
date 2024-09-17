<script>
import SocialFooterBlock from '@/components/blocks/SocialFooterBlock.vue'
import ContactsFooterBlock from '@/components/blocks/ContactsFooterBlock.vue'
import NavFooterBlock from '@/components/blocks/NavFooterBlock.vue'

export default {
  name: 'FooterSection',
  components: {
    NavFooterBlock,
    ContactsFooterBlock,
    SocialFooterBlock
  }
}
</script>

<template>
  <footer class="footer center">
    <div class="footer-area container">
      <SocialFooterBlock/>
      <NavFooterBlock/>
      <ContactsFooterBlock/>
    </div>
  </footer>
</template>

<style scoped lang="sass">
@import '@/assets/styles/vars'
.footer
  &-area
    margin-top: 4rem
    padding-bottom: 2rem
    width: 100%
    display: flex
    justify-content: space-between
</style>
