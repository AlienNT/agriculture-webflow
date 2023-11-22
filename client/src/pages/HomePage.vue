<script setup>

import PageTemplate from "@/components/templates/PageTemplate.vue";
import {usePages} from "@/composables/usePages.js";
import {computed} from "vue";
import HomeComponent from "@/components/pageComponents/home/HomeComponent.vue";

const {pageContent} = usePages()

const content = computed(() => {
  return pageContent('home').value
})


</script>

<template>
  <div class="page home">
    <PageTemplate max-height="">
      <template v-slot:content>
        <HomeComponent
            v-for="item in content"
            :component-data="item"
        />
      </template>
    </PageTemplate>
  </div>
</template>

<style scoped>


</style>