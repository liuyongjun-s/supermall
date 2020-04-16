<template>
    
        <div class="adv">
        <h2>四大注册优势</h2>
        <h5>专注企业事务代理数十年</h5>
        
    <div id="macji">
        <ul class="macji-skin">
            <li><img src="~assets/img/page1/consult.png"/>            
            <p>专业服务一对一咨询</p>
            <i>一对一即时咨询服务，专业领域顾问<br/>至少两年以上从业经验</i>
            </li>
            <li><img src="~assets/img/page1/security.png"/>
            <p>严控风险 安全保障</p>
            <i>严格把控业务办理风险<br/>保障办理过程安全顺利、平稳进行</i>
            </li>
            <li><img src="~assets/img/page1/heart.png"/>
            <p>一站式服务 省事省心</p>
            <i>涵盖企业初创期、成长期、<br/>成熟期，满足各类不同业务办理需求</i>
            </li>
            <li><img src="~assets/img/page1/transp.png"/>
            <p>全程化透明</p>
            <i>服务产品化定制规范，全程可监控、<br/>可追溯、业务进度实时跟进</i>
            </li>
        </ul>
    


    </div>


    </div>
</template>

<script>
export default {
    name: "AdvantageView"
}
</script>

<style scoped>
    .adv {
        width: 100%;
        min-width: 1080px;
    }
    .adv>h2,h5{
        text-align:center;
        font-weight: normal;
    }

    .adv>h2{
        color: black;
        margin-top: 30px;
        margin-bottom: 10px;
    }

    .adv>h5{
        margin-bottom: 50px;
    }
 
 li>p {
     font-size: 20px;
     color: black;
     margin: 20px;
  }

  li>i {
      font-style: normal;
      font-size: 10px;
  }

#macji{
    position:relative;
    width:100%;
    height:300px;
    background-color:#fff;
    text-align:center;
    /* overflow:hidden; */
}
#macji .macji-skin{
    float:left;
    position:relative;
    left:20%;
}
#macji .macji-skin li{
    /* position:relative; */
    /* right:50%; */
    float:left;
    /* margin:25px; */
    /* padding:0 10px; */
    /* border:solid 1px #000; */
    line-height:20px;
    list-style-type: none;
}
</style>
