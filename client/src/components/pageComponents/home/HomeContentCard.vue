<script setup>

import PageContentCard from "@/components/pageComponents/PageContentCard.vue";
import VButton from "@/components/siteComponents/VButton.vue";
import VTitle from "@/components/siteComponents/VTitle.vue";
import VCursive from "@/components/siteComponents/VCursive.vue";
import VDescription from "@/components/siteComponents/VDescription.vue";

const props = defineProps({
  content: {
    type: Object
  }
})

</script>

<template>
  <div class="page-content-card">
    <PageContentCard>
      <template v-slot:content>
        <VCursive
            :value="content?.cursive"
        />
        <VTitle
            :value="content?.title"
        />
        <VDescription
            value="Simply dummy text of the printing and typesetting industry. Lorem had ceased to
been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."
        />
        <VButton
            label="Shop Now"
            @on-click="$router.push('/shop')"
        />
      </template>
    </PageContentCard>
  </div>
</template>

<style scoped>

</style>