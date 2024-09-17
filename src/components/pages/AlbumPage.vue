<script>
import { mapActions, mapGetters } from 'vuex'
import BannerRegularSection from '@/components/sections/BannerRegularSection.vue'
import ItemsGallerySection from '@/components/sections/ItemsGallerySection.vue'
import LoadingSection from '@/components/sections/LoadingSection.vue'

export default {
  name: 'AlbumPage',
  components: {
    LoadingSection,
    ItemsGallerySection,
    BannerRegularSection
  },
  computed: {
    title () {
      if (this.albumImages) {
        return `Альбом "${this.albumImages[0].album.name}" от ${this.albumImages[0].author.name}`
      }
      return 'Альбом'
    },
    ...mapGetters('galleryStore', ['albumImages'])
  },
  methods: {
    ...mapActions('galleryStore', ['fetchAlbumImages'])
  },
  mounted () {
    this.fetchAlbumImages(this.$route.params.id)
    window.scrollTo(0, 0)
  }
}
</script>

<template>
  <BannerRegularSection :title="title"/>
  <LoadingSection v-if="!albumImages"/>
  <ItemsGallerySection v-if="albumImages" :images="albumImages" />
</template>

<style scoped lang="sass">

</style>
