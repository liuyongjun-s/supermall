<template>
    <div class="step">
        <h2>我们如何为你代理记账</h2>
        
        

        <div class="center">
            <ul class="st">
                <li><img src="~assets/img/page3/piao.jpg"/>
                    <p>客户收集整理票据</p>
                    <i>上月18号前</i>
                </li>
                <li><img src="~assets/img/page3/ji.jpg"/>
                    <p>寄给会计</p>
                    <i>每月3号前</i>
                </li>
                <li><img src="~assets/img/page3/suanqi.jpg"/>
                    <p>会计做账记录</p>
                    <i>每月14号前</i>
                </li>
                <li><img src="~assets/img/page3/hes.jpg"/>
                    <p>与客户核对税额</p>
                    <!-- <i>5个工作日左右</i> -->
                </li>
                <li><img src="~assets/img/page3/daish.jpg"/>
                    <p>代为纳税申报</p>
                    <i>每月15号前</i>
                </li>
                
            </ul>

            <ul class="rj">
                <li><img src="~assets/img/page3/jiant.jpg"/></li>
                <li><img src="~assets/img/page3/jiant.jpg"/></li>
                <li><img src="~assets/img/page3/jiant.jpg"/></li>
                <li><img src="~assets/img/page3/jiant.jpg"/></li>
                
                
            </ul>

            
            


        </div>
       

    </div>
</template>

<script>
export default {
    name: "HowtoView"
}
</script>

<style scoped>
    
    .step {
        position: relative;
        height: 520px;
        /* margin-bottom: 90px; */
        background-color:rgb(247, 247, 247);
        min-width: 1080px;
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
        width: 90%;
        /* background-color:rgb(247, 247, 247); */
        position: absolute;
        position: relative;
        left: 10%;
        top: 12%;
        /* box-shadow: 0  10px 10px 10px; */
    }
    
    .st {
        margin-left: 20px;

    }
    .st>li {
        float: left;
        margin: 35px;
        list-style-type: none;
        width: 120px;
    }

    .st>li>img {
        height: 60px;
        margin: 20px;
    }
    .rj {
        /* margin-left: 10px; */
        position: absolute;
        left: 200px;
        top: 80px;

    }
    .rj>li {
        float: left;
        /* margin-top: 100px ; */
        margin-right: 120px;
        list-style-type: none;
    }
    .rj>li>img {
        width: 60px;
    }
    .st>li>p {
        font-size: 14px;
        /* text-align: center; */
        width: 120px;
    }
    .st>li>i {
        font-style: normal;
        font-size: 5px;
        width: 100px;
        /* text-align: center; */
    }
    
    
</style>
