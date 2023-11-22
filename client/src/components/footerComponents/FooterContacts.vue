<script setup>
import UniversalField from "@/components/fields/UniversalField.vue";
import {useFooterContacts} from "@/composables/useFooterContacts.js";

const {contacts} = useFooterContacts()

</script>

<template>
  <div class="footer-contacts">
    <div
        class="footer-contacts__title"
    >
      Contact Us
    </div>
    <ul
        class="footer-contacts__list"
    >
      <li
          v-for="(contactData, key) in contacts"
          :id="contactData?._id || key"
          class="footer-contacts__list-item contact"
      >
        <UniversalField
            :field-data="contactData"
        />
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
$fontColor: map-get($colors, greenishBlue);

.footer-contacts__title {
  color: map-get($colors, greenishBlue);
  margin-bottom: 32px;
  text-align: right;
  font-family: $mainFont;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.footer-contacts__list-item {
  margin-bottom: 15px;
}
</style>