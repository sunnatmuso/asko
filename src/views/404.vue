<template>
  <div class="notFound">
    <NotFounds type="notFound" :image="require('../assets/image/notFound/404.webp')" :title="$t('notFound')"/>
  </div>
</template>

<script>
import NotFounds from "../components/ui/notFounds";
export default {
  name: "404",
  components: {NotFounds}
}
</script>
