<script setup>

import PageTemplate from "@/components/templates/PageTemplate.vue";
import HomeBanner from "@/components/pageComponents/home/HomeBanner.vue";
import HomeOffers from "@/components/pageComponents/home/HomeOffers.vue";
import HomeContentCard from "@/components/pageComponents/home/HomeContentCard.vue";
import {usePages} from "@/composables/usePages.js";
import {computed} from "vue";
import HomeComponent from "@/components/pageComponents/home/HomeComponent.vue";

const {getPageByName} = usePages()

const pageContent = computed(() => {
  return getPageByName('home').value?.content
})

console.log('pageContent', pageContent.value)

</script>

<template>
  <div class="page home">
    <PageTemplate max-height="">
      <template v-slot:content>
        <HomeComponent
            v-for="item in pageContent"
            :component-data="item"
        />
      </template>
    </PageTemplate>
  </div>
</template>

<style scoped>


</style>