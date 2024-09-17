<script>
import BannerRegularSection from '@/components/sections/BannerRegularSection.vue'
import { mapActions, mapGetters, mapMutations } from 'vuex'
import AlbumsSection from '@/components/sections/AlbumsSection.vue'
import LoadingSection from '@/components/sections/LoadingSection.vue'

export default {
  name: 'UserAlbumsPage',
  components: {
    LoadingSection,
    AlbumsSection,
    BannerRegularSection
  },
  computed: {
    title () {
      if (this.userImages) {
        return `Альбомы от ${this.userImages[0].author.name}`
      }
      return 'Альбомы'
    },
    ...mapGetters('galleryStore', ['userAlbums', 'userImages'])
  },
  methods: {
    ...mapMutations('galleryStore', ['SET_USER_ALBUMS']),
    ...mapActions('galleryStore', ['fetchUserAlbums'])
  },
  mounted () {
    this.fetchUserAlbums(this.$route.params.id)
    window.scrollTo(0, 0)
  }
}
</script>

<template>
  <BannerRegularSection :title="title"/>
  <LoadingSection v-if="!userAlbums && !userImages"/>
  <AlbumsSection v-if="userAlbums && userImages" :albums="userAlbums" :images="userImages"/>
</template>

<style scoped lang="sass">

</style>
