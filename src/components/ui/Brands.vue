<template>
  <div class="brands">
    <div class="brands__image">
      <img :src="img" alt="image">
    </div>
  </div>
</template>

<script>
export default {
  name: "Brands",
  props: {
    img: String
  }
}
</script>
