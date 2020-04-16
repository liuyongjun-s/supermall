<template>
  <div id="stro">
      <top-view/>
      <news-view/>
  </div>
</template>

<script>


  import TopView  from './childComps/TopView'
  import NewsView  from './childComps/NewsView'



  export default {
    name: "Strouble",
    components: {
        TopView,
        NewsView
    }
  }
</script>

<style scoped>

</style>
