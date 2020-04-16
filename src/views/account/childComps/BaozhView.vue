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
                        资质正规过硬 丰富做账经验
                    </li>                
                </ul>
                <ul class="rt">
                    <li>
                        高质低价 透明实惠
                    </li>
                    <li>
                        资质正规过硬 丰富做账经验
                    </li>                
                </ul>
            

            <img src="~assets/img/page3/note.jpg"/>
            


        </div>
        
        <div class="btn">立即代理记账></div>
    </div>
</template>

<script>
export default {
    name: "BaozhView"
}
</script>

<style scoped>
   
    .step {
        position: relative;
        height: 420px;
        margin-bottom: 90px;
        min-width: 1080px;
    }

    .step>h2{
        
        
        margin-top:80px;
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
        margin-top: 0px;
        
        box-shadow: 0  0 10px ;
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
        left: 73%;
        top: 25%;
        height: 100px;
    }
    .btn {
        position: absolute;
        left: 45%;
        bottom: 0px;
        width: 150px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        color: #fff;
        border-radius: 5px;
        background-color: rgb(188, 160, 113);
    }

    
  
    
    
</style>
