<template>
  <div class="zhuce">
    <h2>上海公司注册</h2>
        <div class="center">
            <div class="left">
                <div class="top">可选区域：</div>
                <ul>
                    <li     :class="{'current': item.current}"   v-for="item in enterInfo" :key="item.id" @click="toggleMenu(item)">{{item.name}}</li>
                
                </ul>
                
                <h5>价格：</h5>
                
                     <h1  >¥{{priceInfo}}</h1>
                
               
            </div>
            <div class="right">
                <div class="top2">预约咨询</div>
                <div class="yuyue"><img src="~assets/img/page2/yuyue.jpg" alt=""> </div>
                <!-- <div class="mfei"  @click="isShow = true"><img src="~assets/img/page2/mfei.jpg" alt="">免费预约</div> -->
                <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
                <img src="~assets/img/page2/mfei.jpg" alt="">免费预约
                </el-button>
                <!-- <div class="reply" :isShow='none'>呵呵呵呵</div> -->
                <!-- <el-button type="text" @click="open()"><img src="~assets/img/page2/mfei.jpg" alt="">免费预约</el-button> -->
                <!-- <div class="qq"  @click="toQQ"><img src="~assets/img/page2/qq.jpg" alt="">在线咨询</div> -->

                <a class="qq"  target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=592333407&site=qq&menu=yes"><img src="~assets/img/page2/qq.jpg" alt="">在线咨询</a>
                <h6>申请条件：不限注册资本，不限行业</h6>

                <el-radio-group v-model="direction">
                
                <el-radio label="rtl">从上往下开</el-radio>
                
                </el-radio-group>

                <el-drawer
                title="免费预约"
                :visible.sync="drawer"
                :direction="direction"
                :before-close="handleClose">
                <form  class="input" name="dataForm">
                    <div >
                    <h3>姓名：</h3>                    
                    <el-input type="text"  name="name" prop="name" id="name" v-model="formData.name" placeholder="例：张先生" />
                    </div>
                    <div >
                    <h3 >性别：</h3>  
                    <el-select name="sex"  prop="sex" id="sex" v-model="formData.sex" placeholder="请选择">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                        <!-- <el-option
                        value="1"
                        >
                        男
                        </el-option>
                        <el-option
                        value="0"
                        >
                        女
                        </el-option> -->
                    </el-select>                  
                    <!-- <input type="text"  name="sex" prop="sex" id="sex" v-model="formData.sex"  placeholder="请选择性别"> -->
                    </div>
                    <div >
                    <h3 >备注：</h3>                    
                    <el-input type="text" name="remark" prop="remark" id="remark" v-model="formData.remark"   placeholder="请输入备注"/>
                    <h3 >手机号</h3>
                    <el-input type="text" name="mobile" prop="mobile" id="mobile" v-model="formData.mobile"   placeholder="请输入手机号"/>
                    </div>
                    <div   class="btn" @click="submit">
                    立即提交
                    </div>
                    </form>
                </el-drawer>

            </div>

        </div>
     
  </div>
</template>

