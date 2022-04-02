<template>
  <div :class="name">
    <img v-if="image" :src="image" alt="img">
  </div>
</template>

<script>
import simpleParallax from "simple-parallax-js";
import { useEventListener } from '@vueuse/core'
export default {
  name: "Parallax",
  props: {
    name: {
      type: String,
      default: 'parallaxRight'
    },
    image: String
  },
  setup(props){
    let image = document.getElementsByClassName(`${props.name}`);
    useEventListener(document, 'scroll', () => {
      new simpleParallax(image, {
        overflow: true,
      });
    })
  }
}
</script>
