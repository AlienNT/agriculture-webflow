<script setup>

import FooterCopyright from "@/components/footerComponents/FooterCopyright.vue";
import FooterContacts from "@/components/footerComponents/FooterContacts.vue";
import VLogo from "@/components/siteComponents/VLogo.vue";
import FooterSocial from "@/components/footerComponents/FooterSocial.vue";
import FooterUtility from "@/components/footerComponents/FooterUtility.vue";
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="row footer-row">
        <div class="col footer-col">
          <FooterContacts/>
        </div>
        <div class="col footer-col">
          <div class="footer-logo">
            <VLogo/>
          </div>
          <div class="footer-description">
            Simply dummy text of the printing and typesetting industry.
            Lorem Ipsum simply dummy text of the printing
          </div>
          <div class="footer-social">
            <FooterSocial/>
          </div>
        </div>
        <div class="col footer-col">
          <FooterUtility/>
        </div>
      </div>
      <div class="row copyright-row">
        <div class="col copyright-col">
          <FooterCopyright/>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
$fontColor: map-get($colors, grayishBlue);
$lineColor: map-get($colors, abdelKerimsBeards);
$lineStyle: 1px solid $lineColor;

.footer {
  padding-top: 54px;
}

.copyright-row {
  position: relative;
  padding-top: 17px;
  padding-bottom: 17px;
  margin-top: 102px;
  border-top: $lineStyle;
}

.footer-col {
  flex: 1 1 calc(100% / 3);
  border-right: $lineStyle;
  padding-left: 50px;
  padding-right: 50px;

  &:last-child {
    border-right: none;
  }

  &:nth-of-type(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}

.footer-logo {
  margin-bottom: 26px;
}

.footer-description {
  color: $fontColor;
  text-align: center;
  font-family: $secondFont;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 165.4%; /* 29.772px */
  margin-bottom: 50px;
}
</style>