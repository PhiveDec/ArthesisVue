<script>
import TitleRegularComp from '@/components/partials/TitleRegularComp.vue'
import SubTitleRegularBlock from '@/components/partials/SubTitleRegularBlock.vue'

export default {
  name: 'HeadingRegulaBlock',
  components: {
    TitleRegularComp,
    SubTitleRegularBlock
  },
  props: ['title', 'subtitle', 'isReverse']
}
</script>

<template>
  <div class="heading">
    <TitleRegularComp :title="title" v-if="!isReverse"/>
    <SubTitleRegularBlock :subtitle="subtitle"/>
    <TitleRegularComp :title="title" v-if="isReverse"/>
  </div>
</template>

<style scoped lang="sass">
.heading
  width: 28rem
  display: flex
  flex-direction: column
  align-items: center
  gap: .75rem
</style>
