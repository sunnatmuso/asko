<template>
  <div class="images" :class="type">
    <img :src="image" alt="images">
  </div>
</template>

<script>
export default {
  name: "Images",
  props: {
    image: String,
    type: String
  }
}
</script>
