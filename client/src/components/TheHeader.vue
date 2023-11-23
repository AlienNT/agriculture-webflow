<script setup>

import VLogo from "./siteComponents/VLogo.vue";
import HeaderNavigation from "./headerComponents/HeaderNavigation.vue";
import SearchField from "./siteComponents/SearchField.vue";
import CartButton from "./siteComponents/CartButton.vue";
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
          <SearchField/>
        </div>
        <div class="col header-col header-col__cart">
          <CartButton/>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
$headerBGColor: #FFFFFF;
$headerPadding: 20px;
.header {
  padding-top: $headerPadding;
  padding-bottom: $headerPadding;
  position: sticky;
  top: 0;
  z-index: 2;
  background: $headerBGColor;
}

.header-container {
  max-width: 1600px;
}

.header-row {
  gap: 15px;
}

.header-col {
  display: flex;
  align-items: center;
  flex: none;
}

.header-col__navigation {
  flex: 1 1 auto;
}

.header-col__cart {
  flex: none;
}
</style>