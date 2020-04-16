<template>
    <div class="feature">
        <!-- <a href="https://act.mogujie.com/zzlx67">
            <img src="~assets/img/home/recommend_bg.jpg" alt="">
        </a> -->

        <h2>我们的服务</h2>
        <h5>做您身边的财税专家及管家</h5>
    <div id="macji">
        <ul class="macji-skin" >
            
                <li class="item">
                    <img src="~assets/img/page1/wuxing.png" />

							<h4>上海公司注册</h4>
                            <h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;国际大都市，政策扶持。<br>成功从这里开始</h6>
							<div class="oesoc-b-pro">
								 
                               <span><a href=""><img src="~assets/img/page1/1.png"></a></span>
                               
                                							
							</div>
							<p class="price">500元</p>
							<p class="more">查看详情
                                <img src="~assets/img/page1/arrow-right.png"/>
                            </p>
						</li>

                <li class="item">
                    <img src="~assets/img/page1/kafu.png" />

							<h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;会计服务</h4>
                            <h6>合法，合规的为您进行税务筹划<br>让您安全稳步成长</h6>
							<div class="oesoc-b-pro">
								 
                               <span><a href=""><img src="~assets/img/page1/2.png"></a></span>
                               
                                							
							</div>
							<p class="price">220元/月起</p>
							<p class="more">查看详情
                                <img src="~assets/img/page1/arrow-right.png"/>
                            </p>
						</li>

                <li class="item">
                    <img src="~assets/img/page1/shzhu.png" />

							<h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;商标注册</h4>
                            <h6>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;所有商标申请当天上报<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;一对一的顾问制式服务</h6>
							<div class="oesoc-b-pro">
								 
                               <span><a href=""><img src="~assets/img/page1/3.png"></a></span>
                               
                                							
							</div>
							<p class="price">1000元</p>
							<p class="more">查看详情
                                <img src="~assets/img/page1/arrow-right.png"/>
                            </p>
						</li>

                <li class="item">
                    <img src="~assets/img/page1/waizhu.png" />

							<h4>外资公司注册</h4>
                            <h6>一站式服务 法律咨询 财务外包<br>税务咨询 管理咨询</h6>
							<div class="oesoc-b-pro">
								 
                               <span><a href=""><img src="~assets/img/page1/4.png"></a></span>
                               
                                							
							</div>
							<p class="price">咨询</p>
							<p class="more">查看详情
                                <img src="~assets/img/page1/arrow-right.png"/>
                            </p>
				</li>
            


        </ul>

    </div>
    



    </div>
</template>

<script>
export default {
    name: "FeatureView"
}
</script>

<style scoped>
    /* .feature img {
        width: 100%;
    } */

    .feature{
        background-color: #eee;
        width: 100%;
        min-width: 1080px;
    }

    .feature>h2,h5 {
        text-align: center;
        font-weight: normal;
    }
    .feature>h2{
        color: black;
        padding-top: 40px;
    }
    .feature>h5{
        color: rgb(127, 127, 127);
        margin-top: 10px;
        margin-bottom: 30px;
    }

    /* li img{
        height: 200px;
        width: 100%;
    } */

    .item {
        position: relative;
        float: left;
        margin: 0 auto;
    }

    .item>h4{
        position: absolute;
        left:50% ;
        margin-left: -50px;
        text-align: center; 
        top: 90px;
        color: #fff;
    }
    .item h6{
        position: absolute;
        left: 50%;
        margin-left: -80px;
        top: 120px;
        line-height: 20px;
        font-weight:normal;
        color: #fff;
    }
    .price{
        position: absolute;
        left: 50%;
        margin-left: -25px;
        top: 180px;
        color: rgb(195, 142, 62);
    } 
    .more{
        position: absolute;
        left: 50%;
        margin-left:-60px ;
        top: 220px;
        color: #fff;
        border: solid 1px;
        padding: 7px  15px;
        border-radius: 10px;
        height: 40px;
        /* width: 120px; */
        
    }
    p>img {

        height: 20px;
        width: 20px;
        vertical-align: bottom;
        line-height: 40px;
    }
    .item>img{
        position: absolute;
        top: 30px;
        left: 50%;
        margin-left:-25px ;
        height: 50px;
        /* width: 100px; */
        
    }

    .feature>ul{
        
        /* margin: 0 100px;
        text-align: center; */

        display:inline-block; *display:inline; zoom:1;
        margin: 0 auto;
    }
    .feature ul>li{
        text-align: center;
        list-style-type:none;
        /* margin: 0 10px; */

        margin: 0 auto;

    }

    #macji{
    position:relative;
    width:100%;
    height:350px;
    background-color:#eee;
    text-align:center;
    overflow:hidden;
}
#macji .macji-skin{
    float:left;
    position:relative;
    left:50%;
}
#macji .macji-skin li{
    position:relative;
    right:50%;
    float:left;
    margin:10px;
    /* padding:0 10px; */
    /* border:solid 1px #000; */
    /* line-height:60px; */
    height: 300px;
    width: 250px;
}
span img{
    height: 300px;
    width: 250px;
}
</style>
