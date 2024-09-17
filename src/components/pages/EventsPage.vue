<script>
import BannerStartSection from '@/components/sections/BannerStartSection.vue'
import BannerRegularSection from '@/components/sections/BannerRegularSection.vue'
import { mapActions, mapGetters } from 'vuex'
import LoadingSection from '@/components/sections/LoadingSection.vue'
import ItemsEventsSection from '@/components/sections/ItemsEventsSection.vue'

export default {
  name: 'EventsPage',
  props: ['isAuth'],
  components: {
    ItemsEventsSection,
    LoadingSection,
    BannerRegularSection,
    BannerStartSection
  },
  data () {
    return {
      title: 'СОБЫТИЯ'
    }
  },
  computed: {
    ...mapGetters('userStore', ['isAuth']),
    ...mapGetters('eventsStore', ['sortedByDateEvents'])
  },
  methods: {
    ...mapActions('eventsStore', ['fetchEvents'])
  },
  mounted () {
    this.fetchEvents()
    window.scrollTo(0, 0)
  }
}
</script>

<template>
  <BannerRegularSection v-if="isAuth" :title="title"/>
  <BannerStartSection v-if="!isAuth"/>
  <LoadingSection v-if="!sortedByDateEvents"/>
  <ItemsEventsSection v-if="sortedByDateEvents"
                      :events="sortedByDateEvents" :is-filtering="true"/>
</template>

<style scoped lang="sass">

</style>
