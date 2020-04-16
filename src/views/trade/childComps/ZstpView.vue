<template>
    <div class="step">
        <h2>注册流程</h2>
        
        

        <div class="center">
            <ul class="st">
                <li><img src="~assets/img/page4/ren.png"/>
                    <p>专人对接</p>
                    <h6>一对一跟踪对接下单</h6>
                </li>
                <li><img src="~assets/img/page4/sch.png"/>
                    <p>商标规划及查询</p>
                    <h6>1个工作日</h6>
                </li>
                <li><img src="~assets/img/page4/tici.png"/>
                    <p>提交材料申请注册</p>
                    <h6>1-2个工作日</h6>
                </li>
                <li><img src="~assets/img/page4/shu.png"/>
                    <p>受理通知书</p>
                    <h6>商标局形式审查3个月左右</h6>
                </li>
                <li><img src="~assets/img/page4/biao.png"/>
                    <p>下发商标注册证书</p>
                    <h6>注册完成12个月左右</h6>
                </li>
                
            </ul>

            <ul class="rj">
                <li><img src="~assets/img/page4/jiant.png"/></li>
                <li><img src="~assets/img/page4/jiant.png"/></li>
                <li><img src="~assets/img/page4/jiant.png"/></li>
                <li><img src="~assets/img/page4/jiant.png"/></li>
                
                
            </ul>
            


        </div>
        

    </div>
</template>

<script>
export default {
    name: "ZstpView"
}
</script>

<style scoped>
    
    .step {
        position: relative;
        height: 520px;
        background-color: #eee;
        /* margin-bottom: 90px; */
        min-width: 1280px;
        width: 100%;
    }

    .step>h2{
       
        line-height: 100px;
        text-align:center;
        font-weight: normal;
        color: black;
        z-index: 1;
    }

    

    

    .center {
        height: 200px;
        width: 80%;
        /* background-color:rgb(247, 247, 247); */
        position: absolute;
        left: 10%;
        top: 32%;
        /* box-shadow: 0  10px 10px 10px; */
    }
    .rj {
        height: 50px;
        width: 84%;
        /* background-color: #fff; */
        position: absolute;
        left: 14%;
        top: 13%;
    }
    .st {
        margin-left: 18px;
    }
    .st>li {
        float: left;
        margin: 35px;
        list-style-type: none;
        width: 125px;
    }

    .st>li>img {
        height: 80px;
        margin-left: 30px;
        margin-bottom: 20px;
    }
    .rj {
        margin-left: 27px;
    }
    .rj>li {
        float: left;
        margin-top: 45px ;
        margin-right: 133px;
        list-style-type: none;
    }
    .rj>li>img {
        width: 60px;
    }
    .st>li>p {
        font-size: 14px;
        text-align: center;
        color: black;
        line-height: 25px;
    }
    .st>li>h6 {
        font-weight: normal;
        font-size: 5px;
        line-height: 20px;
        text-align: center;
        /* background-color: red; */
        width: 130px;
    }
    
    
</style>
