<template>
  <ModalBase :title="$t('modal.requestAccepted')" @close="$emit('closeSubmitted')" :close="close">
    <div class="modalSubmitted__items">
      <div class="modalSubmitted__img">
        <img src="../../assets/image/submitted.webp" alt="submitted images">
      </div>
      <div class="modalSubmitted__text">
        <p class="body_2">{{$t('modal.getRequest')}}</p>
        <p class="cardText">{{$t('modal.text')}}</p>
      </div>
      <div class="modalSubmitted__close">
        <Btn type="blue" @click="close = false" text-font="cardText">{{$t('close')}}</Btn>
      </div>
    </div>
  </ModalBase>
</template>

<script>
import ModalBase from "./modalBase";
import Btn from "../ui/Btn";
import useCheckout from "../../hooks/checkout/useCheckout";
import {useScrollLock} from "../../hooks/ui/useScrollLock";
import {watch} from "vue";
export default {
  name: "modalSubmitted",
  components: {Btn, ModalBase},
  props: {
    closeSubmitted: {
      type: Boolean,
      default: false
    }
  },
  setup(){
    const {close} = useCheckout()
    watch(close, () => useScrollLock(close.value))
    return {close}
  }
}
</script>
