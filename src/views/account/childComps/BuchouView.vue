<template>
  <div class="qing">
    <h1>选择一站式，报税记账不用愁</h1>
    <ul>
        <li>
            <div class="img">
                <img src="~assets/img/page3/zan.jpg" alt="">
            </div>
            
            <h4>节省费用，享资深会计顾问服务</h4>
        </li>
        <li>
            <div class="img">
                <img src="~assets/img/page3/kuai.jpg" alt="">
            </div>
            <h4>每月记账报税及时准确</h4>
        </li>
        <li>
            <div class="img">
                <img src="~assets/img/page3/zuan.jpg" alt="">
            </div>
            <h4>免费提供增值服务</h4>
        </li>
        <li>
            <div class="img">
                <img src="~assets/img/page3/dao.jpg" alt="">
            </div>
            <h4>免费提供多种财税咨询指导</h4>
        </li>
    </ul>
    <div class="boc">
        <h5><img src="~assets/img/page3/jing.png" alt="">新公司成立后，在10个工作日去税务机关报到，超时会被罚款；每月记账报税，即使没有收入支出，也要纳税申报</h5>
    </div>
        

        
     
  </div>
</template>

<script>


  export default {
    name: "BuchouView",
    
  }
</script>

<style scoped>
.qing {
    position: relative;
    height: 500px;
    border-top: 2px dashed #eee;
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
     left: 10%;
     
 }
 li {
     position: relative;
     float: left;
     list-style-type: none;
     height: 150px;
     width: 215px;
     text-align: center;
     margin: 25px;
     margin-top: 100px;
     /* border: 2px solid #eee; */
 }
 .img {
     position: absolute;
     height: 50px;
     width: 50px;
     border: 1px solid #eee;
     border-radius: 50%;
     left: 90px;
     top: 15px;
     z-index: 3;
     background-color: #fff;
 }
 .img>img {
     height: 30px;
     margin: 18%;
 }
 h4 {
     position: absolute;
     bottom: 0;
     font-weight: normal;
     padding-top: 15%;
     height: 100px;
     width: 100%;
     box-shadow: 0 0 3px #eee;
     background-color: #fff;
 }
 h5 {
     position: relative;
     font-weight: normal;
     text-align: center;
     /* margin-top: 100px; */
     line-height: 200px;
     /* padding-left: 30px; */
 }
 h5>img {
     position: absolute;
     top: 70px; 
     /* line-height: 20px;  */
     /* display: inline-block; */
     padding-top:20px ;
     margin-left: -30px;
     z-index: 3;
 }
 
 
 
 
 
</style>
