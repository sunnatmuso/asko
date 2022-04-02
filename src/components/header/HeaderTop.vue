<template>
  <div class="header__top">
    <div class="container">
      <div class="headerTop">
        <VSelect :value="data.value" :data="data.language" @changeValue="selectLocaleChange"/>
        <div class="headerTop__right">
          <HeaderSearch/>
          <Social/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VSelect from "../ui/VSelect";
import { useI18n } from "vue-i18n";
import { select } from "../../hooks/ui/useSelect";
import Social from "../ui/social";
import HeaderSearch from "./headerSearch";
export default {
  name: 'HeaderTop',
  components: {HeaderSearch, Social, VSelect},
  setup() {
    const {data} = select()
    const {locale} = useI18n()
    const selectLocaleChange = (option) => {
      localStorage.setItem("language", option.value);
      localStorage.setItem("text", option.text);
      data.value = option.text
      locale.value = option.value
    }
    return {selectLocaleChange, data}
  }
}
</script>
