<script setup>
import VCursive from "@/components/siteComponents/VCursive.vue";
import VTitle from "@/components/siteComponents/VTitle.vue";
import PageContentList from "@/components/pageComponents/PageContentList.vue";
import {computed} from "vue";

const props = defineProps({
  content: {
    type: Object
  }
})

const background = computed(() => {
  return props.content?.background
})

const style = computed(() => {
  return background.value ? `background-image: url(${background.value})` : ''
})
</script>

<template>
  <div
      class="home-who-we-are"
  >
    <div
        class="bg-image"
        :style="style"
    />
    <div class="container">
      <div class="row content-row">
        <div class="col">
          <div class="content">
            <div class="content-inner">
              <VCursive
                  :value="content?.cursive"
              />
              <VTitle
                  :value="content?.title"
                  class="title"
              />
              <PageContentList
                  :list-data="content?.list"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-who-we-are {
  min-height: $viewportHeight;
  display: flex;
  position: relative;
}

.bg-image {
  background-position: left center;
  background-repeat: no-repeat;
  background-size: cover;
  flex: 1 1 50%;
  width: 50%;
  height: 100%;
  position: absolute;
}

.content-row {
  flex: 1;
}

.container {
  padding-top: 100px;
  padding-bottom: 100px;
  flex: 0 50%;
  margin-left: auto;
  margin-right: unset;
  align-items: center;
  display: flex;
}

.content {
  background: white;
  position: relative;
  border-radius: 30px;
  max-width: 600px;

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #ffffff;
    border-radius: 30px;
    transform: translateX(-90px);

  }
}

.content-inner {
  position: relative;
  padding: 90px 0;
}

.title {
  margin-bottom: 35px;
  font-size: 50px;
  font-weight: 800;
}

.page-content-list {
  gap: 35px;
}

@media all and (max-width: 900px) {
  .container {
    flex: 100%;
  }
  .content {
    transform: translateX(0);
    margin: auto;

    &:before {
      display: none;
    }
  }
  .content-inner {
    padding: 60px 40px;
  }
  .bg-image {
    flex: 1 1 100%;
    width: 100%;
  }
}
</style>