<template>
  <div class="qing">
    <h1>只要简单资料，轻松完成公司注册</h1>
    <ul>
        <li>
            <div class="img">
                <img src="~assets/img/page2/siming.jpg" alt="">
            </div>
            
            <h4>公司名称3-4个<br/>重名时备用</h4>
        </li>
        <li>
            <div class="img">
                <img src="~assets/img/page2/bili.jpg" alt="">
            </div>
            <h4>确定注册资金数额<br/>法人/股东，及投资比例</h4>
        </li>
        <li>
            <div class="img">
                <img src="~assets/img/page2/fanwei.jpg" alt="">
            </div>
            <h4>公司营业经营范围</h4>
        </li>
        <li>
            <div class="img">
                <img src="~assets/img/page2/shenz.jpg" alt="">
            </div>
            <h4>法人/股东身份证</h4>
        </li>
    </ul>
    <div class="boc"></div>
        

        
     
  </div>
</template>

<script>


  export default {
    name: "QingView",
    
  }
</script>

<style scoped>
.qing {
    position: relative;
    height: 500px;
    min-width: 1280px;
}
.boc {
    /* position: absolute; */
    margin-top: 240px;
    background-color: rgb(227, 216, 198);
    height: 40%;
    bottom: 0px;
}
 h1 {
     font-weight: normal;
     color: black;
     text-align: center;
     line-height: 60px;
     margin-bottom: 30px;
 }
 ul {
     position: absolute;
     left: 7%;
     
 }
 li {
     float: left;
     list-style-type: none;
     height: 300px;
     width: 215px;
     text-align: center;
     margin: 25px;
     border: 2px solid #eee;
 }
 .img {
     height: 60%;
 }
 .img>img {
     height: 100px;
     margin: 18%;
 }
 h4 {
     font-weight: normal;
     padding-top: 15%;
     height: 40%;
     width: 100%;
     
     background-color: rgb(236, 236, 236);
 }
 
 
 
 
 
</style>
