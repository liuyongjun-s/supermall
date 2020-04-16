<template>
  <div class="zhug">
      <img src="~assets/img/page2/zhug.jpg" alt="">
    
        <div class="center">
            <div class="left">                
                注册上海公司特色
            </div>
            <div class="right">
                注册公司流程
            </div>
            <div class="cont">
                <ul>
                    <li>
                        <img src="~assets/img/page2/bao.jpg" alt="">
                        <p>起立上海国际大都市<br/>彰显公司实力</p>
                    </li>
                    <li>
                        <img src="~assets/img/page2/shui.jpg" alt="">
                        <p>享地区政策扶持<br/>最高返税40%</p>
                    </li>
                    <li>
                        <img src="~assets/img/page2/mian.jpg" alt="">
                        <p>注册资金无需验资</p>
                    </li>
                    <li>
                        <img src="~assets/img/page2/mian.jpg" alt="">
                        <P>免费刻章</P>
                    </li>
                </ul>

            </div>

        </div>
     
  </div>
</template>

<script>


  export default {
    name: "ZhugView",
    
  }
</script>

<style scoped>
.zhug {
    position: relative;
    height: 500px;
    width: 100%;
    min-width: 1080px;
}
.zhug>img {
    position: absolute;
    height: 500px;
    width: 100%;
    z-index: -1;
}
 h3 {
     font-weight: normal;
     color: black;
     text-align: center;
     line-height: 60px;
     margin-bottom: 30px;
 }
 .center {
     position: absolute;
     top: 17%;
     left: 18%;
     height: 380px;
     width: 900px;
     
     box-shadow: 0 0 5px  #888;
     /* background-color: red; */
 }
 .left {
     width: 50%;
     height: 70px;
     line-height: 70px;
     text-align: center;
     background-color: rgb(61, 60, 60);
     color: #fff;
     font-weight: bold;
     font-size: 30px;
     
 }
 .right {
     width: 50%;
     height: 70px;
     line-height: 70px;
     text-align: center;
     background-color: rgb(99, 96, 96);
     color: #fff;
     font-weight: bold;
     font-size: 30px;
    
 }
 .cont {
     /* margin-top:-50px ; */
     height: 380px;
     width: 100%;
     background-color: #fff;
 }
 .cont>ul {
     position: absolute;
     top: 140px;
     margin-left: 80px;
     /* margin-top: 150px; */
 }

 li {
     list-style-type: none;
     float: left;
     border: 2px solid #eee;
     height: 140px;
     
     padding-top:15px ;
     text-align: center;
     width: 165px;
     margin: 10px;
 }
 
 
</style>
