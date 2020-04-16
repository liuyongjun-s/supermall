<template>
  <div class="recommend">
  


    <form  class="input" name="dataForm">
      <div >
      <h3>公司注册</h3>
      <span><img   src="~assets/img/common/ads.jpg"/></span>
      <input type="text"  name="company" prop="company" id="company" v-model="formData.company" placeholder="请输入查询公司名称" >
      </div>
      <div >
      <h3 >代理记账</h3>
      <span><img   src="~assets/img/common/phone.jpg"/></span>
      <input type="text"  name="mobile" prop="mobile" id="mobile" v-model="formData.mobile"  placeholder="请输入查询公司名称">
      </div>
      <div >
      <h3 >企业核名</h3>
      <span><img src="~assets/img/common/per.jpg" ></span>
      <input type="text" name="name" prop="name" id="name" v-model="formData.name"   placeholder="例：张先生">
      </div>
      <div   class="btn" @click="submit">
      立即提交
      </div>
    </form>


<!-- <form  class="input">
       <el-form-item   label="模型封面" prop="cover">
          <input type="file" prop="cover" @change="handleFileChange($event, 'cover')">
        </el-form-item>
        <el-form-item label="模型" prop="model">
          <input type="file" prop="cover" @change="handleFileChange($event, 'model')" >
        </el-form-item>

</form> -->
    






  </div>

  


  
</template>

<script>
  // import Axios from 'axios';
  import {getRegistrationFindAll, saveClientInfo} from "network/home";

  // import {createModel} from "network/home";


  export default {
    name: "RecommendView",
    // props: {
    //   recommends: {
    //     type: Array,
    //     default() {
    //       return []
    //     }
    //   }
    // }

//       // props: {
//       data() {
//         //type: Array,
//         //default() {
//           return {
//             // company:'',
//             // mobile:'',
//             // name:'',
//              formData:{
//               company:'',
//               mobile:'',
//               name:'',
//             }
// //}
         
          
//         }
//      // }
//     },


// 需要的2
       data() {        
          return {           
             formData:{
              company:'',
              mobile:'',
              name:'',
            } 
          
        }     
    },


    // created() {
    //   // 1.请求多个数据
    //   getRegistrationFindAll().then(res => {
    //     // this.result = res;
    //     // this.banners = res.data.banner.list;
    //     // this.recommends = res.data.recommend.list;
    //     console.log(res)
    //   })
    // },

    //  el: 'form',
    //     data: {
    //       company: '',
    //       mobile: '',
    //       name: ''
    //     },
    //     methods: {
          
    //       submit() {
    //         event.preventDefault();
    //         let formData = new FormData();
    //         formData.append('company', this.company);
    //         formData.append('mobile', this.mobile);
    //         formData.append('name', this.name);
 
    //         let config = {
    //           headers: {
    //             'Content-Type': 'multipart/form-data'
    //           }
    //         }
 
    //         this.$http.post('/upload', formData, config).then(function (res) {
    //           if (res.status === 2000) {
    //             /*这里做处理*/
    //           }
    //         })
    //       }
    //     }
      //  el: 'form',
        // data: {
        //   company: '',
        //   mobile: '',
        //   name: ''
        // },




        // methods: {
        //   submit() {
        //     //this.$refs['dataForm'].validate((valid) => {
        //     //  if (valid) {
        //         console.log(this.formData.company)
        //         getRegistrationFindAll(this.temp)
        //           .then(() => {
        //             this.dialogFormVisible = false
        //             this.$notify({
        //               title: '成功',
        //               message: '上传成功',
        //               type: 'success',
        //               duration: 2000
        //             })
        //             this.getList()
        //             this.resetTemp()
        //           })
        //       //}
        //     //})
        //   },
        // } 

// 需要的在这里1
            methods: {
          submit() {
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
          },
        }
        
  //       getRegistrationFindAll () {
  //         console.log(res);
  //   // this.$api.get('topics', null, r => {
  //   //   console.log(r)
  //   // })
  // }


  // Axios({
//   url: 'http://www.shdejia.cn/api/registration/findAll'
// }).then(res => {
//   console.log(res);
// })

  // createModel () {
  //     this.$refs['dataForm'].validate((valid) => {
  //       if (valid) {
  //         uploadModel(this.temp)
  //           .then(() => {
  //             this.dialogFormVisible = false
  //             this.$notify({
  //               title: '成功',
  //               message: '上传成功',
  //               type: 'success',
  //               duration: 2000
  //             })
  //             this.getList()
  //             this.resetTemp()
  //           })
  //       }
  //     })
  //   },





  }
</script>

<style scoped>
  .recommend {
    min-width: 1280px;
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;

    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
  }

  .recommend-item {
    flex: 1;
  }

  .recommend-item img {
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
  }

  .input{
    position: relative;
    margin: 0 auto;
    width: 60%;
  }

  .input>div{
    float:left;
    margin: 10px 20px;
  }


  .input>div>h3{
    margin: 10px 0;
  }
  input{
    /* margin-top: -30px; */
    height: 30px;
    vertical-align: bottom;
  }
  .input span>img{
    height: 30px;
    width: 30px;
    /* margin-top: 30px ; */
    padding-bottom: 0px;
    margin-bottom: 0px;
    vertical-align: bottom;
  }
  .btn {
    position: absolute;
    width:100px;
    height:30px;
    background-color:rgb(188,160,113);
    color:#fff;
    border-radius:5px;
    line-height:30px;
    top:35px;
    right: 0px;
  }
</style>
