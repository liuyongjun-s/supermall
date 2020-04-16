<template>
  <div class="qing">
    
    <ul v-for="item in callInfo" :key="item.id">
        <li >
            <div class="img">
                <img src="~assets/img/page4/phone.png" alt="">
            </div>
            
            <h4 >电话<br/>
                {{item.mobile}}
            </h4>
        </li>
        <li >
            <div class="img">
                <img src="~assets/img/page4/email.png" alt="">
            </div>
            <h4>邮箱<br/>
                {{item.email}}
            </h4>
        </li>
        <li>
            <div class="img">
                <img src="~assets/img/page4/address.png" alt="">
            </div>
            <h4>位置<br/>
                {{item.site}}
            </h4>
        </li>
        
    </ul>
    
        

        
     
  </div>
</template>

<script>
    import {getRegistrationFindAll, getCallInfo} from "network/home";

  export default {
    name: "LinkView",

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
            },
            params: {
                currentPage: 1
            },
            findInfo: [

            ],
            callInfo: [

            ],
            data: {},
            mobile: {}
        
        }     
    },
    created() {
        this.getCallInfo()
    },

    methods: {
        getMoreFindInfo() {
            this.params.currentPage++;
            this.getFindInfo()
        },
        getCallInfo() {
            getCallInfo()
                  .then((res) => {
                    this.callInfo = res.data
                  })
        },
    
  }
  }
</script>

<style scoped>








.qing {
    position: relative;
    height: 300px;
    width: 100%;
    min-width: 1080px;
    background-color: rgb(188, 160, 113);
    /* border-top: 2px dashed #eee; */
}


 ul {
     position: absolute;
     left: 15%;
     top: 40px;
     
 }
 li {
     position: relative;
     float: left;
     list-style-type: none;
     height: 200px;
     width: 240px;
     text-align: center;
     margin: 25px;
     /* margin-top: 100px; */
     /* border: 2px solid #eee; */
 }
 .img {
     position: absolute;
     height: 100px;
     line-height: 100px;
     width: 100px;
     /* border: 1px solid #eee; */
     /* border-radius: 50%; */
     left: 30%;
     top: 0px;
     z-index: 3;
     /* background-color: rgb(188, 160, 113); */
 }
 .img>img {
     height: 100%;
     
 }
 h4 {
     position: absolute;
     bottom: 0;
     color: #fff;
     font-weight: normal;
     padding-top: 10%;
     height: 100px;
     line-height: 30px;
     width: 100%;
     /* font-size: 10px; */
     /* box-shadow: 3px 3px 3px 3px #eee;
     background-color: #fff; */
     z-index: 1;
 }

 
 
 
 
 
 
</style>
