<template>
  <div class="zhuce">
    <h2>商标注册</h2>
        <div class="center">
            <div class="left">
                <div class="top">价格</div>
                <div class="jiage"><img src="~assets/img/page3/jisq.jpg" alt=""> </div>
                <h1  v-for="item in enterInfo" :key="item.id">¥ {{item.price}}</h1>
            </div>
            <div class="right">
                <div class="top2">预约咨询</div>
                <div class="yuyue"><img src="~assets/img/page4/shzu.jpg" alt=""> </div>
                <!-- <div class="mfei"><img src="~assets/img/page2/mfei.jpg" alt="">免费预约</div> -->

                 <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
                <img src="~assets/img/page2/mfei.jpg" alt="">免费预约
                </el-button>
                <!-- <div class="qq"><img src="~assets/img/page2/qq.jpg" alt="">在线咨询</div> -->
                <a class="qq"  target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=592333407&site=qq&menu=yes"><img src="~assets/img/page2/qq.jpg" alt="">在线咨询</a>
                <h5>支持条件：支持全国范围的商标注册</h5>
                <h6>专业代理商标注册，24小时内提交申请，快速保护商标</h6>


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
    import {getRegistrationFindAll, getEnterInfo, getSubInfo} from "network/home";

  export default {
    name: "ShzView",

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
                
                type:3,
                page:2
            },
            
            enterInfo: [

            ],
            data: {},
            name: {},
            price: {},

             drawer: false,
             direction: 'rtl',
        
        }     
    },

    created() {
        this.getEnterInfo()
    },
    

    methods: {
        getEnterInfo() {
            getEnterInfo(this.params)
                  .then((res) => {
                    this.enterInfo = res.data
                    // this.enterInfo = 
                  })
        },

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
    height: 600px;
    background-color: #eee;
    width: 100%;
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
 .cont {
     margin-left:20% ;
 }
 ul {
     float: left;
     width: 30%;
     margin-left:10px ;
     margin-top: 80px;
     
 }
 ul>li {
     list-style-type: none;
     font-size: 10px;
     margin: 10px 0;
     height: 25px;
     line-height: 25px;
     padding: 0;
     width: 105px;
     border: 1px solid #eee;
     text-align: center;
 }
 h5 {
     position: absolute;
     line-height: 40px;
     bottom: 20%;
     left: 25%;
     color: #fff;
     font-weight: normal;
 }
 h1 {
     position: absolute;
     bottom: 35%;
     left: 28%;
     font-weight: normal;
     font-size: 40px;
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
 }
 .mfei>img {
     height: 23px;
     vertical-align:middle;
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
     left: 20%;
     bottom: 15%;
     color: #fff;
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
