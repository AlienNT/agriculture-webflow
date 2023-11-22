<script setup>
import VButton from "@/components/siteComponents/VButton.vue";
import VTitle from "@/components/siteComponents/VTitle.vue";
import VCursive from "@/components/siteComponents/VCursive.vue";
import PageBanner from "@/components/pageComponents/PageBanner.vue";
import {computed} from "vue";

const props = defineProps({
  content: {
    type: Object
  }
})

const displayContent = computed(() => {
  return props?.content?.bannerContent
})

</script>

<template>
  <div class="home-banner">
    <PageBanner
        page-name="home"
    >
      <template v-slot:content>
        <div class="container page-banner-content">
          <div class="content-wrapper">
            <div class="design-text">
              <VCursive
                  :value="displayContent?.cursive"
              />
            </div>
            <div class="content-title">
              <VTitle
                  :value="displayContent?.title"
              />
            </div>
            <div class="content-button">
              <VButton
                  :label="displayContent?.buttonLabel"
                  :style-type="1"
              />
            </div>
          </div>
        </div>
      </template>
    </PageBanner>
  </div>
</template>

<style scoped lang="scss">
.home-banner {
  min-height: $viewportHeight;
  display: flex;
}
.page-banner-content {
  text-align: left;
}

.content-wrapper {
  max-width: 530px;
  margin-right: auto;
}

.content-title {
  font-size: 70px;
  font-weight: 800;
  margin-bottom: 25px;
}

.design-text {
  color: #68A47F;
  font-family: Yellowtail, sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 6px;
}

</style>