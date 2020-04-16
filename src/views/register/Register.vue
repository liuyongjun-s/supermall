<template>
  <div  id="Reg">
  

  <topimg-view/>
  <zhuce-view/>
  <menu-view/>
  <zhug-view/>
  <qing-view/>
  <aftdo-view/>
  <notbad-view/>

  </div>
</template>

<script>

  import TopimgView from './childComps/TopimgView'
  import ZhuceView from './childComps/ZhuceView'
  import MenuView from './childComps/MenuView'
  import ZhugView from './childComps/ZhugView'
  import QingView from './childComps/QingView'
  import AftdoView from './childComps/AftdoView'
  import NotbadView from './childComps/NotbadView'



  export default {
    name: "Register",
    components: {
      TopimgView,
      ZhuceView,
      MenuView,
      ZhugView,
      QingView,
      AftdoView,
      NotbadView
    }
  }

  
</script>

<style scoped>

</style>
