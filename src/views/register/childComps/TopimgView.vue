<template>
  <div class="tmg">
    
        <img src="~assets/img/page2/5ks.jpg" alt="">
        <el-form  class="input" name="dataForm" @submit.native.prevent>
     <input type="text"  name="company"  id="company" v-model="formData.company" placeholder="请输入查询的公司名称" onKeyPress="check_event(event)"  />
     
        </el-form>
        <div class="list">上海<br/>公司排名</div>
  </div>
</template>

<script>
import {getRegistrationFindAll, saveClientInfo} from "network/home";

  export default {
    name: "TopimgView",

     data() {        
          return {           
             formData:{
              company:'',
              // mobile:'',
              // name:'',
            } 
          
        }     
    },

    methods: {
      check_event(event){
        var code = event.keyCode;
        if(code==13){
         
                
                saveClientInfo(this.formData)
                  .then((res) => {
                    
                    this.dialogFormVisible = false
                    this.$notify({
                      title: '成功',
                      message: '上传成功',
                      type: 'success',
                      duration: 2000
                    })
                    // this.getList()
                    // this.resetTemp()
                  })
          
      }
      }
        
      

    }
    
  }
</script>

<style scoped>
 .tmg {
     width: 100%;
     min-width: 1080px;
     position: relative;
 }
 .tmg>img {
     width: 100%;
 }

 .input {
     position: absolute;
     /* position: relative; */
     bottom: 0px;
     height: 15%;
     width: 66%;
     left: 17%;
     background-color: rgb(188, 160, 113);
 }
 .input input {
     /* position: absolute; */
     height: 80%;
     width: 80%;
     margin-top: 7px ;
     margin-left: 130px;
 } 
 .input>span {
     float: left;
 }
 .list {
     position: absolute;
     bottom: 5px;
     left: 240px;
     color: #fff;
     font-weight: bold;
     font-size: 20px;
     font-family: 华文行楷;
 }
 
</style>
