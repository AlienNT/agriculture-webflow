<script setup>

import VButton from "@/components/siteComponents/VButton.vue";
import {routeTo} from "@/helpers/buttonHelper.js";
import VTitle from "@/components/siteComponents/VTitle.vue";
import VDescription from "@/components/siteComponents/VDescription.vue";
</script>

<template>
  <div class="page not-found-page">
    <div class="container">
      <div class="not-found-page__content">
        <div class="error-code"/>
        <VTitle
            class="error-title"
            value="Page not found"
        />
        <VDescription
            class="error-description"
            value="The page you are looking for doesn't exist or has been moved"
        />
        <VButton
            label="Go to Homepage"
            @on-click="routeTo('/')"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.not-found-page {
  background: url("../../public/images/icon/404.png") no-repeat center right / cover;
  display: flex;
  align-items: center;
  min-height: $viewportHeight;
}

.container {
  display: flex;
  justify-content: flex-end;
}

.page {
  display: flex;
  align-items: center;
  justify-content: center;
}

.error-code {
  background: url("../../public/images/icon/404-code.png") no-repeat center / contain;
  max-width: 502px;
  width: 0;
  padding-left: 100%;
  padding-top: 60%;
}

.error-title {
  font-size: 70px;
  text-align: center;
  margin-bottom: 10px;
}

.error-description {
  font-size: 18px;
  line-height: 165.4%; /* 29.772px */
  margin-bottom: 30px;
}

</style>