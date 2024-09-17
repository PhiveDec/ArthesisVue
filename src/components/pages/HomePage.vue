<script>
import BannerRegularSection from '@/components/sections/BannerRegularSection.vue'
import BannerStartSection from '@/components/sections/BannerStartSection.vue'
import ItemsGallerySection from '@/components/sections/ItemsGallerySection.vue'
import { mapActions, mapGetters } from 'vuex'
import ItemsEventsSection from '@/components/sections/ItemsEventsSection.vue'
import LoadingSection from '@/components/sections/LoadingSection.vue'
import LureSection from '@/components/sections/LureSection.vue'

export default {
  name: 'HomePage',
  props: ['isAuth'],
  components: {
    LureSection,
    LoadingSection,
    ItemsEventsSection,
    ItemsGallerySection,
    BannerStartSection,
    BannerRegularSection
  },
  data () {
    return {
      galleryInfo: {
        title: 'В ГАЛЕРЕЕ',
        subtitle: 'Следите за работами интересных вам авторов',
        startIndex: 0,
        stopIndex: 5
      },
      eventsInfo: {
        title: 'И СОБЫТИЯХ',
        subtitle: 'Учавствуйте в различных конкурсах',
        startIndex: 0,
        stopIndex: 2
      }
    }
  },
  computed: {
    ...mapGetters('userStore', ['isAuth']),
    ...mapGetters('galleryStore', ['homeImages']),
    ...mapGetters('eventsStore', ['homeEvents'])
  },
  methods: {
    ...mapActions('galleryStore', ['fetchImages']),
    ...mapActions('eventsStore', ['fetchEvents'])
  },
  mounted () {
    this.fetchImages()
    this.fetchEvents()
  }
}
</script>

<template>
  <BannerRegularSection v-if="isAuth"/>
  <BannerStartSection v-if="!isAuth"/>
  <LoadingSection v-if="!homeImages"/>
  <ItemsGallerySection v-if="homeImages" :title="galleryInfo.title" :subtitle="galleryInfo.subtitle"
                       :images="homeImages"/>
  <LoadingSection v-if="!homeEvents"/>
  <ItemsEventsSection v-if="homeEvents" :title="eventsInfo.title" :subtitle="eventsInfo.subtitle"
                      :events="homeEvents"/>
  <LureSection v-if="!isAuth"/>
</template>

<style scoped lang="sass">

</style>
