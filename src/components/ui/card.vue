<template>
  <div class="card p" v-if="data">
    <div class="card__image" ref="image">
      <img :src="data.image[0].image" :alt="data.image[0].name">
    </div>
    <div class="card__about">
      <p class="cardText">{{data[`name_${$i18n.locale}`]}}</p>
      <Btn @click="$router.push(`/product/${data.id}`)" type="more">{{$t('readMore')}}</Btn>
    </div>
  </div>
</template>

<script>
import Btn from "./Btn";
import useImageHeight from "../../hooks/ui/useImageHeight";
import {ref} from "vue";
export default {
  name: "card",
  components: {Btn},
  props: {
    data: {}
  },
  setup(){
    const image = ref(null)
    const { height } = useImageHeight(image)
    return {height, image}
  }
}
</script>
