<script setup>
import VCursive from "@/components/siteComponents/VCursive.vue";
import VTitle from "@/components/siteComponents/VTitle.vue";
import RoundCounterList from "@/components/pageComponents/RoundCounterList.vue";
import VLine from "@/components/siteComponents/VLine.vue";
import {computed} from "vue";
import VSlider from "@/components/siteComponents/VSlider.vue";
import PageReview from "@/components/pageComponents/PageReview.vue";
import PageContentTemplate from "@/components/templates/PageContentTemplate.vue";

const props = defineProps({
  content: {
    type: Object
  }
})

const style = computed(() => {
  return [
    props.content?.background ? `background-image: url(${props.content?.background});` : ''
  ].join('; ')
})
</script>

<template>
  <div
      class="home-testimonial"
      :style="style"
  >
    <PageContentTemplate title-row-justify="center">
      <template v-slot:cursive>
        <VCursive
            :value="content?.cursive"
        />
      </template>
      <template v-slot:title>
        <VTitle
            :value="content?.title"
        />
      </template>
      <template v-slot:content>
        <VSlider
            :slide-component="PageReview"
            :slide-list="content?.reviews?.list"
            :delay="8000"
            autoplay
        />
        <VLine
            class="home-testimonial__line"
        />
        <RoundCounterList
            :list-data="content?.counters?.list"
        />
      </template>
    </PageContentTemplate>
  </div>
</template>

<style scoped lang="scss">
.home-testimonial__line {
  margin: 100px 0;
}

.home-testimonial {
  text-align: center;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;

  .row {
    &:first-of-type {
      margin-bottom: 40px;
    }
  }
}
</style>