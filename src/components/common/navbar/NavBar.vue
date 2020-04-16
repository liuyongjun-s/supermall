<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"><img src="~assets/img/common/logo.jpg"></slot></div> 
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  .nav-bar {
    width: 100%;
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100,100,100,.1);
  }

  .left, .right {
    width: 60px;
  }
  .left{
    margin-left: 60px;
  }
  .left img {
    left: 60px;
    width: 260px;
    height: 43px;
  }

  .center {
    flex: 1;
  }
</style>
