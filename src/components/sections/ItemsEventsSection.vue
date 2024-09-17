<script>
import HeadingRegulaBlock from '@/components/blocks/HeadingRegulaBlock.vue'
import ItemEventsBlock from '@/components/blocks/ItemEventsBlock.vue'

export default {
  name: 'ItemsEventsSection',
  components: {
    ItemEventsBlock,
    HeadingRegulaBlock
  },
  props: ['events', 'title', 'subtitle', 'isFiltering'],
  data () {
    return {
      selectedStatus: 'all',
      searchQuery: '',
      currentPage: 1,
      itemsPerPage: 5,
      statuses: [
        {
          name: 'all',
          text: 'ВСЕ'
        },
        {
          name: 'actual',
          text: 'АКТУАЛЬНЫЕ'
        },
        {
          name: 'finished',
          text: 'ЗАВЕРШЕННЫЕ'
        }
      ]
    }
  },
  computed: {
    filteredEvents () {
      let filteredList = [...this.events]

      if (this.selectedStatus === 'actual') {
        filteredList = filteredList.filter(item => item.isFinished === false)
      } else if (this.selectedStatus === 'finished') {
        filteredList = filteredList.filter(item => item.isFinished === true)
      }

      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase()
        filteredList = filteredList.filter(item => {
          const nameMatch = item.name.toLowerCase().includes(query)
          const organizerMatch = item.organizer.toLowerCase().includes(query)
          const themeMatch = item.theme.toLowerCase().includes(query)

          return nameMatch || organizerMatch || themeMatch
        })
      }

      return filteredList
    },
    paginatedEvents () {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage
      const endIndex = startIndex + this.itemsPerPage
      return this.filteredEvents.slice(startIndex, endIndex)
    },
    totalPages () {
      return Math.ceil(this.filteredEvents.length / this.itemsPerPage)
    },
    displayPages () {
      const pages = []
      let start = Math.max(1, this.currentPage - 2)
      const end = Math.min(start + 4, this.totalPages)

      if (end - start < 4) {
        start = Math.max(1, end - 4)
      }

      for (let i = start; i <= end; i++) {
        pages.push(i)
      }

      return pages
    }
  },
  methods: {
    selectStatus (status) {
      this.selectedStatus = status
      this.currentPage = 1
    },
    changePage (pageNum) {
      if (pageNum > 0 && pageNum <= this.totalPages) {
        this.currentPage = pageNum
      }
      const eventsSection = document.querySelector('.events')
      if (eventsSection) {
        eventsSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  },
  watch: {
    searchQuery (newValue) {
      this.currentPage = 1
    }
  }
}
</script>

<template>
  <section class="events center">
    <div class="events-area container">
      <HeadingRegulaBlock v-if="title || subtitle" :title="title" :subtitle="subtitle" :is-reverse="true"/>

      <div class="events__filtering" v-if="isFiltering">
        <div class="events__filtering__types">
          <p class="events__filtering__types__value" :class="{'active-status': status.name === selectedStatus}"
             v-for="(status, index) in statuses" :key="index" @click="selectStatus(status.name)">{{ status.text }}</p>
        </div>
        <div class="events__filtering__search">
          <i class="events__filtering__search__icon fas fa-magnifying-glass"></i>
          <input type="text" spellcheck="false" class="events__filtering__search__input" v-model="searchQuery">
        </div>
      </div>

      <div class="events__items">
        <ItemEventsBlock v-for="event in paginatedEvents" :key="event.id"
                         :event="event"/>
      </div>
      <div class="events__pagination" v-if="totalPages > 1">
        <button class="events__pagination__button" @click="changePage(currentPage - 1)" :disabled="currentPage === 1">
          &laquo; Назад
        </button>
        <button class="events__pagination__button" v-for="page in displayPages" :key="page" @click="changePage(page)"
                :class="{active: page === currentPage}">{{ page }}
        </button>
        <button class="events__pagination__button" @click="changePage(currentPage + 1)"
                :disabled="currentPage === totalPages">Далее &raquo;
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">
@import '@/assets/styles/vars'

.events
  &-area
    margin-top: 5rem
    display: flex
    flex-direction: column
    gap: 3rem
    align-items: center

  &__filtering
    display: flex
    gap: 2rem

    &__types
      width: fit-content
      display: flex
      justify-content: center
      border: 1px solid $colorBackgroundSecondary

      &__value
        padding: 1rem 2rem
        cursor: pointer
        transition: all .3s

        &:hover
          color: $colorStylishBack

    &__search
      display: flex
      align-items: center
      justify-content: center
      border: 1px solid $colorBackgroundSecondary

      &__input
        width: 15rem
        height: 100%
        padding: 1rem 1rem
        outline: none
        border: none
        background-color: $colorBackground
        font-size: 1.2rem
        color: $colorStylishBack

      &__icon
        height: 100%
        background-color: $colorBackgroundSecondary
        font-size: 1.2rem
        color: $colorTips
        display: flex
        justify-content: center
        align-items: center
        padding: 1rem 1.5rem

  &__items
    width: 100%
    display: flex
    flex-wrap: wrap
    gap: 2rem
    justify-content: center

  &__pagination
    display: flex
    justify-content: center
    margin-top: 2rem

    &__button
      background-color: $colorBackground
      border: 1px solid $colorBackgroundSecondary
      color: $colorTips
      padding: .75rem 1.25rem
      text-align: center
      text-decoration: none
      display: inline-block
      font-size: 1.25rem
      margin: 0 0.25rem
      cursor: pointer
      user-select: none
      transition: all 0.3s

      &:hover:not(.active)
        background-color: $colorBackgroundSecondary

      &.active
        background-color: $colorBackgroundSecondary
        color: $colorStylishBack
        pointer-events: none
        cursor: default
        user-select: none

      &:disabled
        opacity: 0.5
        cursor: default
        pointer-events: none
        user-select: none

.active-status
  cursor: unset
  pointer-events: none
  color: $colorStylishBack
  background-color: $colorBackgroundSecondary
</style>
