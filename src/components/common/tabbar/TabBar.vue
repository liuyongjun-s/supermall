<template>
  <div id="tab-bar">
    <div class="link"><h5>友情链接：</h5></div>
    <div class="nav"><slot></slot></div>
    <div class="about"><h6>上海得森企业管理有限公司<br/>公司注册，代理记账，商标注册，网站建设一站式创业服务平台</h6></div>

  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  #tab-bar {
    /* display: flex; */
    background-color: #f6f6f6;

    /* position: fixed; */
    left: 0;
    right: 0;
    bottom: 0;
    height: 300px;
    position: relative;
    width: 100%;


    box-shadow: 0 -1px 1px rgba(100,100,100,.2);
  }

  h5 {
    line-height: 60px;
    
    display: block;
    margin-left: 30%;
  }
  .link {
    width: 100%;
    background-color: #fff;
  }
  .nav {
    
    display: flex;
    text-align: center;
    width: 50%;
    margin-left: 25%;
  }
  .about {
    margin-top: 30px;
    margin-left: 30%;
  }
</style>
