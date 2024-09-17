<script>
import HeaderSection from '@/components/sections/HeaderSection.vue'
import FooterSection from '@/components/sections/FooterSection.vue'

export default {
  name: 'App',
  components: {
    FooterSection,
    HeaderSection
  },
  data () {
    return {
      isAuth: false
    }
  }
}
</script>

<template>
  <div class="height-stretcher">
    <HeaderSection/>
    <router-view :isAuth="isAuth"/>
    <FooterSection/>
  </div>
</template>

<style lang="sass" scoped>
.height-stretcher
  display: flex
  flex-direction: column
  justify-content: space-between
  min-height: 100vh
</style>
