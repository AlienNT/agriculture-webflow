<script setup>
import VTitle from "@/components/siteComponents/VTitle.vue";
import VDescription from "@/components/siteComponents/VDescription.vue";
import VButton from "@/components/siteComponents/VButton.vue";
import {buttonStyle, routeTo} from "@/helpers/buttonHelper.js";
import VImage from "@/components/siteComponents/VImage.vue";
import DateRound from "@/components/siteComponents/DateRound.vue";

defineProps({
  content: {
    type: Object
  }
})
</script>

<template>
  <div class="wrapper">
    <div class="blog-card">
      <div class="blog--card__image">
        <VImage
            :src="content?.image"
            object-fit="cover"
            background-mode
        />
      </div>
      <div class="blog-card__content">
        <div class="date">
          <DateRound
              :date="content?.date"
          />
        </div>
        <div class="content">
          <div class="content-wrapper">
            <VTitle
                :value="content?.author"
                class="blog-card__author"
            />
            <VTitle
                :value="content?.title"
                class="blog-card__title"
            />
            <VDescription
                :value="content?.description"
                class="blog-card__description"
            />
            <VButton
                :label="content?.buttonLabel"
                :style-type="buttonStyle.YELLOW"
                class="blog-card__button"
                @on-click="routeTo('/blog/' + content?._id)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$contentTranslate: 66px;
.wrapper {
  padding-bottom: $contentTranslate;
  display: flex;
  flex: 1;
}

.blog-card {
  flex: 1;
  position: relative;
}

.blog--card__image,
.blog-card__content {
  border-radius: 30px;
}

.blog--card__image {
  overflow: hidden;
  background: #C4C4C4;
  width: 100%;
  height: 100%;
  position: absolute;
}

.blog-card {
  display: flex;
}

.blog-card__content {
  padding: 0 30px;
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  transform: translateY($contentTranslate);
  padding: 46px 30px 60px 30px;
  border-radius: 30px;
  background: #FFF;
  box-shadow: 0 20px 35px 0 rgba(167, 167, 167, 0.25);
}

.content-wrapper {
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
}

.date {
  margin-bottom: 137px;
  padding-top: 46px;
}

.blog-card__author {
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 15px;
  display: flex;
  gap: 8px;

  &:before {
    content: '';
    display: block;
    background: url("../../../public/images/icon/author_svg.svg") no-repeat center / contain;
    height: 20px;
    width: 18px;
  }
}

.blog-card__title {
  font-size: 25px;
  margin-bottom: 10px;
}

.blog-card__description {
  margin-bottom: 15px;
}

.blog-card__button {
  align-self: flex-start;
  width: fit-content;
  margin-top: auto;
  margin-left: 0;
  margin-right: auto;
}
</style>