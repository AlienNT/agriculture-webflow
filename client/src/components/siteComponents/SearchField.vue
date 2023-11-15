<script setup>

</script>

<template>
  <label class="search-label">
    <input
        type="search"
        class="search-input"
    >
  </label>
</template>

<style scoped lang="scss">
@import "../../assets/css/variables";

.search-label,
.search-input {
  display: flex;
}

.search-label {
  width: 100%;
  max-width: 376px;
  height: 66px;
  border-radius: 36px;
  overflow: hidden;
  background: #FAFAFA;
  cursor: pointer;
  padding: 5px;

  &:after {
    content: '';
    background: url("../../../public/images/icon/Search Icon.svg") no-repeat center / contain;
    width: 56px;
    height: 56px;
    display: block;
  }
}

.search-input {
  background: none;
  padding: 0 15px;
  flex: 1 1 auto;

}
</style>