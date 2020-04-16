<template>
  <div id="main">
      <top-view/>
      <shz-view/>
      <hchu-view/>
      <zstp-view/>
      <jiehuo-view/>
      <fuwu-view/>
  </div>
</template>

<script>
  import TopView from './childComps/TopView'
  import ShzView from './childComps/ShzView'
  import HchuView from './childComps/HchuView'
  import ZstpView from './childComps/ZstpView'
  import JiehuoView from './childComps/JiehuoView'
  import FuwuView from './childComps/FuwuView'


  export default {
    name: "Trade",
    components: {
      TopView,
      ShzView,
      HchuView,
      ZstpView,
      JiehuoView,
      FuwuView
    }

  }
</script>

<style scoped>

</style>
