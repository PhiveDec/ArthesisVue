<script>
import LinkSocialComp from '@/components/partials/LinkSocialComp.vue'
import LogoBlock from '@/components/blocks/LogoBlock.vue'

export default {
  name: 'SocialFooterBlock',
  components: {
    LogoBlock,
    LinkSocialComp
  },
  data () {
    return {
      links: [
        {
          url: 'https://t.me/phive_arthesis',
          classLink: 'fab fa-telegram'
        },
        {
          url: 'https://vk.com',
          classLink: 'fab fa-vk'
        },
        {
          url: 'https://discord.gg/QVwvkhaAER',
          classLink: 'fab fa-discord'
        },
        {
          url: 'https://youtube.com',
          classLink: 'fab fa-youtube'
        }
      ]
    }
  }
}
</script>

<template>
  <div class="social">
    <LogoBlock/>
    <div class="social__links">
      <LinkSocialComp v-for="(link, index) in links" :url="link.url" :class-link="link.classLink" :key="index"/>
    </div>
  </div>
</template>

<style scoped lang="sass">
.social
  display: flex
  flex-direction: column

  &__links
    display: flex
    gap: 1rem
</style>
