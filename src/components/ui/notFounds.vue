<template>
  <div class="notFounds" :class="type">
    <div class="notFounds__img">
      <img :src="image" alt="images">
    </div>
    <p class="body_2">{{title}}</p>
  </div>
</template>

<script>
export default {
  name: "notFounds",
  props: {
    image: String,
    type: String,
    title: String
  }
}
</script>
