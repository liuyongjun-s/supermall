<template>
    <div class="step">
        <h2>注册公司流程</h2>
        <h5>我要创业网， 15-25个工作日就可以注册完公司</h5>
        <img src="~assets/img/page1/step.jpg"/>

        <div class="center">
            <ul class="st">
                <li><img src="~assets/img/page1/stconsult.png"/>
                    <p>咨询我们</p>
                    <i>一对一跟踪对接</i>
                </li>
                <li><img src="~assets/img/page1/hezhun.png"/>
                    <p>公司名称核准</p>
                    <i>5个工作日核准</i>
                </li>
                <li><img src="~assets/img/page1/tijiao.png"/>
                    <p>提交资料</p>
                    <i>10个工作日左右</i>
                </li>
                <li><img src="~assets/img/page1/banli.png"/>
                    <p>办理营业执照</p>
                    <i>5个工作日左右</i>
                </li>
                <li><img src="~assets/img/page1/kezhang.png"/>
                    <p>领执照刻章</p>
                    <i>5个工作日左右</i>
                </li>
                <li><img src="~assets/img/page1/kaihu.png"/>
                    <p>开立银行账户</p>
                    <i>10个工作日左右</i>
                </li>
            </ul>

            
            


        </div>
        <div  class="center2">
        <ul class="rj">
                <li><img src="~assets/img/page1/rightj.jpg"/></li>
                <li><img src="~assets/img/page1/rightj.jpg"/></li>
                <li><img src="~assets/img/page1/rightj.jpg"/></li>
                <li><img src="~assets/img/page1/rightj.jpg"/></li>
                <li><img src="~assets/img/page1/rightj.jpg"/></li>
                
            </ul>
        
        </div>

    </div>
</template>

<script>
export default {
    name: "StepView"
}
</script>

<style scoped>
    .step>img {
        width: 100%;
        position: absolute;
        z-index: 0;
        height: 320px;
    }
    .step {
        position: relative;
        height: 320px;
        margin-bottom: 90px;
        width: 100%;
        min-width: 1280px;
    }

    .step>h2,h5{
        position: absolute;
        left: 50%;
        margin-left: -5%;
        top:30px;
        text-align:center;
        font-weight: normal;
        color: #fff;
        z-index: 1;
    }

    

    .step>h5{
        margin-top: 40px;
        margin-left:-10%;
    }

    .center {
        height: 200px;
        width: 65%;
        background-color: #fff;
        position: absolute;
        left: 18%;
        top: 42%;
        box-shadow: 0  0 10px ;
    }
    .center2 {
        height: 200px;
        width: 64%;
        /* background-color: #fff; */
        position: absolute;
        left: 22%;
        top: 43%;
    }
    .st {
        margin-top: 30px;
        margin-left: 15px;
    }
    .st>li {
        float: left;
        margin: 26px;
        list-style-type: none;
    }

    .st>li>img {
        height: 60px;
        margin-bottom: 20px;
        
    }
    .rj {
        margin-top: 30px;
        margin-left: 15px;
    }
    .rj>li {
        float: left;
        margin: 42px;
        list-style-type: none;
    }
    .st>li>p {
        font-size: 14px;
    }
    .st>li>i {
        font-style: normal;
        font-size: 5px;
    }
    
    
</style>
