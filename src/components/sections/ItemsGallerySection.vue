<script>
import ItemGalleryBlock from '@/components/blocks/ItemGalleryBlock.vue'
import HeadingRegulaBlock from '@/components/blocks/HeadingRegulaBlock.vue'

export default {
  name: 'ItemsGallerySection',
  components: {
    HeadingRegulaBlock,
    ItemGalleryBlock
  },
  props: ['images', 'title', 'subtitle', 'isFiltering'],
  data () {
    return {
      selectedType: 'all',
      searchQuery: '',
      currentPage: 1,
      itemsPerPage: 9,
      types: [
        {
          name: 'all',
          text: 'ВСЕ'
        },
        {
          name: 'photo',
          text: 'ФОТО'
        },
        {
          name: 'art',
          text: 'АРТЫ'
        },
        {
          name: 'design',
          text: 'ДИЗАЙН'
        }
      ]
    }
  },
  computed: {
    filteredImages () {
      let filteredList = [...this.images]

      if (this.selectedType !== 'all') {
        filteredList = filteredList.filter(item => item.type === this.selectedType)
      }

      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase()
        filteredList = filteredList.filter(item => {
          const nameMatch = item.name.toLowerCase().includes(query)
          const authorMatch = item.author.name.toLowerCase().includes(query)
          const tagsMatch = item.tags.some(tag => tag.toLowerCase().includes(query))

          return nameMatch || authorMatch || tagsMatch
        })
      }

      return filteredList
    },
    paginatedImages () {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage
      const endIndex = startIndex + this.itemsPerPage
      return this.filteredImages.slice(startIndex, endIndex)
    },
    totalPages () {
      return Math.ceil(this.filteredImages.length / this.itemsPerPage)
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
    selectType (type) {
      this.selectedType = type
      this.currentPage = 1
    },
    changePage (pageNum) {
      if (pageNum > 0 && pageNum <= this.totalPages) {
        this.currentPage = pageNum
      }
      const gallerySection = document.querySelector('.gallery')
      if (gallerySection) {
        gallerySection.scrollIntoView({ behavior: 'smooth' })
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
  <section class="gallery center">
    <div class="gallery-area container">
      <HeadingRegulaBlock v-if="title || subtitle" :title="title" :subtitle="subtitle" :is-reverse="true"/>

      <div class="gallery__filtering" v-if="isFiltering">
        <div class="gallery__filtering__types">
          <p class="gallery__filtering__types__value" :class="{'active-type': type.name === selectedType}"
             v-for="(type, index) in types" :key="index" @click="selectType(type.name)">{{ type.text }}</p>
        </div>

        <div class="gallery__filtering__search">
          <i class="gallery__filtering__search__icon fas fa-magnifying-glass"></i>
          <input type="text" spellcheck="false" class="gallery__filtering__search__input" v-model="searchQuery">
        </div>

      </div>

      <div class="gallery__items">
        <ItemGalleryBlock v-for="image in paginatedImages" :key="image.id" :image="image"/>
      </div>

      <div class="gallery__pagination" v-if="totalPages > 1">
        <button class="gallery__pagination__button" @click="changePage(currentPage - 1)"
                :disabled="currentPage === 1">
          &laquo; Назад
        </button>
        <button class="gallery__pagination__button" v-for="page in displayPages" :key="page"
                @click="changePage(page)"
                :class="{active: page === currentPage}">{{ page }}
        </button>
        <button class="gallery__pagination__button" @click="changePage(currentPage + 1)"
                :disabled="currentPage === totalPages">Далее &raquo;
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">
@import '@/assets/styles/vars'

.gallery
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
    gap: 1.5rem
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

.active-type
  cursor: unset
  pointer-events: none
  color: $colorStylishBack
  background-color: $colorBackgroundSecondary
</style>
