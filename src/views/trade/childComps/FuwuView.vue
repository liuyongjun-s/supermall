<template>
    <div class="step">
        <h2>一站式 全程保障 服务放心</h2>
        
        

        <div class="center">
            <h3>会计记账服务</h3>
            
            
                <ul class="st">
                    <li>
                        高质低价 透明实惠
                    </li>
                    <li>
                        资质正规过硬 多年执业经验
                    </li>                
                </ul>
                <ul class="rt">
                    <li>
                        资料信息全程严格保密 安全可靠
                    </li>
                    <li>
                        一对一财务顾问跟进 服务了如指掌
                    </li>                
                </ul>
            

            <img src="~assets/img/page3/note.jpg"/>
            


        </div>
        
        
    </div>
</template>

<script>
export default {
    name: "FuwuView"
}
</script>

<style scoped>
   
    .step {
        position: relative;
        height: 500px;
        /* margin-bottom: 90px; */
        background-color: #eee;
        min-width: 1180px;
    }

    .step>h2{
        
        
        /* margin-top:100px; */
        line-height: 60px;
        text-align:center;
        font-weight: normal;
        color: black;
        z-index: 1;
    }
    h3 {
        line-height: 50px;
        font-weight: normal;
        color: black;
        margin: 30px;
    }

    

    

    .center {
        position: relative;
        height: 250px;
        width: 50%;
        background-color:#fff;
        margin: 0 auto;
        margin-top: 80px;
        
        box-shadow: 0  0px 10px;
    }
    li {
        list-style-type: none;
        line-height: 40px;
        font-size: 12px;
    }
    .st {
        position: absolute;
        left: 70px ;
    }
    .rt {
        position: absolute;
        left: 250px ;
    }

    .center>img {
        position: absolute;
        left: 75%;
        top: 25%;
        height: 100px;
    }
 

    
  
    
    
</style>
