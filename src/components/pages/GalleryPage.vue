<script>

import { defineComponent } from 'vue'
import BannerStartSection from '@/components/sections/BannerStartSection.vue'
import BannerRegularSection from '@/components/sections/BannerRegularSection.vue'
import ItemsGallerySection from '@/components/sections/ItemsGallerySection.vue'
import { mapActions, mapGetters } from 'vuex'
import LoadingSection from '@/components/sections/LoadingSection.vue'

export default defineComponent({
  name: 'GalleryPage',
  props: ['isAuth'],
  components: {
    LoadingSection,
    ItemsGallerySection,
    BannerRegularSection,
    BannerStartSection
  },
  data () {
    return {
      title: 'ГАЛЕРЕЯ'
    }
  },
  computed: {
    ...mapGetters('userStore', ['isAuth']),
    ...mapGetters('galleryStore', ['sortedByDateImages'])
  },
  methods: {
    ...mapActions('galleryStore', ['fetchImages'])
  },
  mounted () {
    this.fetchImages()
  }
})
</script>

<template>
  <BannerRegularSection v-if="isAuth" :title="title"/>
  <BannerStartSection v-if="!isAuth"/>
  <LoadingSection v-if="!sortedByDateImages"/>
  <ItemsGallerySection v-if="sortedByDateImages" :images="sortedByDateImages" :is-filtering="true"/>
</template>

<style scoped lang="sass">

</style>
