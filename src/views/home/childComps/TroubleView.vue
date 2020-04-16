<template>
    <div class="trouble">
        <h2>您是否遇到以下问题</h2>
        <h5>专注于公司注册、代理记账、税务咨询、解决工商税务异常问题等</h5>
        <img src="~assets/img/page1/trouble.jpg"/>

        <ul class="left">
            <li>不懂税务登记<img src="~assets/img/page1/tax.png"/><br/><p>流程繁琐、材料手续多，很麻烦</p></li>
            <li>不知如何做账<img src="~assets/img/page1/bill.png"/><br/><p>代理记账对业务不了解，财务工作一头雾水</p></li>
            <li>不清楚怎么报税<img src="~assets/img/page1/ptax.png"/><br/><p>不具备财务经验不懂如何申报</p></li>
        </ul>


        <ul class="right">
            <li><img src="~assets/img/page1/by.png"/>代理记账不专业<br/><p>企业没有专业会计团队记账，每年至少支<br/>出20%以上</p></li>
            <li><img src="~assets/img/page1/major.png"/>一般会计不专业<br/><p>无财务规划经验，处理复杂账目时，准确率低</p></li>
            <li><img src="~assets/img/page1/call.png"/>服务热线</li>
        </ul>


    </div>
</template>

<script>
export default {
    name: "TroubleView"
}
</script>

<style scoped>
    .trouble>img {
        width: 100%;
        position: relative;
    }
    .trouble {
        position: relative;
        width: 100%;
        min-width: 1080px;
    }

    .trouble>h2,h5{
        text-align:center;
        font-weight: normal;
    }

    .trouble>h2{
        color: black;
        margin-top: 30px;
        margin-bottom: 10px;
    }

    .trouble>h5{
        margin-bottom: 50px;
    }
    .left{
        position: absolute;
        left: 10%;
        top: 200px;
    }
    .left>li {
        text-align: right;
    }
    .right{
        position: absolute;
        right: 10%;
        top: 200px;
    }
    li>img {
        height: 60px;
        width: 60px;
    }
    /* ul {
        position: relative;
    } */
    ul>li {
        position: relative;
        list-style-type: none;
        color: black;
        margin-bottom: 40px;
    }
    li>img {
        position: absolute;
        /* top: 1px; */
        margin-top: -10px;
        margin-left: 10px;
    }
    .right>li>img {
        margin-left: -70px;
    }
    li>p{
        font-size: 10px;
        color: rgb(153, 153, 153);
        margin: 5px 0;
    }
</style>
