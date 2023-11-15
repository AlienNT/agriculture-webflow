<script setup>

</script>

<template>
  <div class="page not-found-page">
    <div class="container">
      <div class="not-found-page__content">
        <div class="error-code"/>
        <div class="error-title">
          Page not found
        </div>
        <div class="error-description">
          The page you are looking for doesn't exist or has been moved
        </div>
        <router-link
            class="error-button"
            to="/"
        >
          Go to Homepage
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.not-found-page {
  background: url("../../public/images/icon/404.png") no-repeat center left / cover;
  display: flex;
  align-items: center;
}

.container {
  display: flex;
  justify-content: flex-end;
  max-width: 1200px;
}

.page {
  min-height: 100%;
}

.error-code {
  background: url("../../public/images/icon/404-code.png") no-repeat center / contain;
  max-width: 502px;
  width: 0;
  padding-left: 100%;
  padding-top: 60%;
}

.error-title {
  color: map-get($colors, greenishBlue);
  font-family: $mainFont;
  font-size: 70px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
}

.error-description {
  color: map-get($colors, grayishBlue);;
  font-family: $secondFont;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 165.4%; /* 29.772px */
  margin-bottom: 30px;
}

.error-button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 16px;
  background: map-get($colors, greenishBlue);;
  color: #FFFFFF;
  flex-wrap: nowrap;
  height: 80px;
  max-width: 280px;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  cursor: pointer;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

  &:after {
    content: '';
    display: inline-block;
    width: 19px;
    height: 19px;
    background: url("../../public/images/icon/Aerrow.svg") no-repeat center / contain;
  }
}

.not-found-page__content {

}
</style>