<template>
  <div class="chat">
    <iframe :src="`https://jivo.chat/J3y4ldsKqz`" width="100%" height="100vh" frameborder="0">
    </iframe>
  </div>
</template>

<script>
export default {
  name: "Chat"
}
</script>

<style lang="scss">
.chat{
  height: calc(100vh  - 58px);
  background-color: #fff;
  iframe{
    width: 100%;
    height: 97%;
  }
}
</style>

