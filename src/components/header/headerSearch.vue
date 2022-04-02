<template>
  <div class="header__search">
    <input type="text" :placeholder="$t('home.search')" @change="getValue" @focus="$router.push('/searchResult')">
    <SvgIcon v-if="!icon" icon-class="search" wh="18" class-name="search"/>
    <SvgIcon v-else icon-class="close" wh="18" class-name="search close" @click="$emit('close')"/>
  </div>
</template>

<script>
import SvgIcon from "../ui/SvgIcon";
import {useProductSearch} from "../../hooks/product/useProduct";
import {onMounted} from "vue";

export default {
  name: "headerSearch",
  components: {SvgIcon},
  props: {
    icon: {
      type: Boolean,
      default: false
    }
  },
  setup(){
    const {getProducts} = useProductSearch()
    onMounted(() => getProducts(''))
    const getValue = (e) => {
       getProducts(e.target.value)
    }
    return {getValue}
  }
}
</script>
