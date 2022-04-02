<template>
  <div class="social" :class="type">
    <a :href="contacts.facebook"><SvgIcon wh="24" icon-class="facebook" class-name="socialIcon"/></a>
    <a :href="contacts.instagram"><SvgIcon wh="24" icon-class="instagram" class-name="socialIcon"/></a>
    <a :href="contacts.telegram"><SvgIcon wh="24" icon-class="telegram" class-name="socialIcon"/></a>
    <a :href="contacts.youtube"><SvgIcon wh="24" icon-class="youtube" class-name="socialIcon"/></a>
  </div>
</template>

<script>
import SvgIcon from "./SvgIcon";
import {contacts} from "../../hooks/about/useAbout";
export default {
  name: "social",
  components: {SvgIcon},
  props: {
    type: String
  },
  setup(){
    return {contacts}
  }
}
</script>
