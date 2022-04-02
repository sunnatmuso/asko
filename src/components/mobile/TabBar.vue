<template>
  <div class="tabBar">
    <div class="tabBar__content">
      <router-link to="/">
        <SvgIcon wh="24" icon-class="main"/>
        <p class="small">{{$t('main')}}</p>
      </router-link>
      <router-link :to="{path: '/shina', query: {product_type_uz: 'Shinalar'}}">
        <SvgIcon wh="24" icon-class="shina"/>
        <p class="small">{{$t('shina')}}</p>
      </router-link>
      <router-link :to="{path: '/diska', query: {product_type_uz: 'Disklar'}}">
        <SvgIcon wh="24" icon-class="diska"/>
        <p class="small">{{$t('diska')}}</p>
      </router-link>
      <router-link :to="{path: '/akkumlyator', query: {product_type_uz: 'Akkamulyator'}}">
        <SvgIcon wh="24" icon-class="akkTor"/>
        <p class="small">{{$t('akkTor')}}</p>
      </router-link>
      <router-link to="/chat" class="chats">
        <SvgIcon wh="24" icon-class="chat"/>
        <p class="small">{{$t('chat')}}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import SvgIcon from "../ui/SvgIcon";
export default {
  name: "TabBar",
  components: {SvgIcon}
}
</script>
