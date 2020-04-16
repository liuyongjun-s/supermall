<template>
  <tab-bar>
    
    <tab-bar-item path="/home">
      
      <div class="nav" slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/register">
      
      <div class="nav" slot="item-text">公司注册</div>
    </tab-bar-item>
    <tab-bar-item path="/account">
      
      <div class="nav" slot="item-text">会计服务</div>
    </tab-bar-item>
    <tab-bar-item path="/trade">
      
      <div class="nav" slot="item-text">商标注册</div>
    </tab-bar-item>
    <tab-bar-item path="/domain">
      
      <div class="nav" slot="item-text">企业建站</div>
    </tab-bar-item>
    <tab-bar-item path="/strouble">
      
      <div class="nav" slot="item-text">常见问题</div>
    </tab-bar-item>
   
    <tab-bar-item path="/about">
      
      <div class="nav" slot="item-text">联系我们</div>
    </tab-bar-item>
    
  </tab-bar>
</template>

<script>
//   import NavBar from 'components/common/navbar/NavBar'
//   import NavBarItem from 'components/common/navbar/NavBarItem'

    import TabBar from 'components/common/tabbar copy/TabBar'
    import TabBarItem from 'components/common/tabbar copy/TabBarItem'


  export default {
    name: "MainNavBar",
    components: {
    //   NavBar,
    //   NavBarItem,
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

  /* .nav {
    margin-top: 40px;
    font-weight: bold;
    border-right: 2px solid rgb(181, 181, 171);
  } */


</style>
