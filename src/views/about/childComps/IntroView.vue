npm<template>
  <div class="zhuce">
      
        <div class="center">
            <div class="left">
                
                <div class=" jie jie1"><img src="~assets/img/page4/jie1.jpg" alt=""> </div>
                <div class=" jie jie2"><img src="~assets/img/page4/jie2.jpg" alt=""> </div>
                <div class=" jie jie2"><img src="~assets/img/page4/jie3.jpg" alt=""> </div>
                <div class=" jie jie1"><img src="~assets/img/page4/jie4.jpg" alt=""> </div>
                
            </div>
            <div class="right"    v-for="item in aboutInfo" :key="item.id">  
                <h2>{{item.title}}</h2>
               <h5 >{{item.content}}
               
               </h5>

            </div>

        </div>
     
  </div>
</template>

<script>
   import {getRegistrationFindAll, getAboutInfo} from "network/home";

  export default {
    name: "IntroView",

    data() {        
          return {   
              menuTab: [
                  { txt: '电话' },
                  { txt: '邮箱' },
                  { txt: '地址' }
              ] ,       
             formData:{
              company:'',
              mobile:'',
              name:'',
              title:''
            },
            params: {
                currentPage: 1
            },
            findInfo: [

            ],
            callInfo: [

            ],
            aboutInfo: [

            ],
            data: {},
            mobile: {},
            title: {}
        
        }     
    },
    created() {
        this.getAboutInfo()
    },

    methods: {
        getMoreFindInfo() {
            this.params.currentPage++;
            this.getFindInfo()
        },
        getAboutInfo() {
            getAboutInfo()
                  .then((res) => {
                    this.aboutInfo = res.data
                  })
        },
    
  }
    
  }
</script>

<style scoped>

.zhuce {
    position: relative;
    height: 600px;
    background-color: #eee;
    width: 100%;

    min-width: 1080px;
}


 .center {
     position: absolute;
     left: 10%;
     top: 10%;
     background-color: #fff;
     height: 500px;
     width: 80%;
     
     box-shadow: 5px 5px 5px 5px #888;
     /* background-color: red; */
     overflow: hidden;
 }
 .left {
     height: 100%;
     width: 48%;
     /* background-color: red; */
 }
 .right {
     position: relative;
     height: 100%;
     width: 52%;
 }

 .jie {
     float: left;
     width: 195px;
     height: 195px;
 }
 .jie>img {
     margin: 20px;
 }
 .jie2>img {
     margin-left: 30px;
     margin-top: 40px;
 }
 h2 {
     font-weight: normal;
     color: black;
     line-height: 50px;
     margin-top: 30px;
     margin-right: 50px;
     border-bottom: 2px solid #eee;
 }
 h5 {
     width: 80%;
     font-weight: normal;
     margin-top: 30px;
 }
 
 
</style>
