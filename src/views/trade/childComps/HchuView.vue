<template>
  <div class="qing">
    <h1>商标注册的好处</h1>
    <ul>
        <li>
            <div class="img">
                建立品牌效果
            </div>
            
            <h4>商标即是品牌<br/>
                便于消费者认牌购物<br/>
                抢先占领市场
            </h4>
        </li>
        <li>
            <div class="img">
                品牌保护
            </div>
            <h4>®商标受法律<br/>
            严格保护避免行业内恶性竞争<br/>
            防止同类品企业侵权
            </h4>
        </li>
        <li>
            <div class="img">
                必备资源
            </div>
            <h4>入驻大型超市<br/>
            正规网店电商平台、媒体广告<br/>
            投放微博微信官方认证等必要资质
            </h4>
        </li>
        <li>
            <div class="img">
                无形资产
            </div>
            <h4>可作为无形资产<br/>
            进行转让、继承、资产投资抵押贷款等<br/>
            具有非常高的经济价值
            </h4>
        </li>
    </ul>
    <div class="boc">
        <h5><img src="~assets/img/page3/jing.jpg" alt="">新公司成立后，在10个工作日去税务机关报到，超时会被罚款；每月记账报税，即使没有收入支出，也要纳税申报</h5>
    </div>
        

        
     
  </div>
</template>

<script>


  export default {
    name: "HchuView",
    
  }
</script>

<style scoped>
.qing {
    position: relative;
    height: 500px;
    width: 100%;
    /* border-top: 2px dashed #eee; */
    min-width: 1280px;
}
.boc {
    /* position: absolute; */
    position: relative;
    margin-top: 220px;
    background-color: rgb(227, 216, 198);
    height: 40%;
    bottom: 0px;
    z-index: 0;
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
     height: 200px;
     width: 220px;
     text-align: center;
     margin: 20px;
     margin-top: 100px;
     /* border: 2px solid #eee; */
 }
 .img {
     position: absolute;
     height: 100px;
     line-height: 100px;
     width: 100px;
     border: 1px solid #eee;
     border-radius: 50%;
     left: 30%;
     top: 0px;
     z-index: 3;
     background-color: rgb(188, 160, 113);
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
     font-size: 10px;
     /* box-shadow: 3px 3px 3px 3px #eee;
     background-color: #fff; */
     z-index: 1;
 }
 h5 {
     position: relative;
     position: absolute;
     font-weight: normal;
     text-align: center;
     bottom: 60px;
     left: 30%;
     /* line-height: 200px; */
     /* padding-left: 30px; */
 }
 h5>img {
     position: absolute;
     bottom: 0px;
     left: -30px;
 }
 
 
 
 
 
</style>
