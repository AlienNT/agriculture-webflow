<script setup>

</script>

<template>
  <div class="page-content-card">
    <div class="container">
      <div class="page-content-card__wrapper">
        <slot name="content"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-content-card {
  display: flex;
  flex: 1 1 100%;
}
.container {
  display: flex;
}
.page-content-card__wrapper {
  flex: 1 1 100%;
  max-width: 702px;
}
.title {
  font-size: 50px;
}
</style>