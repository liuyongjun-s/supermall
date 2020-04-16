<template>
  <div>
    <topimg-view/>
    <kuaifu-view/>
    <tmenu-view/>
    <buchou-view/>
    <howto-view/>
    <baozh-view/>
  </div>
</template>

<script>

  import TopimgView from './childComps/TopimgView'
  import KuaifuView from './childComps/KuaifuView'
  import TmenuView from './childComps/TmenuView'
  import BuchouView from './childComps/BuchouView'
  import HowtoView from './childComps/HowtoView'
  import BaozhView from './childComps/BaozhView'

  export default {
    name: "Account",
    components: {
      TopimgView,
      KuaifuView,
      TmenuView,
      BuchouView,
      HowtoView,
      BaozhView
    }
  }
</script>

<style scoped>

</style>
