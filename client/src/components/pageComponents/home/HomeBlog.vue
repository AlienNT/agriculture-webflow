<script setup>

import {buttonStyle, routeTo} from "@/helpers/buttonHelper.js";
import BlogList from "@/components/pageComponents/BlogList.vue";
import VCursive from "@/components/siteComponents/VCursive.vue";
import VTitle from "@/components/siteComponents/VTitle.vue";
import VButton from "@/components/siteComponents/VButton.vue";
import PageContentTemplate from "@/components/templates/PageContentTemplate.vue";

defineProps({
  content: {
    type: Object
  }
})
</script>

<template>
  <div class="home-blog">
    <PageContentTemplate>
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
      <template v-slot:button>
        <VButton
            :style-type="buttonStyle.WHITE"
            :label="content?.buttonLabel"
            @on-click="routeTo(content?.buttonRoute)"
        />
      </template>
      <template v-slot:content>
        <BlogList
            :list-data="content?.blog?.list"
        />
      </template>
    </PageContentTemplate>
  </div>
</template>