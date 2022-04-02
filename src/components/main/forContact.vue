<template>
  <div class="contact__content">
    <div class="container">
      <div class="contact__content-wrap">
        <div class="contact__content-maps">
          <iframe allowfullscreen :src="url"></iframe>
        </div>
        <div class="contact__content-info">
          <p class="paragraph">{{$t('home.contact')}}</p>
          <div class="contact__content-items">
            <div class="contact__content-item">
              <div class="icon"><SvgIcon icon-class="phones" wh="30"/></div>
              <div class="title">
                <p class="markets"><a :href="`tel:${contacts.phone1}`">{{contacts.phone1}}</a></p>
                <p class="markets"><a :href="`tel:${contacts.phone2}`">{{contacts.phone2}}</a></p>
              </div>
            </div>
            <div class="contact__content-item">
              <div class="icon"><SvgIcon icon-class="mail" wh="30"/></div>
              <div class="title">
                <p class="markets"><a :href="`mailto:${contacts.email1}`">{{contacts.mail1}}</a></p>
<!--                <p class="markets"><a :href="`mailto:${contacts.mail2}`">{{contacts.mail2}}</a></p>-->
              </div>
            </div>
            <div class="contact__content-item">
              <div class="icon"><SvgIcon icon-class="address" wh="30"/></div>
              <div class="title">
                <p class="markets"><a :href="''" @click="seeFromMap(contacts.address.map)">{{ contacts.address[`address_${$i18n.locale}`] }}</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {computed, ref} from "vue";
import SvgIcon from "../ui/SvgIcon";
import {contacts} from "../../hooks/about/useAbout";

export default {
  name: "forContact",
  components: {SvgIcon},
  setup(){
    const search = ref('Toshkent shahar, Sergeli tumani Sergeli moshina bozor 6/2.2- do’kon.')
    const url = computed(() => `https://www.google.com/maps/embed/v1/search?key=AIzaSyBB3MrUX62BmjlOEu1f7OlrtpMFZ3GEtqU&q=${search.value}`)
    const seeFromMap = (searchMap) => {
      search.value = searchMap
    }
    return {url, contacts, seeFromMap }
  }
}
</script>
