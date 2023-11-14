<script setup>

import VLogo from "./siteComponents/VLogo.vue";
import HeaderNavigation from "./navigations/headerNavigation/HeaderNavigation.vue";
</script>

<template>
  <header class="header">
    <div class="container header-container">
      <div class="row header-row">
        <div class="col header-col header-col__logo">
          <VLogo/>
        </div>
        <div class="col header-col header-col__navigation">
          <HeaderNavigation/>
        </div>
        <div class="col header-col header-col__search">
          search
        </div>
        <div class="col header-col header-col__cart">
          cart
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
$headerBGColor: #FFFFFF;
.header {
  padding-top: 70px;
  padding-bottom: 70px;
  position: sticky;
  top: 0;
  z-index: 2;
  background: $headerBGColor;
}

.header-row {
  flex-wrap: wrap;
}

.header-col {
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  width: fit-content;
}

.header-col__search,
.header-col__cart {
  flex: none;
}
</style>