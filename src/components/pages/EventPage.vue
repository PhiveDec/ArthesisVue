<script>
import BannerEventSection from '@/components/sections/BannerEventSection.vue'
import { mapActions, mapGetters } from 'vuex'
import InfoEventSection from '@/components/sections/InfoEventSection.vue'
import ItemsGallerySection from '@/components/sections/ItemsGallerySection.vue'

export default {
  name: 'EventPage',
  components: {
    ItemsGallerySection,
    InfoEventSection,
    BannerEventSection
  },
  data () {
    return {
      galleryTitle: 'РАБОТЫ УЧАСТНИКОВ'
    }
  },
  computed: {
    bannerTitle () {
      return this.selectedEvent.name
    },
    bannerSubtitle () {
      if (this.selectedEvent.isFinished) {
        return `ПОБЕДИТЕЛЬ: ${this.selectedEvent.greatWinner.author.name} (${this.selectedEvent.greatWinner.name})`
      } else {
        return `${this.selectedEvent.startDate} : ${this.selectedEvent.finishDate}`
      }
    },
    ...mapGetters('eventsStore', ['selectedEvent'])
  },
  methods: {
    ...mapActions('eventsStore', ['fetchEvent'])
  },
  mounted () {
    this.fetchEvent(this.$route.params.id)
    window.scrollTo(0, 0)
  }
}
</script>

<template>
  <BannerEventSection v-if="selectedEvent" :event-banner="selectedEvent.bannerUrl" :title="bannerTitle" :subtitle="bannerSubtitle"/>
  <InfoEventSection v-if="selectedEvent" :theme="selectedEvent.theme" :organizer="selectedEvent.organizer"
                    :tag="selectedEvent.tag" :result-date="selectedEvent.resultDate" :prize="selectedEvent.prize"/>
  <ItemsGallerySection v-if="selectedEvent" :images="selectedEvent.images" :title="galleryTitle"/>
</template>

<style scoped lang="sass">
</style>
