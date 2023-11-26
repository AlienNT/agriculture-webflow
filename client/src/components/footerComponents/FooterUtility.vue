<script setup>
import VTitle from "@/components/siteComponents/VTitle.vue";
import {useFooterUtility} from "@/composables/useFooterUtility.js";
import FooterUtilityItem from "@/components/footerComponents/FooterUtilityItem.vue";

const {utilityPagesList} = useFooterUtility()
</script>

<template>
  <div class="footer-utility">
    <VTitle
        value="Utility Pages"
        class="footer-utility__title"
    />
    <ul class="footer-utility__list">
      <li
          v-for="(linkData, key) in utilityPagesList"
          :key="linkData?._id || key"
          class="footer-utility__li"
      >
        <FooterUtilityItem
            :item-data="linkData"
        />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.footer-utility__title {
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 24px;
}
</style>