<script>
    import {getRegistrationFindAll, getEnterInfo,getSubInfo} from "network/home";
    

  export default {
    name: "ZhuceView",

        data() {        
          return {  
              options: [ {
          value: '1',
          label: '男'
        }, {
          value: '0',
          label: '女'
        }], 
        value: '',
                    
             formData:{
              name:'',
              sex:'',
              remark:'',
              mobile:'',
            },
            params: {
                page:2,
                type:1
            },
            
            enterInfo: [

            ],
            priceInfo: 1500

            ,
            index:[

            ],
            data: {},
            name: {},
            price: {},
            // isShow:false,


             drawer: false,
             direction: 'rtl',
        
        }     
    },

    created() {
        this.getEnterInfo()
        // this.toggleMenu()
    },
    

    methods: {
        
        getEnterInfo() {
            getEnterInfo(this.params)
                  .then((res) => {
                    //   console.log(res.data)
                    this.enterInfo = res.data
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
            // console.log(item.price)
             this.priceInfo = item.price


              this.enterInfo.forEach(elem => {
                elem.current = false
                // console.log(elem.current)
            });
            item.current = true

            // elem.current = true

             console.log(item)
             
            // return {price}
            // this.menuTab.forEach(elem => {
            //     elem.current = false
            // });
            // data.current = true
        },

        // toQQ(){
        //     // target="_blank";
        //     // window.location.href = "http://wpa.qq.com/msgrd?v=3&uin=592333407&site=qq&menu=yes";
        //   // window.location = "https://www.baidu.com/";
        //     // location="http://wpa.qq.com/msgrd?v=3&uin=1771839980&site=qq&menu=yes";
        // }
    //       open() {
    //         console.log(123)
    //         // this.contInfo = item.content
    //     this.$alert('item.content', '您的问题的答案是：', {
    //       confirmButtonText: '确定',
    //       callback: action => {
    //         this.$message({
    //           type: 'info',
    //           message: `action: ${ action }`
    //         });
    //       }
    //     });
    //   }
     handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
       submit() {
                getSubInfo(this.formData)
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
  }
</script>

<style scoped>
.zhuce {
    position: relative;
    height: 500px;
    min-width: 1080px;
}
 h2 {
     font-weight: normal;
     color: black;
     text-align: center;
     line-height: 60px;
     margin-bottom: 30px;
 }
 .center {
     height: 400px;
     width: 900px;
     margin: 0 auto;
     box-shadow: 0 0 5px #888;
     overflow: hidden;
     /* background-color: red; */
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
 .left>.top{
     width: 100%;
     height: 45px;
     line-height: 45px;
     background-color: rgb(188, 160, 113);
     text-align: center;
     color: #fff;
 }
 .right>.top2{
     width: 100%;
     height: 45px;
     line-height: 45px;
     background-color: #fff;
     text-align: center;
     color: rgb(188, 160, 113);
 }
 ul {
     /* float: left; */
     width: 100%;
     height: 100px;
     padding-left:8% ;
     margin-top: 20px;
     
 }
 ul>li {
     display: inline-block;
     list-style-type: none;
     font-size: 10px;
     margin: 5px ;
     height: 25px;
     line-height: 25px;
     padding: 0;
     width: 115px;
     border: 1px solid #eee;
     text-align: center;
 }

 .current {
        /* background-color: rgba(0, 0, 0, .1); */
        color: rgb(188, 160, 113);
        border: 1px solid rgb(188, 160, 113);
        background-image: url(~assets/img/common/gouzi.png);
        background-repeat: no-repeat;/*还有repeat-x,y等*/
        background-size: 25px 25px;
         background-position: 100% ;
    }
    /* .current::after{
        background-image: url(~assets/img/common/gouzi.png);
    } */
 h5 {
     position: absolute;
     bottom: 25%;
     left: 28%;
     color: rgb(188, 160, 113);
     font-weight: normal;
     font-size: 20px;
 }
 h1 {
     position: absolute;
     bottom: 10%;
     left: 28%;
     font-weight: normal;
     font-size: 33px;
     color: red;
 }
 .yuyue>img {
     width: 100%;
     height: 90%;
 }
 /* .mfei {
     position: absolute;
     background-color: rgb(246, 131, 69);
     height: 30px;
     line-height: 30px;
     width: 150px;
     left: 15%;
     top: 40%;
     color: #fff;
     text-align: center;
 } */
 .el-button {
     position: absolute;
     background-color: rgb(246, 131, 69);
     height: 30px;
     /* line-height: -5px; */
     padding-top:4px ;
     width: 150px;
     left: 15%;
     top: 40%;
     color: #fff;
     text-align: center;
 }
 .el-button img {
     height: 23px;
     vertical-align:middle;
 }
 /* .mfei>img {
     height: 23px;
     vertical-align:middle;
 } */
 .qq {
     position: absolute;
     background-color: rgb(71, 193, 243);
     height: 30px;
     line-height: 30px;
     width: 150px;
     left: 55%;
     top: 40%;
     color: #fff;
     text-align: center;
 }
 .qq>img {
     height: 25px;
     vertical-align:middle;
 }

 h6 {
     position: absolute;
     left: 30%;
     top: 70%;
     color: #fff;
     font-weight: normal;
 }

 .reply{
     /* z-index: 4; */
     color: red;
     position: absolute;
     left: 30%;
     top: 70%;
     font-size: 50px;
     /* color: #fff; */
     font-weight: normal;
 }

  .btn {
    /* position: absolute; */
    width:100px;
    height:30px;
    background-color:rgb(188,160,113);
    color:#fff;
    border-radius:5px;
    line-height:30px;
    margin-top:35px;
    margin-left: 150px;
    text-align: center;
  }

  .el-input {
      width: 218px;
  }
 
</style>
