<script>
import ItemAlbumBlock from '@/components/blocks/ItemAlbumBlock.vue'

export default {
  name: 'AlbumsSection',
  components: { ItemAlbumBlock },
  props: ['albums', 'images'],
  data () {
    return {
      albumBanner: null
    }
  },
  computed: {
    title () {
      return `Альбомы от ${this.getImageForAlbum(this.albums[0]).author.name}`
    }
  },
  methods: {
    getImageForAlbum (album) {
      const albumImages = this.images.filter(image => image.album.id === album.id)
      if (albumImages.length > 0) {
        return albumImages[albumImages.length - 1]
      }
      return null
    }
  }
}
</script>

<template>
  <section class="albums center">
    <div class="albums-area container">
      <div class="albums__items">
        <ItemAlbumBlock v-for="album in albums"
                        :key="album.id"
                        :album="album"
                        :image="getImageForAlbum(album)"/>
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">
.albums
  &-area
    margin-top: 5rem
    display: flex
    flex-direction: column
    gap: 2rem
    align-items: center

  &__items
    display: flex
    justify-content: center
    flex-wrap: wrap
    gap: 2rem
</style>
