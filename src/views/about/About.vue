<template>
  <div  id="about">
    <top-view/>
    <intro-view/>
    <link-view/>
  </div>
</template>

<script>

  import  TopView  from './childComps/TopView'
  import  IntroView  from './childComps/IntroView'
  import  LinkView  from './childComps/LinkView'



  export default {
    name: "About",
    components: {
      TopView,
      IntroView,
      LinkView
    }
  }
</script>

<style scoped>

  .about {
    width: 100%;
    margin: 0;
    padding: 0;
  }
</style>
