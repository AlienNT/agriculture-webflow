<script setup>

import VTitle from "@/components/siteComponents/VTitle.vue";
import VButton from "@/components/siteComponents/VButton.vue";
import {buttonStyle} from "@/helpers/buttonHelper.js";
import {computed, reactive} from "vue";

const state = reactive({
  formData: {
    email: ''
  }
})

const email = computed(() => {
  return state.formData.email
})

function setEmail(val) {
  state.formData.email = val
}

function onSubmit() {
  console.log('form data', state.formData)
}
</script>

<template>
  <div class="subscribe-form">
    <div class="container">
      <form
          class="col form"
          @submit.prevent="onSubmit"
      >
        <div class="row form-inner">
          <div class="col">
            <VTitle
                value="Subscribe to our Newsletter"
            />
          </div>
          <div class="col field-col">
            <label>
              <input
                  type="email"
                  placeholder="Your Email Address"
                  :value="email"
                  @change="e => setEmail(e.target.value)"
              >
            </label>
            <VButton
                :style-type="buttonStyle.PAGINATE"
                type="submit"
                label="Subscribe"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.subscribe-form {
  padding-top: 100px;
  padding-bottom: 100px;
}

.form-inner {
  border-radius: 30px;
  background: url("../../public/images/pages_design/img/bg_subscribe.jpg") no-repeat center / cover, #37B5DE;
  padding: 105px 70px;

  .title {
    color: white;
    max-width: 360px;
  }
}

.row {
  align-items: center;
  gap: 20px;
}

.field-col {
  display: flex;
  gap: 6px;
  height: 80px;
}

label {
  display: flex;
  flex: 1;
}

input[type=email] {
  border-radius: 16px;
  background: #FFF;
  flex: 1;
  padding: 20px;
  color: #ABABAB;
  font-family: $mainFont;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;

  &::placeholder {
    font-style: italic;
    transition: color .2s ease;
  }

  &:focus {
    &::placeholder {
      color: transparent;
    }
  }
}
</style>