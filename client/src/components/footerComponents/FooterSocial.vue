<script setup>
import {useFooterSocial} from "@/composables/useFooterSocial.js";
import FooterSocialItem from "@/components/footerComponents/FooterSocialItem.vue";

const {social} = useFooterSocial()
</script>

<template>
  <ul
      class="footer-social__list"
  >
    <li
        v-for="(socialItem, key) in social"
        class="footer-social__li"
        :key="socialItem._id || key"
    >
      <FooterSocialItem
          :social-item-data="socialItem"
      />
    </li>
  </ul>
</template>

<style scoped>
.footer-social__list {
  display: flex;
  gap: 15px;
}
</style>