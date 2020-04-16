<template>
  <div id="tab-bar">
    <div class="left"><img src="~assets/img/page1/logo.jpg"></div>
    <div class="nav"><slot></slot></div>
    <!-- <div class="about"><h6>上海得森企业管理有限公司<br/>公司注册，代理记账，商标注册，网站建设一站式创业服务平台</h6></div> -->

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
    /* background-color: #f6f6f6; */
    background-color:#fff;
    /* position: fixed; */
    left: 0;
    right: 0;
    bottom: 0;
    height: 65px;
    position: relative;
    /* width: 100%; */

    min-width: 1180px;
    box-shadow: 0 -1px 1px rgba(100,100,100,.2);
  }

  /* h5 {
    line-height: 60px;
    
    display: block;
    margin-left: 30%;
  } */
  /* .link {
    width: 100%;
    background-color: #fff;
  } */
  .nav {
    position: absolute;
    /* float: right; */
    display: flex;
    /* text-align: center; */
    width: 40%;
    left: 50%;
    top: 25px;
  }
  /* .about {
    margin-top: 30px;
    margin-left: 30%;
  } */
  .left>img {
    height: 50px;
    width: 80%;
    margin-left: 30%;
    margin-top: 10px;
  }
</style>
