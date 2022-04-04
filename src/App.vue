<template>
  <Loader v-if="loader" class="loaderApp" loader12="11"/>
  <Header v-if="!media.$md"/>
  <MobileHeader v-else-if="!loader && $router.currentRoute.value.path !== '/chat'"/>
  <router-view/>
  <Footer v-if="$router.currentRoute.value.path !== '/chat'"/>
  <TabBar v-if="media.$md"/>
  <ModalSubmitted/>
</template>
<script>
import Header from './components/header/Header';
import Footer from "./components/Footer/Footer";
import MobileHeader from "./components/mobile/MobileHeader";
import {useMedia} from "./hooks/ui/useMedia";
import TabBar from "./components/mobile/TabBar";
import Loader from "./components/ui/Loader";
import {loader} from "./hooks/about/useAbout";
import ModalSubmitted from "./components/modal/modalSubmitted";
export default {
  components: {Loader, TabBar, Footer, Header, MobileHeader, ModalSubmitted},
  setup(){
    const {media} = useMedia()
    return {media, loader}
  }
}
</script>
