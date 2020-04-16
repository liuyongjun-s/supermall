<template>
  <div class="aftdo">
    <h1>公司注册完后 还要做什么？</h1>
    <ul class="all">
        <li>
            <h4>开立公司基本账户</h4>
            <ol class="list list--ordered">
                <li class="list__item"><span></span><p>什么是基本户？</p>
                <i>基本户是企业的主要存款账户，给员工发工<br/>
                资/发奖金等现金的支取都只能通过该账户<br/>办理。</i>
                </li>
                <li class="list__item"><span></span><p>选择银行</p>
                <i>每个银行收费不同</i>
                </li>
            </ol>
            <div class="btn">咨询我们</div>
           
        </li>
        <li>
            <h4>公司办理记账报税</h4>
            <ol class="list list--ordered">
                <li class="list__item"><span></span><p>什么是基本户？</p>
                <i>公司成立后，一般要求10个工作日内去所<br/>
                属税务机关报到,超时未报到的企业有可能<br/>会被罚款</i>
                </li>
                <li class="list__item"><span></span><p>选择银行</p>
                <i>每月记账报税，没有收入支出也要报税，不<br/>
                要忘记申报；
                </i>
                </li>
                <li class="list__item"><span></span><h6>委托我公司代理记账，省时省力省心！</h6></li>
            </ol>
            <div class="btn">咨询我们</div>
           
        </li>
        <li>
            <h4>对外宣传，搭建网站展示形象</h4>
            <ol class="list list--ordered">
                <li class="list__item"><span></span><p>什么是基本户？</p>
                <i>一个好的网站，大大提升企业形象和可<br/>信度,带来更多咨询量和成交量。</i>
                </li>
                <li class="list__item"><span></span><p>选择银行</p>
                <i>网站美观大气，极具销售展示力；<br/>多种营销应用功能，统一升级维护</i>
                </li>
            </ol>
           <div class="btn">咨询我们</div>
        </li>
    </ul>
    <div class="bg">
        <img src="~assets/img/page2/aftdo.jpg" alt="">
    </div>
        

        
     
  </div>
</template>

<script>


  export default {
    name: "AftdoView",
    
  }
</script>

<style scoped>

/* body{
    counter-reset: my-item;
}
.list__item::before{
    counter-increment: my-item;
    content: "part:" counter(my-item);
} */


.aftdo {
    position: relative;
    height: 600px;
    min-width: 1080px;
}
.bg {
    /* position: absolute; */
    /* margin-top: 240px; */
    /* background-color: rgb(227, 216, 198); */
    height: 40%;
    
    bottom: 0px;
}
.bg>img {
    position: relative;
    width: 100%;
    height: 580px;
    z-index: -1;
}
 h1 {
     position: absolute;
     left: 35%;
     font-weight: normal;
     color: black;
     text-align: center;
     line-height: 60px;
     margin-bottom: 30px;
 }
 h4 {
     line-height: 80px;
     font-weight: normal;
     color: black;
     margin: 20px;
     border-bottom: 1px solid #eee;
 }
 h6 {
     display: inline-block;
     width: 210px;
     text-align: left;
     margin-left: 12px;
 }
 .all {
     position: absolute;
     left:10%;
     top: 85px;
 }

 .all>li {
     position: relative;
     float: left;
     list-style-type: none;
     height: 450px;
     width: 300px;
     text-align: center;
     margin: 10px;
     border: 2px solid #eee;
     background-color: #fff;
 }
    .btn {
        position: absolute;
        height: 36px;
        line-height: 36px;
        width: 130px;
        background-color: rgb(188, 160, 113);
        color: #fff;
        bottom: 30px;
        left: 30%;
        border-radius: 18px;
    }
 /* .list {
     /* list-style-image: url(~assets/img/page2/xuy.jpg); */
     /* color: #fff; 
 } */
 /* .list>li {
     color: #fff;
     /* list-style-type:decimal;
        list-style-position:inside; 
 } */
    .list {list-style-type: none;margin: 0;padding: 0 0 0 30px;}
    .list--ordered {counter-reset: list-counter;display: block;}

    
    .list__item {
        height: 90px;
        z-index: 9;
    }
    /* .list__item::before {
        color: red;
        z-index: 2;
    } */
    p {
        display: inline-block;
        color: black;
        width: 210px;
        
        text-align: left;
        margin-left: 10px;
       
    }
    i {
        display: inline-block;
        font-style: normal;
        text-align: left;
        font-size: 12px;
        width: 230px;
        margin-left: 0px;
    }
    /* .list--ordered {
        color: red;
        z-index: 3;
        margin-left: 30px;
        
    } */
    /* .list--ordered .list__item{
        width: 100px;
    } */
    .list--ordered .list__item::before {
        /* background: rgb(43, 145, 227); */
        
        /* color: white; */
        color: red;
        /* margin-left: 0px; */
        left: 18px;
        content: counter(list-counter);
        counter-increment: list-counter;
        /* display: inline-block; */
        height:20px;
        /* left: 0; */
        line-height:22px;
        position: absolute;
        /* text-align: center; */
        /* width:20px; */
        z-index: 1;
    }
    span {
        height:20px;
        width: 20px;
        background: rgb(43, 145, 227);
        display: inline-block;
        transform: rotate(45deg);
        margin-left: -60px;
        z-index: 0;
    }

 .img {
     height: 60%;
 }
 .img>img {
     height: 100px;
     margin: 18%;
 }

 
 
 
 
 
</style>
