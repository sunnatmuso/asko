<template>
    <NotFounds type="errorPage" :image="require('./assets/image/notFound/500.webp')" :title="$t('errorPage')"/>
</template>

<script>
import NotFounds from "./components/ui/notFounds";
export default {
  name: 'ErrorPage',
  components: {NotFounds}
}
</script>
