<template>
  <div class="cardWrapper">
    <div class="cardWrapper__title">
      <p class="body">{{title}}</p>
      <h1>{{h1}}</h1>
    </div>
    <div class="cardWrapper__content" :class="type">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardWrapper",
  props: {
    title: String,
    h1: String,
    type: String
  }
}
</script>
