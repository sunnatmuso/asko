<template>
  <transition name="fade">
    <div class="modalBase" v-if="close">
      <div class="modalBase__close" @click="$emit('close')"></div>
      <div class="modalBase__wrap">
        <div class="modalBase__content">
          <div class="modalBase__top">
            <h4 class="buttonText" v-if="title">{{ title }}</h4>
          </div>
          <div class="modalBase__down">
            <slot/>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "modalBase",
  props: {
    title: String,
    close: {
      type: Boolean,
      default: false
    }
  },
}
</script>
