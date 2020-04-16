<template>
  <div id="home">
    
    <!-- <home-swiper class="banner" :banners="banners"/> -->
    
    <top-view/>

    <recommend-view />
    <feature-view/>
    <trouble-view/>
    <advantage-view/>
    <step-view/>
    <policy-view/>
    <zixun-view/>

    
  </div>
</template>

<script>
  
  // import HomeSwiper from './childComps/HomeSwiper'

  import TopView from './childComps/TopView'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'
  import TroubleView from './childComps/TroubleView'
  import AdvantageView from './childComps/AdvantageView'
  import StepView from './childComps/StepView'
  import PolicyView from './childComps/PolicyView'
  import ZixunView from './childComps/ZixunView'

  import NavBar from 'components/common/navbar/NavBar';
  import TabControl from 'components/content/tabControl/TabControl'
 

  export default {
    name: "Home",
    components: {
      
      // HomeSwiper,
      TopView,
      RecommendView,
      FeatureView,
      TroubleView,
      AdvantageView,
      PolicyView,
      StepView,
      NavBar,
      TabControl,
      ZixunView
      
    }
  
  }
</script>

<style scoped>
  #home {
    padding-top: 0px;
    margin: 0;
    padding: 0;
    width: 100%;
  }

  .home-nav {
    background-color: #fff;
    color: #fff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .banner {
    width: 100%;
  }

  .tab-control {
    position: sticky;
    top: 44px;
  }

  .center a{
    font-size: 5px;
    margin: 2px;
  }
</style>
