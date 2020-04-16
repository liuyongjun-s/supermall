<template>
  <tab-bar>
    
    <tab-bar-item path="/home">
      <!-- <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt=""> -->
      <div class="nav" slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/register">
      <!-- <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt=""> -->
      <div class="nav" slot="item-text">公司注册</div>
    </tab-bar-item>
    <tab-bar-item path="/account">
      <!-- <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt=""> -->
      <div class="nav" slot="item-text">会计服务</div>
    </tab-bar-item>
    <tab-bar-item path="/trade">
      <!-- <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt=""> -->
      <div class="nav" slot="item-text">商标注册</div>
    </tab-bar-item>
    <tab-bar-item path="/domain">
      <!-- <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt=""> -->
      <div class="nav" slot="item-text">域名注册</div>
    </tab-bar-item>
    <tab-bar-item path="/about">
      <!-- <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt=""> -->
      <div class="nav" slot="item-text">联系我们</div>
    </tab-bar-item>
    
  </tab-bar>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>
  
<style scoped>
  /* tab-bar-item {
    margin-top: 400px;
    padding-top: 1000px;
  } */

  .nav {
    margin-top: 40px;
    font-weight: bold;
    border-right: 2px solid rgb(181, 181, 171);
  }


</style>
