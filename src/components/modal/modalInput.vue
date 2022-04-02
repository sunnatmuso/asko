<template>
  <ModalBase :title="$t('apply')" @close="$emit('close')" :close="close">
      <div class="modalInput__items cardText">
        <div class="modalInput__item">
          <label for="name">{{$t('modal.name')}}</label>
          <input id="name" type="text" :placeholder="$t('modal.inputName')" v-model="state.yourName">
          <small class="small" v-if="v$.yourName.$dirty && v$.yourName.required.$invalid">{{$t('modal.requiredName')}}</small>
        </div>
        <div class="modalInput__item">
          <label for="number">{{$t('modal.phoneNumber')}}</label>
          <input id="number" type="text" placeholder="+998 __-___-__-__" @focus="onFocus"  v-model="state.phoneNumber"  v-maska="`+998 (##) ###-##-##`">
          <small class="small" v-if="v$.phoneNumber.$dirty && v$.phoneNumber.required.$invalid">{{$t('modal.requiredName')}}</small>
          <small class="small" v-if="v$.phoneNumber.$dirty && v$.phoneNumber.minLength.$invalid">{{$t('modal.requiredName')}}</small>
        </div>
        <div class="modalInput__item">
          <Btn type="blue" text-font="cardText" @click="submit">{{$t('modal.send')}}</Btn>
        </div>
        <div class="modalInput__item">
          <Btn type="secondary" @click="$emit('close')" text-font="cardText">{{$t('modal.cancel')}}</Btn>
        </div>
      </div>
  </ModalBase>
</template>

<script>
import ModalBase from "./modalBase";
import Btn from "../ui/Btn";
import {useValidate} from "../../hooks/checkout/useVuelidate";
import useCheckout
  from "../../hooks/checkout/useCheckout";
export default {
  name: "modalInput",
  components: {Btn, ModalBase},
  props: {
    close: {
      type: Boolean,
      default: false
    }
  },
  setup () {
    const {v$, state} = useValidate()
    const onFocus = (event) => {
      if (!event.target.value){
        state.phoneNumber = '+998 ('
      }
    }
    const {submit} = useCheckout()
    return { v$, state, onFocus, submit };
  }
}
</script>
