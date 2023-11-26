<template>
  <div class="template">
    <div class="container template__container">
      <div class="row template__title-row">
        <div class="col template__col">
          <slot name="cursive"/>
          <slot name="title"/>
        </div>
        <div class="col template__col">
          <slot name="button"/>
        </div>
      </div>
      <slot name="content"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
$verticalPadding: 170px;

.template {
  padding-top: $verticalPadding;
  padding-bottom: $verticalPadding;
}

.template__title-row {
  align-items: flex-end;
  justify-content: space-between;
  margin-bottom: 45px;
  gap: 20px;
}

.template__col {
  flex: 0 0 fit-content;

  &:first-of-type {
    max-width: 720px;
  }
}
</style>