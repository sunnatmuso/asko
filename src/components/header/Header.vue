<template>
  <div class="header">
    <HeaderTop/>
    <HeaderDown/>
  </div>
</template>

<script>
import HeaderTop from './HeaderTop'
import HeaderDown
  from "./headerDown";
export default {
  name: 'Header',
  components: {HeaderDown, HeaderTop }
}
</script>
