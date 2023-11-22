<script setup>

import PageContentCard from "@/components/pageComponents/PageContentCard.vue";
import VButton from "@/components/siteComponents/VButton.vue";
import VTitle from "@/components/siteComponents/VTitle.vue";
import VCursive from "@/components/siteComponents/VCursive.vue";
import VDescription from "@/components/siteComponents/VDescription.vue";
import VImage from "@/components/siteComponents/VImage.vue";

const props = defineProps({
  content: {
    type: Object
  }
})

</script>

<template>
  <PageContentCard>
    <template v-slot:content>
      <div class="row page-content-card__row">
        <div class="col image">
          <VImage
              :src="content?.image"
              background-mode
              object-fit="contain"
          />
        </div>
        <div class="col content">
          <VCursive
              class="cursive"
              :value="content?.cursive"
          />
          <VTitle
              class="title"
              :value="content?.title"
          />
          <VDescription
              class="description"
              :value="content?.description"
          />
          <VButton
              :label="content?.buttonLabel"
              @on-click="$router.push(content?.buttonRoute)"
          />
        </div>
      </div>
    </template>
  </PageContentCard>
</template>

<style scoped lang="scss">
.page-content-card {
  padding: 186px 0;
  background: #F9F8F8;;
}

.page-content-card__row {
  .col {
    flex: 1 1 50%;
  }
}

.title {
  font-size: 50px;
  font-style: normal;
  font-weight: 800;
  margin-bottom: 14px;
}

.cursive {
  margin-bottom: 10px;
}

.description {
  margin-bottom: 46px;
}
</style>