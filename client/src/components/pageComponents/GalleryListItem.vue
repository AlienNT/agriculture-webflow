<script setup>
import VImage from "@/components/siteComponents/VImage.vue";
import VTitle from "@/components/siteComponents/VTitle.vue";

defineProps({
  content: {
    type: Object
  }
})
</script>

<template>
  <div class="gallery-list-item">
    <div class="wrapper">
      <div class="gallery-card">
        <VImage
            :src="content?.image"
            object-fit="cover"
            background-mode
        />
        <div class="gallery-card__title col">
          <div class="title-wrapper">
            <VTitle
                :value="content?.title"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.gallery-list-item {
  width: 100%;
}

.wrapper {
  position: relative;
  width: 0;
  height: 0;
  padding-top: 100%;
  padding-right: 100%;
}

.gallery-card {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

}

.title-wrapper {
  color: map-get($colors, greenishBlue);
  font-family: $mainFont;
  font-size: 25px;
  font-weight: 500;
  border-radius: 20px;
  background: #FFF;
  padding: 30px;
  max-width: 300px;
  width: 100%;
  text-align: center;
}

.gallery-card__title {
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.title {
  font-size: 25px;
}

</style>