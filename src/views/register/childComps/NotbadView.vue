<template>
  <div class="notbad">
    <h1>早申请，早注册，开公司不再难</h1>
    <ul class="center">
        <li v-for="item in registInfo" :key="item.id">
            <p>{{item.title}}</p>
           <!-- <div class="btn">在线解答</div> -->

           <el-button type="text" @click="open(item)">在线解答</el-button>
        </li>
        <!-- <li>
            <p>一个地址可以注册多个公司吗？</p>
            <div class="btn">在线解答</div>
        </li>
        <li>
            <p>如何确定一个公司的经营范围？</p>
            <div class="btn">在线解答</div>
        </li>
        <li>
            <p>注册资金最低多少？</p>
            <div class="btn">在线解答</div>
        </li>
        <li>
            <p>需要先打入注册资金吗？</p>
            <div class="btn">在线解答</div>
        </li>
        <li>
            <p>如何任缴注册？</p>
            <div class="btn">在线解答</div>
        </li>
        <li>
            <p>注册场所没有租赁合同怎么办？</p>
            <div class="btn">在线解答</div>
        </li>
        <li>
            <p>最快多久可以领证？</p>
            <div class="btn">在线解答</div>
        </li> -->
        
           
        
    </ul>
    
        

        
     
  </div>
</template>


<script>

  import { getRegistInfo} from "network/home.js";

  export default {
    name: "NotbadView",

     data() {        
          return {   
                    
            
            // params: {
            //     page:2,
            //     type:1
            // },
            
            registInfo: [

            ],
            
        
        }     
    },

    created() {
        this.getRegistInfo()
        // this.toggleMenu()
    },
    

    methods: {
        
        getRegistInfo() {
            getRegistInfo(this.params)
                  .then((res) => {
                      console.log(res.data)
                    this.registInfo = res.data
                    // this.enterInfo = 
                  })
        },
        // toggleMenu() {
        //     toggleMenu().then((res) => {
        //         console.log(res.data)
        //     })
        // },

        // toggleMenu() {
        //     toggleMenu(this.price)
        //           .then((res) => {
        //               console.log(price)
        //             this.priceInfo = res.data
        //             // this.enterInfo = 
        //           })
        // },

        toggleMenu(item){
            console.log(item.price)
             this.priceInfo = item.price
            // return {price}
            // this.menuTab.forEach(elem => {
            //     elem.current = false
            // });
            // data.current = true
        },
        open(item) {
            console.log(item.content)
            // this.contInfo = item.content
        this.$alert(item.content, '您的问题的答案是：', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      }
    }
    
  }
</script>

<style scoped>

h1 {
    font-weight: normal;
    text-align: center;
    margin-bottom: 50px;
}

.notbad {
    height: 600px;
    min-width: 1080px;
}
.center {
    /* position: relative; */
    /* background-color: red; */
    width: 60%;
    height: 400px;
    margin: 0 auto;
    list-style: none;
}

li {
    /* list-style-type: none; */
    position: relative;
    background-image: url(~assets/img/page2/wimg.jpg);
    background-repeat: no-repeat;
                background-position: 0 0.5em;
    height: 50px;
    /* line-height: 40px; */
    border-bottom: 1px solid rgb(195, 192, 192);
}
p {
    line-height: 40px;
    margin-left: 30px;
}
.btn {
    display: inline-block;
    position: absolute;
    border: 2px solid rgb(188, 160, 113);
    color: rgb(188, 160, 113);
    border-radius: 15px;
    width: 100px;
    font-size: 14px;
    text-align: center;
    height: 30px;
    line-height: 28px;
    right: 20px;
    top: 10px;
}

.el-button {
    display: inline-block;
    position: absolute;
    border: 2px solid rgb(188, 160, 113);
    color: rgb(188, 160, 113);
    border-radius: 15px;
    width: 100px;
    font-size: 14px;
    text-align: center;
    height: 30px;
    line-height: 5px;
    right: 20px;
    top: 10px;
}

/* li::before {
    /* background-image: url(~assets/img/page2/wimg.jpg); 
} */

 
 
 
 
 
</style>
