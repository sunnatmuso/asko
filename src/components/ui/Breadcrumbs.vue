<template>
  <div class="breadcrumbs">
    <div class="container">
      <div class="breadcrumbs__wrap">
        <div class="breadcrumbs__home">
          <SvgIcon icon-class="homeIcons" class-name="p" wh="18" @click="$router.push('/')"/>
          <SvgIcon icon-class="right" wh="18"/>
        </div>
        <div class="breadcrumbs__title">
          <p class="small">{{title}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from "./SvgIcon";
export default {
  name: "Breadcrumbs",
  components: {SvgIcon},
  props: {
    title: String
  }
}
</script>
