<template>
  <div class="topBanner" :class="type">
    <div class="container">
      <h2>{{h2}}</h2>
      <p class="body">{{body}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "topBanner",
  props: {
    h2: String,
    body: String,
    type: String
  }
}
</script>
