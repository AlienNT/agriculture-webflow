<script setup>
import VCursive from "@/components/siteComponents/VCursive.vue";
import VTitle from "@/components/siteComponents/VTitle.vue";
import RoundCounterList from "@/components/pageComponents/RoundCounterList.vue";
import VLine from "@/components/siteComponents/VLine.vue";
import {computed} from "vue";
import VSlider from "@/components/siteComponents/VSlider.vue";
import PageReview from "@/components/pageComponents/PageReview.vue";

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
    <div class="container">
      <div class="row">
        <div class="col">
          <VCursive
              :value="content?.cursive"
          />
          <VTitle
              :value="content?.title"
          />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <VSlider
              :slide-component="PageReview"
              :slide-list="content?.reviews?.list"
              :delay="8000"
              autoplay
          />
        </div>
      </div>
      <VLine
          class="home-testimonial__line"
      />
      <div class="row">
        <div class="col">
          <RoundCounterList
              :list-data="content?.counters?.list"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-testimonial__line {
  margin: 100px 0;
}

.home-testimonial {
  padding-top: 160px;
  padding-bottom: 160px;
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