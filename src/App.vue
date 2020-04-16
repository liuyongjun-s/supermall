<template>
  <div id="app">
    <!-- <nav-bar class="home-nav"><div slot="center"> </div></nav-bar> -->
    <main-nav-bar><div slot="left"> </div></main-nav-bar>
    <!-- <nav-bar class="home-nav"><div slot="center">
     
      
    
    
    </div></nav-bar> -->
    <router-view/>
    <main-tab-bar/>
  </div>
</template>

<script>
  import MainNavBar from 'components/content/mainNavbar/MainNavBar'
  import MainTabBar from 'components/content/mainTabbar/MainTabBar'
  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'

  export default {
    name: 'app',
    components: {
      MainNavBar,
      MainTabBar,
      NavBar
    }
  }

  
</script>

<style>
  @import "assets/css/base.css";

  *{
    margin:0;
    padding: 0;
   
  }
  
</style>
