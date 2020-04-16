<template>
  <div class="menu">
    <h2>推荐套餐</h2>
        <div class="center">
            <ul class="men">
                <li><img src="~assets/img/page2/kuaizhu.jpg" alt=""></li>
                <li><img src="~assets/img/page2/jizhang.jpg" alt=""></li>
                <li><img src="~assets/img/page2/zhanjian.jpg" alt=""></li>
                <li><img src="~assets/img/page2/qiyou.jpg" alt=""></li>
            </ul>

            <ul class="add">
              <li><img src="~assets/img/page2/add.jpg" alt=""></li>
              <li><img src="~assets/img/page2/add.jpg" alt=""></li>
              <li><img src="~assets/img/page2/add.jpg" alt=""></li>
              <li><img src="~assets/img/page2/rtj.jpg" alt=""></li>
            </ul>

            <h6>创业特惠套餐推荐<br/>上海特惠3888元起</h6>
            <!-- <div  class="zaxan">在线咨询</div> -->
            <a class="zaxan"  target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=592333407&site=qq&menu=yes">在线咨询</a>

        </div>
     
  </div>
</template>

<script>


  export default {
    name: "MenuView",
    
  }
</script>

<style scoped>
.menu {
    position: relative;
    height: 300px;
    min-width: 1080px;
}
 h2 {
     font-weight: normal;
     color: black;
     text-align: center;
     line-height: 60px;
     /* margin-bottom: 30px; */
 }
 .center {
     height: 300px;
     width: 800px;
     margin: 0 auto;
     /* box-shadow: 5px 5px 5px 5px #888; */
     /* background-color: red; */
     position: relative;
 }
 .men {
   position: absolute;
   top: 15%;
   /* left: 10%; */
 }
 .add {
   position: absolute;
   top: 16%;
   left: 9%;

 }
 .men li {
   float: left;
   margin:20px;
   list-style-type: none;
 }
 .add li {
   float: left;
   margin: 43px;
   list-style-type: none;
 }
 .men img {
   height: 100px;
 }
 .add img {
   height: 50px;
 }
 h6 {
   position: absolute;
   color: rgb(192, 150, 150);
   line-height: 25px;
   left: 77%;
   top: 25%;
 }
 .zaxan {
   position: absolute;
   left: 75%;
   top: 45%;
   background-color: rgb(187, 20, 27);
   color: #fff;
   height: 35px;
   line-height: 35px;
   text-align: center;
   width: 125px;
 }
 
 
 
 
</style>
